import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '10mb' }));

// In-memory rate limiting map for basic spam protection
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 30; // 30 req/min per IP

const rateLimiter = (req: Request, res: Response, next: () => void) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  if (now - entry.lastReset > RATE_LIMIT_WINDOW) {
    entry.count = 1;
    entry.lastReset = now;
  } else {
    entry.count += 1;
  }

  rateLimitMap.set(ip, entry);

  if (entry.count > MAX_REQUESTS) {
    return res.status(429).json({
      error: 'Too many requests. Please wait a moment before trying again.',
    });
  }
  next();
};

app.use('/api', rateLimiter);

// System instruction for Beyond Cleaning Virtual Assistant
const SYSTEM_INSTRUCTION = `You are the Beyond Cleaning Virtual Assistant for Beyond Cleaning 24, a premier commercial cleaning and disinfection company serving the Friant, California area and surrounding Central Valley / Fresno County commercial properties.

Business Identity:
- Name: Beyond Cleaning 24
- Tagline: Cleaning & Disinfection with Perfection
- Service Area: Friant, California and surrounding commercial facilities.
- Focus: Strictly commercial cleaning and disinfection for professional environments (offices, retail, restaurants, newly constructed spaces, commercial properties).
- Hours: 24/7 availability for scheduled commercial cleanings upon agreement; facility evaluations scheduled promptly.
- Rating: 5.0 out of 5 based on 1 verified client review.
- Offer: 100% Free Facility Evaluation for all commercial spaces.

Primary Services Provided:
1. Commercial Deep Cleaning (intensive detailed facility care)
2. Janitorial Services (ongoing contract maintenance, day/night porter)
3. Office Cleaning (workstations, boardrooms, shared amenities)
4. Commercial Move-In and Move-Out Cleaning (turnover readiness)
5. Retail Store Cleaning (customer-facing sales floors, checkouts)
6. Restaurant Cleaning (dining spaces, restrooms, commercial surfaces)
7. Post-Construction Cleaning (dust and debris cleanup after renovations)
8. Commercial Standard Cleaning (routine commercial maintenance)
9. Commercial Disinfection (targeted high-touch sanitization and disinfection protocols)

Tone & Behavior Rules:
- Professional, welcoming, concise, helpful, and detail-oriented.
- Help visitors discover the right service for their commercial facility.
- Answer questions accurately.
- DO NOT invent prices (quotes are provided after facility evaluation), do not invent fake client logos, do not invent certifications (like hospital/surgical grade), and do not claim impossible guarantees like 100% sterile environments forever.
- Proactively offer to help users request their Free Facility Evaluation.
- When a user wants an evaluation or quote, ask for:
  1. Full Name
  2. Business / Facility Name
  3. Email Address and Phone Number
  4. Type of Facility & Location (e.g. Friant, CA)
  5. Desired Service & Approximate Size (sq ft)
  6. Preferred schedule / frequency
- Keep answers structured with bullet points or short paragraphs.`;

// Endpoint: AI Chat Assistant
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, conversationHistory } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message text is required.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        
        // Build conversation contents
        const contents: any[] = [];
        if (Array.isArray(conversationHistory)) {
          for (const item of conversationHistory.slice(-10)) {
            if (item.sender === 'user') {
              contents.push({ role: 'user', parts: [{ text: item.text }] });
            } else if (item.sender === 'assistant' || item.sender === 'bot') {
              contents.push({ role: 'model', parts: [{ text: item.text }] });
            }
          }
        }
        contents.push({ role: 'user', parts: [{ text: message }] });

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.6,
            maxOutputTokens: 800,
          },
        });

        const reply = response.text || 'I would be happy to connect you with our facility specialist for a free evaluation in Friant, CA.';
        return res.json({ reply });
      } catch (geminiError: any) {
        console.warn('Gemini API call error, using domain assistant fallback:', geminiError?.message || geminiError);
        // Fallback to intelligent rule-based response
      }
    }

    // Domain-Specific Smart Assistant Fallback
    const lower = message.toLowerCase();
    let reply = '';

    if (lower.includes('office') || lower.includes('desk') || lower.includes('workstation')) {
      reply = "Our Professional Office Cleaning covers workstations, executive suites, conference rooms, break areas, and high-touch commercial surfaces across Friant, CA. We customize service plans around your work hours to ensure zero disruption. Would you like to schedule a free facility evaluation?";
    } else if (lower.includes('deep') || lower.includes('intensive') || lower.includes('detail')) {
      reply = "Commercial Deep Cleaning with Beyond Cleaning 24 targets hard-to-reach areas, detailed baseboard and fixture cleaning, intensive carpet and hard-surface care, and high-contact disinfection. It is ideal for periodic refreshes. Would you like a complimentary facility walkthrough to assess your space?";
    } else if (lower.includes('janitorial') || lower.includes('porter') || lower.includes('daily') || lower.includes('regular')) {
      reply = "Beyond Cleaning 24 offers dedicated Janitorial Services tailored to ongoing maintenance agreements—daytime porter support or evening commercial janitorial cycles in Friant and nearby facilities. Let us know your facility size and frequency needs to explore custom scheduling.";
    } else if (lower.includes('post-construction') || lower.includes('construction') || lower.includes('renovat') || lower.includes('dust')) {
      reply = "Our Post-Construction Cleaning addresses accumulated drywall dust, window sticker residue, floor scrub/seal prep, and fine particulates to make newly built or remodeled commercial spaces move-in ready. When is your project handover date?";
    } else if (lower.includes('restaurant') || lower.includes('dining') || lower.includes('bar') || lower.includes('kitchen')) {
      reply = "For restaurants and dining venues, Beyond Cleaning 24 provides meticulous floor care, dining area sanitization, restroom deep cleaning, and front-of-house perfection. Contact us to coordinate an evaluation around your operating shifts.";
    } else if (lower.includes('retail') || lower.includes('store') || lower.includes('shop') || lower.includes('showroom')) {
      reply = "Retail store cleaning ensures high-traffic sales floors, glass display units, checkout counters, and customer amenities create an immaculate first impression for shoppers in the Friant area.";
    } else if (lower.includes('disinfect') || lower.includes('sanitize') || lower.includes('germ')) {
      reply = "Commercial Disinfection with Beyond Cleaning 24 utilizes targeted application of approved disinfectants according to manufacturer labels on high-touch touchpoints—door hardware, railings, conference tables, and shared facilities.";
    } else if (lower.includes('quote') || lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('evaluation')) {
      reply = "Because every commercial facility has unique square footage, surface types, and scheduling requirements, we provide 100% Free Facility Evaluations rather than generic estimates. You can request yours directly through our online form or share your business name and facility size right here!";
    } else if (lower.includes('area') || lower.includes('location') || lower.includes('friant') || lower.includes('fresno') || lower.includes('clovis')) {
      reply = "Beyond Cleaning 24 proudly serves Friant, California and surrounding commercial properties in Fresno County. Contact us with your address to confirm scheduling availability for your facility.";
    } else if (lower.includes('hour') || lower.includes('24') || lower.includes('time') || lower.includes('weekend') || lower.includes('night')) {
      reply = "We operate 24 hours a day, 7 days a week for commercial cleaning schedules so your business operations are never disrupted. Cleanings can be arranged early morning, late night, or over weekends based on agreed service scope.";
    } else {
      reply = "Welcome to Beyond Cleaning 24—Cleaning & Disinfection with Perfection. We specialize in commercial cleaning, deep cleaning, janitorial services, office cleaning, and disinfection for facilities in Friant, CA. How can we support your facility's cleanliness standards today?";
    }

    return res.json({ reply });
  } catch (err: any) {
    console.error('Server error handling chat:', err);
    return res.status(500).json({ error: 'Internal assistant error. Please try again shortly.' });
  }
});

// Endpoint: Free Facility Evaluation Request
app.post('/api/evaluation', (req: Request, res: Response) => {
  try {
    const {
      fullName,
      businessName,
      email,
      phone,
      facilityAddress,
      facilityType,
      approxSize,
      services,
      frequency,
      preferredSchedule,
      projectDescription,
      consent
    } = req.body;

    // Strict validation
    if (!fullName || !businessName || !email || !phone) {
      return res.status(400).json({
        error: 'Please provide full name, business name, email address, and phone number.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    if (!consent) {
      return res.status(400).json({ error: 'Please confirm consent to be contacted regarding your evaluation request.' });
    }

    // Generate reference ID
    const timestamp = Date.now().toString().slice(-6);
    const referenceId = `BC24-EVAL-${timestamp}`;

    console.log(`[Facility Evaluation Request Received] Reference: ${referenceId}`);
    console.log(`Client: ${fullName} (${businessName}) | ${email} | ${phone}`);
    console.log(`Facility: ${facilityType || 'Not specified'} ~ ${approxSize || 'N/A'} sq ft at ${facilityAddress || 'Friant Area'}`);
    console.log(`Services: ${Array.isArray(services) ? services.join(', ') : services || 'None'}`);

    return res.json({
      success: true,
      referenceId,
      message: 'Your free facility evaluation request has been securely recorded. Our commercial team will review your requirements and reach out within 1 business day.',
    });
  } catch (err: any) {
    console.error('Evaluation submission error:', err);
    return res.status(500).json({ error: 'Failed to process evaluation request. Please try again.' });
  }
});

// Endpoint: General Contact Inquiry
app.post('/api/contact', (req: Request, res: Response) => {
  try {
    const { name, email, phone, message, subject } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const referenceId = `BC24-MSG-${Date.now().toString().slice(-6)}`;
    console.log(`[Contact Inquiry] Reference: ${referenceId} from ${name} (${email}, ${phone || 'N/A'}) - Subject: ${subject || 'General'}`);

    return res.json({
      success: true,
      referenceId,
      message: 'Thank you for reaching out to Beyond Cleaning 24. Your message has been received.',
    });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to process inquiry.' });
  }
});

// Setup Vite middlewares in development or serve static build in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Beyond Cleaning 24 server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
