export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroImage: string;
  galleryImages?: string[];
  summary: string;
  detailedDescription: string[];
  keyBenefits: string[];
  scopeIncluded: string[];
  scopeExcluded?: string[];
  commonConcerns: { question: string; answer: string }[];
  processSteps: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  ctaText?: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  heroImage: string;
  shortDesc: string;
  detailedDesc: string;
  suitableServices: string[];
  typicalScope: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  facilityType: string;
  location: string;
  scopeSummary: string;
  image: string;
  aspectsCovered: string[];
}

export const BUSINESS_INFO = {
  name: 'Beyond Cleaning 24',
  tagline: 'Cleaning & Disinfection with Perfection',
  legalName: 'Beyond Cleaning 24 LLC',
  category: 'Commercial Cleaning and Disinfection',
  location: 'Serving Friant, California and surrounding commercial facilities',
  city: 'Friant',
  state: 'CA',
  zip: '93626',
  county: 'Fresno County',
  hours: 'Open 24 Hours, 7 Days a Week for scheduled commercial operations',
  scheduleNotice: 'Commercial cleanings can be scheduled 24/7 around your facility hours. Facility evaluations conducted Monday through Saturday.',
  rating: {
    score: 5.0,
    maxScore: 5.0,
    reviewCount: 1,
    source: 'Google Business Profile',
    attribution: 'Verified Google Business Listing customer review',
  },
  phoneNotice: 'Direct phone line provided during facility evaluation confirmation or by request',
  email: 'info@beyondcleaning24.com',
  colors: {
    primaryOrange: '#F45123',
    primaryOrangeHover: '#DC3E12',
    darkCharcoal: '#1C2028',
    black: '#000000',
    warmWhite: '#FFFFFF',
    softOffWhite: '#F7F7F8',
    lightGray: '#ECEEF1',
    mediumGray: '#6B7280',
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'commercial-deep-cleaning',
    slug: 'commercial-deep-cleaning',
    title: 'Commercial Deep Cleaning',
    shortTitle: 'Deep Cleaning',
    metaTitle: 'Commercial Deep Cleaning Services | Beyond Cleaning 24',
    metaDescription: 'Explore commercial deep cleaning services from Beyond Cleaning 24. Request a facility evaluation to discuss your cleaning requirements.',
    eyebrow: 'THOROUGH & INTENSIVE RESTORATION',
    h1: 'Commercial Deep Cleaning for a More Thorough Clean',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80',
    summary: 'Detailed, top-to-bottom cleaning for commercial facilities requiring intensive care beyond routine day-to-day janitorial maintenance.',
    detailedDescription: [
      'Commercial facilities accumulate fine particulate matter, grease, scale, and high-traffic wear that daily surface wiping cannot eliminate. Beyond Cleaning 24 delivers intensive commercial deep cleaning specifically designed to restore high-touch surfaces, baseboards, vents, difficult corners, and heavy-use zones.',
      'Our team assesses your property layout, surface compositions, and business operational schedule to craft a targeted scope of work. We conduct thorough extraction, scrubbing, and sanitization without disrupting your standard business operations.',
      'From quarterly corporate deep cleans to seasonal facility resets, we help Friant area businesses project an uncompromising standard of cleanliness and care to clients and employees alike.'
    ],
    keyBenefits: [
      'Removes deep-seated grime and soil buildup from inaccessible areas',
      'Revitalizes flooring, grout, baseboards, and wall touchpoints',
      'Promotes healthier indoor air quality for your staff and clients',
      'Extends the lifespan of commercial fixtures, surfaces, and flooring materials',
      'Creates a clean baseline that simplifies ongoing maintenance'
    ],
    scopeIncluded: [
      'Detail scrubbing of baseboards, door frames, and corner moldings',
      'Deep treatment and extraction of commercial flooring and tiled surfaces',
      'High and low dusting of vents, light diffusers, and architectural trims',
      'Intensive cleaning of commercial breakroom cabinetry, sinks, and exterior appliances',
      'Thorough scrubbing and sanitizing of commercial restroom fixtures, partitions, and tile grout',
      'High-touch point disinfection across all shared commercial surfaces'
    ],
    scopeExcluded: [
      'Industrial machinery interior maintenance or hazardous chemical remediation',
      'Structural repairs, painting, or roof maintenance',
      'HVAC ductwork internal shaft dismantling (filter surface vents only)'
    ],
    commonConcerns: [
      {
        question: 'How often should a commercial facility undergo deep cleaning?',
        answer: 'Most professional facilities in the Friant area schedule deep cleaning quarterly, semi-annually, or annually, depending on foot traffic, employee density, and industry requirements.'
      },
      {
        question: 'Can deep cleaning be scheduled outside of our business operating hours?',
        answer: 'Yes. Beyond Cleaning 24 provides flexible scheduling options, including overnight, early morning, and weekend hours to avoid interrupting your workflow.'
      }
    ],
    processSteps: [
      { step: '01', title: 'Facility Walkthrough', description: 'We evaluate your square footage, surface materials, and problem areas during your free evaluation.' },
      { step: '02', title: 'Targeted Plan', description: 'We outline an exact room-by-room scope with appropriate commercial cleaning products and equipment.' },
      { step: '03', title: 'Intensive Execution', description: 'Our commercial team executes the deep clean methodically, from high ceiling fixtures down to baseboards.' },
      { step: '04', title: 'Quality Verification', description: 'We conduct a comprehensive final review against our rigorous standards of perfection.' }
    ],
    faqs: [
      {
        question: 'What is the main difference between routine cleaning and deep cleaning?',
        answer: 'Routine cleaning maintains day-to-day cleanliness (emptying trash, wiping desks, vacuuming pathways). Deep cleaning addresses neglected areas: scrubbing tile grout, sanitizing under heavy fixtures, washing baseboards, and treating high vents.'
      },
      {
        question: 'Do you bring your own commercial cleaning supplies and equipment?',
        answer: 'Yes, our team arrives fully equipped with commercial-grade vacuums, specialized cleaning solutions, microfiber systems, and surface-safe chemicals.'
      },
      {
        question: 'How can I get an accurate quote for our facility?',
        answer: 'Because commercial spaces vary widely in layout and condition, we conduct a free facility evaluation to provide an exact, transparent written scope.'
      }
    ]
  },
  {
    id: 'janitorial-services',
    slug: 'janitorial-services',
    title: 'Janitorial Services',
    shortTitle: 'Janitorial',
    metaTitle: 'Commercial Janitorial Services | Beyond Cleaning 24',
    metaDescription: 'Explore janitorial services for commercial facilities. Contact Beyond Cleaning 24 to discuss your maintenance needs and request an evaluation.',
    eyebrow: 'CONSISTENT DAILY & WEEKLY CARE',
    h1: 'Janitorial Services for Commercial Facilities',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    summary: 'Dependable, recurring janitorial maintenance programs tailored to corporate offices, retail spaces, and commercial properties in Friant, CA.',
    detailedDescription: [
      'Consistent cleanliness is the hallmark of any successful business. Beyond Cleaning 24 provides customized janitorial services that keep your facilities immaculate day in and day out.',
      'We tailor our janitorial schedules to your exact operational rhythm—whether your facility requires daily evening cleanings, three-times-per-week maintenance, or scheduled weekend services. Every task is documented and tracked for accountability.',
      'Our team is trained in commercial protocols, respectful of confidential workspaces, and dedicated to maintaining spotless common areas, conference rooms, breakrooms, and restrooms.'
    ],
    keyBenefits: [
      'Reliable, schedule-adherent cleaning tailored to your working hours',
      'Consistent stock monitoring and restocking of restroom consumables',
      'Spotless restrooms and sanitized break areas for staff comfort',
      'Regular trash removal and recycling management',
      'Custom checklists designed around your specific facility priorities'
    ],
    scopeIncluded: [
      'Daily or scheduled waste receptacle emptying and relining',
      'Sweeping, mopping, and vacuuming of all traffic lanes and office areas',
      'Restroom fixture cleaning, sanitizing, mirror polishing, and paper restocking',
      'Breakroom counter wiping, sink cleaning, and table sanitization',
      'Dusting of horizontal surfaces, reception counters, and conference tables',
      'Entry door glass and touch-fingerprint spot cleaning'
    ],
    commonConcerns: [
      {
        question: 'Do we have to lock into a long-term unchangeable contract?',
        answer: 'No. We believe in earning your trust on every visit. Service agreements are clear, transparent, and can be adjusted as your facility needs grow or change.'
      },
      {
        question: 'Are cleaning teams background-checked and professional?',
        answer: 'Yes, our commercial cleaning team adheres to strict security, confidentiality, and professional conduct protocols at all times.'
      }
    ],
    processSteps: [
      { step: '01', title: 'Schedule Assessment', description: 'Determine optimal cleaning frequencies and shift times with minimal business impact.' },
      { step: '02', title: 'Custom Specification', description: 'Create an itemized facility checklist covering all zones, rooms, and high-priority points.' },
      { step: '03', title: 'Consistent Delivery', description: 'Execute scheduled janitorial visits with strict adherence to checklists and quality standards.' },
      { step: '04', title: 'Continuous Oversight', description: 'Regular management check-ins and open communication ensure standards never slide.' }
    ],
    faqs: [
      {
        question: 'How flexible is the janitorial cleaning schedule?',
        answer: 'We operate 24 hours a day, 7 days a week. Cleanings can take place before your business opens, after closing, or overnight.'
      },
      {
        question: 'Can you provide restroom supplies like paper towels and hand soaps?',
        answer: 'We can manage supply replenishment and coordinate consumables inventory so your restrooms never run out of essential paper goods and soap.'
      }
    ]
  },
  {
    id: 'office-cleaning',
    slug: 'office-cleaning',
    title: 'Office Cleaning',
    shortTitle: 'Office Cleaning',
    metaTitle: 'Office Cleaning Services | Beyond Cleaning 24',
    metaDescription: 'Maintain a clean, professional workplace with office cleaning services from Beyond Cleaning 24. Request a facility evaluation.',
    eyebrow: 'PRODUCTIVITY & PROFESSIONALISM',
    h1: 'Professional Office Cleaning',
    heroImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
    summary: 'Specialized commercial cleaning for corporate offices, executive suites, conference facilities, and collaborative co-working spaces.',
    detailedDescription: [
      'A pristine office inspires confidence in your clients and boosts the health and productivity of your workforce. Beyond Cleaning 24 delivers specialized office cleaning tailored to modern corporate environments.',
      'We treat executive desks, delicate conference room electronics, reception seating, and shared kitchenettes with extreme care. High-touch surfaces such as door knobs, elevator buttons, and conference tables receive meticulous sanitizing.',
      'Whether you operate a financial firm, legal practice, tech workspace, or administrative office in the Friant or greater Fresno area, we provide the quiet, dependable cleanliness you require.'
    ],
    keyBenefits: [
      'Presents a polished, high-end image to visiting clients and stakeholders',
      'Reduces office absenteeism by maintaining clean shared touchpoints',
      'Careful, respectful cleaning around sensitive documents and office tech',
      'Crisp, clean conference rooms always ready for crucial meetings',
      'Tailored cleaning schedules aligned with your company work patterns'
    ],
    scopeIncluded: [
      'Dusting and wiping of open desk surfaces, keyboards, and monitor bases upon request',
      'Conference room sanitization, whiteboard erasing upon client direction, and chair alignment',
      'Reception and waiting area upholstery vacuuming and surface polish',
      'Breakroom appliance exteriors, microwave wipe-down, and sink sanitizing',
      'Restroom detailing, odor control, and fixture sanitization',
      'Floor vacuuming, carpet edging, and hard surface mopping'
    ],
    commonConcerns: [
      {
        question: 'Will cleaners disturb papers or sensitive computer setups?',
        answer: 'Our staff is strictly instructed never to move client documents or disrupt confidential workstations. We clean around designated perimeter areas unless instructed otherwise.'
      }
    ],
    processSteps: [
      { step: '01', title: 'Office Audit', description: 'Review your office floor plan, seating arrangements, conference hubs, and security requirements.' },
      { step: '02', title: 'Care Protocol', description: 'Define specific handling rules for electronics, delicate finishes, and executive suites.' },
      { step: '03', title: 'Thorough Cleaning', description: 'Systematically clean, dust, vacuum, and sanitize each designated office zone.' },
      { step: '04', title: 'Security Lockup', description: 'Ensure doors, windows, and alarm systems are secured exactly according to company protocol.' }
    ],
    faqs: [
      {
        question: 'Can you clean outside normal business hours so our team is not disturbed?',
        answer: 'Yes, most of our office clients prefer evening or weekend cleanings. We coordinate keycard or lockbox access with full security compliance.'
      },
      {
        question: 'Do you service multi-story office buildings or single suites?',
        answer: 'We service single commercial suites as well as multi-tenant office complexes throughout Friant and the surrounding region.'
      }
    ]
  },
  {
    id: 'commercial-move-in-and-move-out-cleaning',
    slug: 'commercial-move-in-and-move-out-cleaning',
    title: 'Commercial Move-In and Move-Out Cleaning',
    shortTitle: 'Move-In / Move-Out',
    metaTitle: 'Commercial Move-In and Move-Out Cleaning | Beyond Cleaning 24',
    metaDescription: 'Prepare commercial properties for a new occupancy or handover with move-in and move-out cleaning services.',
    eyebrow: 'TENANCY & LEASE HANDOVER READINESS',
    h1: 'Commercial Move-In and Move-Out Cleaning',
    heroImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1600&q=80',
    summary: 'Comprehensive property turnover cleaning to prepare commercial premises for handover, lease compliance, or new tenant occupancy.',
    detailedDescription: [
      'Transitioning into or vacating a commercial space requires stringent cleanliness standards. Beyond Cleaning 24 helps property managers, commercial landlords, and departing tenants ensure flawless handovers.',
      'When moving out, meeting commercial lease terms often dictates whether security deposits are returned promptly. We perform intensive corner-to-corner cleaning, wall spot cleaning, fixture degreasing, and floor scrubbing.',
      'When moving into a new facility, we eliminate accumulated storage dust and previous tenant residues so your business steps into a fresh, sanitized environment ready for day-one operations.'
    ],
    keyBenefits: [
      'Helps satisfy commercial lease agreements and property manager handover checklists',
      'Transforms empty spaces into clean, move-in ready facilities for incoming tenants',
      'Detailed attention to interior closets, cabinets, baseboards, and restrooms',
      'Flexible scheduling to fit tight moving deadlines and lease transfer dates'
    ],
    scopeIncluded: [
      'Inside and outside cleaning of empty cabinetry, storage closets, and utility areas',
      'Intensive floor scrubbing, vacuuming, and edging along vacant walls',
      'Wiping of baseboards, light switch plates, door frames, and interior glass',
      'Full commercial restroom scrub, descale, and fixture sanitization',
      'Breakroom kitchenette deep wipe-down and floor degreasing',
      'Removal of residual light trash and dust left behind by movers'
    ],
    commonConcerns: [
      {
        question: 'How quickly can you turn around an empty commercial space?',
        answer: 'Depending on the total square footage, most commercial turnover cleanings are completed within a single dedicated shift or weekend.'
      }
    ],
    processSteps: [
      { step: '01', title: 'Space Inspection', description: 'Walk through the vacated or acquired space to confirm scope and special lease requirements.' },
      { step: '02', title: 'Top-to-Bottom Scope', description: 'Clean ceiling fixtures, vents, walls, and interior storage before floor treatment.' },
      { step: '03', title: 'Floor & Restroom Focus', description: 'Deep clean, scrub, and sanitize all plumbing fixtures and hard/soft floor surfaces.' },
      { step: '04', title: 'Handover Check', description: 'Review against commercial lease expectations to ensure complete satisfaction.' }
    ],
    faqs: [
      {
        question: 'Can you work alongside movers or IT installation teams?',
        answer: 'We recommend scheduling the move-out clean immediately after all furniture and equipment have been removed, or the move-in clean right before furniture arrives for best results.'
      }
    ]
  },
  {
    id: 'retail-store-cleaning',
    slug: 'retail-store-cleaning',
    title: 'Retail Store Cleaning',
    shortTitle: 'Retail Cleaning',
    metaTitle: 'Retail Store Cleaning Services | Beyond Cleaning 24',
    metaDescription: 'Explore commercial cleaning for retail stores and customer-facing spaces. Request an evaluation from Beyond Cleaning 24.',
    eyebrow: 'IMPECCABLE CUSTOMER EXPERIENCES',
    h1: 'Retail Cleaning for Professional Customer Environments',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
    summary: 'Maintain sparkling display windows, immaculate sales floors, and pristine fitting rooms that enhance the shopping experience.',
    detailedDescription: [
      'In retail, cleanliness directly impacts consumer perception and brand trust. Dusty display racks, smudged storefront glass, or dirty floors can deter shoppers before they ever make a purchase.',
      'Beyond Cleaning 24 provides dedicated retail store cleaning services for boutiques, specialty retailers, showrooms, and shopping centers in Friant and surrounding communities.',
      'We focus on high-impact retail touchpoints: gleaming display glass, polished checkout counters, spot-free mirrors in dressing rooms, and streak-free floor care.'
    ],
    keyBenefits: [
      'Creates a welcoming atmosphere that encourages longer customer dwell times',
      'Crystal-clear storefront glass and display casework for optimal product presentation',
      'Spotless customer restrooms and sanitization of high-contact checkout stations',
      'Cleanings coordinated before store opening or after customer closing hours'
    ],
    scopeIncluded: [
      'Storefront entry glass, doors, and interior showcase glass polishing',
      'Sales floor sweeping, buffing, mopping, and carpet vacuuming',
      'Checkout counter disinfection and touch-screen display dusting',
      'Fitting room mirror cleaning, bench sanitizing, and floor clearing',
      'Stockroom pathway clearing and light trash disposal',
      'Customer and staff restroom sanitization and restocking'
    ],
    commonConcerns: [
      {
        question: 'Do you clean while the store is open to the public?',
        answer: 'To ensure customer safety and provide the most thorough clean without obstruction, retail services are primarily conducted before opening or after closing.'
      }
    ],
    processSteps: [
      { step: '01', title: 'Retail Layout Review', description: 'Inspect merchandising layout, sensitive product displays, and high-foot-traffic pathways.' },
      { step: '02', title: 'Schedule Alignment', description: 'Lock in pre-opening or post-closing shifts to avoid interfering with shoppers.' },
      { step: '03', title: 'Precision Detailing', description: 'Clean glass, merchandise plinths, checkouts, and customer amenity zones.' },
      { step: '04', title: 'Floor Finishing', description: 'Perform full floor vacuuming, mopping, or auto-scrubbing for a spotless morning opening.' }
    ],
    faqs: [
      {
        question: 'Can you handle delicate display fixtures and glass cases?',
        answer: 'Yes, our team uses non-abrasive microfiber cloths and streak-free commercial glass formulas specifically designed for display fixtures.'
      }
    ]
  },
  {
    id: 'restaurant-cleaning',
    slug: 'restaurant-cleaning',
    title: 'Restaurant Cleaning',
    shortTitle: 'Restaurant Cleaning',
    metaTitle: 'Restaurant Cleaning Services | Beyond Cleaning 24',
    metaDescription: 'Discuss commercial cleaning for restaurant environments with Beyond Cleaning 24. Request a facility evaluation.',
    eyebrow: 'HOSPITALITY-GRADE STANDARDS',
    h1: 'Restaurant Cleaning Services',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    summary: 'Specialized front-of-house, dining area, bar, and commercial restroom cleaning tailored to food service establishments.',
    detailedDescription: [
      'Dining establishments require impeccable cleanliness to protect their reputation and ensure guest comfort. Beyond Cleaning 24 offers commercial cleaning solutions designed for restaurants, bistros, cafes, and hospitality venues.',
      'We focus on front-of-house excellence: degreasing and polishing dining floor surfaces, deep cleaning booth upholstery, sanitizing host stands, wiping down bar rails, and maintaining immaculate guest restrooms.',
      'We coordinate closely with restaurant management to schedule services during kitchen closed hours, overnight, or early morning before prep shifts commence.'
    ],
    keyBenefits: [
      'Enhances diner confidence with pristine dining rooms and sparkling restrooms',
      'Prevents grease buildup on dining floors, reducing slip and fall hazards',
      'Flexible overnight schedules that work around your kitchen close and opening times',
      'Clear scope clarification tailored to your facility’s specific operational needs'
    ],
    scopeIncluded: [
      'Dining room floor sweeping, scrubbing, degreasing, and mopping',
      'Booth seat vacuuming, table surface sanitization, and chair leg wipe-down',
      'Bar counter, stool, and footrail wiping and sanitizing',
      'Entryway glass, vestibule, and host station detail cleaning',
      'Comprehensive guest and employee restroom scrub, sanitization, and restocking',
      'Trash removal and outdoor dining patio sweeping where agreed'
    ],
    scopeExcluded: [
      'Specialized commercial hood exhaust duct cleaning (requires certified mechanical duct contractors)',
      'Direct food-contact kitchen cooking equipment interior maintenance unless expressly scoped'
    ],
    commonConcerns: [
      {
        question: 'Do you work overnight after the kitchen closes?',
        answer: 'Yes, we regularly perform restaurant cleaning during late-night hours (e.g. 11 PM to 5 AM) so the establishment is fresh and sanitized for morning staff.'
      }
    ],
    processSteps: [
      { step: '01', title: 'Shift Coordination', description: 'Establish the exact window between evening kitchen closing and morning culinary prep.' },
      { step: '02', title: 'Dining & Bar Detailing', description: 'Sanitize tables, bar counters, high-touch menus, and seating areas.' },
      { step: '03', title: 'Degrease & Scrub Floors', description: 'Apply commercial floor degreasers to remove stubborn food oils and traffic stains.' },
      { step: '04', title: 'Restroom Reset', description: 'Scrub and disinfect all restroom fixtures, stall partitions, and mirrors.' }
    ],
    faqs: [
      {
        question: 'Do you clean kitchen cooking line hoods?',
        answer: 'We focus on restaurant dining areas, bars, restrooms, and general commercial surfaces. Specialized exhaust hood ventilation systems require certified kitchen exhaust contractors, which we can clarify during your evaluation.'
      }
    ]
  },
  {
    id: 'post-construction-cleaning',
    slug: 'post-construction-cleaning',
    title: 'Post-Construction Cleaning',
    shortTitle: 'Post-Construction',
    metaTitle: 'Post-Construction Cleaning Services | Beyond Cleaning 24',
    metaDescription: 'Prepare commercial interiors after construction or renovation with post-construction cleaning services from Beyond Cleaning 24.',
    eyebrow: 'FROM BUILD-SITE TO MOVE-IN READY',
    h1: 'Post-Construction Cleaning for Commercial Spaces',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    summary: 'Phased post-construction cleanup to eliminate fine drywall dust, paint overspray, and renovation residues from commercial buildouts.',
    detailedDescription: [
      'Construction and commercial remodeling leave behind an immense volume of fine drywall dust, adhesive stickers, silicone residue, and sawdust. Beyond Cleaning 24 provides phased post-construction cleaning to transform a raw buildout into a pristine commercial environment.',
      'We work in sync with general contractors, project managers, and property owners. From rough cleanup to final detail polish, our specialized HEPA filtration vacuums capture microscopic particulates before they settle into newly installed HVAC systems or carpets.',
      'We service commercial tenant improvements, retail fit-outs, corporate renovations, and newly constructed facilities throughout Friant and the Central Valley.'
    ],
    keyBenefits: [
      'Removes stubborn microscopic drywall dust from ceilings, walls, and ledges',
      'HEPA filtration vacuuming protects sensitive commercial HVAC systems',
      'Safe removal of protective film, stickers, and paint overspray on glass and hardware',
      'Prepares facilities for final building inspections, client walkthroughs, and grand openings'
    ],
    scopeIncluded: [
      'Multi-pass HEPA vacuuming of floors, walls, trim, and accessible horizontal surfaces',
      'Removal of manufacturing stickers, tape residue, and protective plastic from glass and fixtures',
      'Interior window scraping, frame cleaning, and sill detailing',
      'Cabinet interior and exterior wipe-down to remove trapped sawdust',
      'Sanitizing of newly plumbed sinks, faucets, and restroom facilities',
      'Final floor scrub, auto-scrubbing, or protective seal preparation'
    ],
    scopeExcluded: [
      'Heavy structural demolition debris hauling (concrete chunks, steel framing)',
      'Hazardous material remediation (asbestos, lead paint removal)'
    ],
    commonConcerns: [
      {
        question: 'When should post-construction cleaning be scheduled?',
        answer: 'For optimal results, final cleaning should take place after all subcontractors (electricians, painters, plumbers) have completed punch-list work and packed their equipment.'
      }
    ],
    processSteps: [
      { step: '01', title: 'Rough Clean Phase', description: 'Clear remaining packaging debris, sweep coarse materials, and prep for detailing.' },
      { step: '02', title: 'HEPA Dust Extraction', description: 'Systematically vacuum walls, ceiling registers, light fixtures, and cabinetry.' },
      { step: '03', title: 'Detail Surface Scrub', description: 'Remove sticker adhesive, wipe baseboards, and clean interior architectural glass.' },
      { step: '04', title: 'Final Move-In Polish', description: 'Wet mop and auto-scrub floors, polish plumbing fixtures, and inspect for inspection readiness.' }
    ],
    faqs: [
      {
        question: 'Do you offer rough and final post-construction cleanings?',
        answer: 'Yes, we can provide rough cleans during construction milestones, followed by a final white-glove clean before owner turnover.'
      }
    ]
  },
  {
    id: 'commercial-standard-cleaning',
    slug: 'commercial-standard-cleaning',
    title: 'Commercial Standard Cleaning',
    shortTitle: 'Standard Cleaning',
    metaTitle: 'Commercial Standard Cleaning | Beyond Cleaning 24',
    metaDescription: 'Explore standard commercial cleaning for offices and other eligible facilities. Request a free evaluation from Beyond Cleaning 24.',
    eyebrow: 'RELIABLE BASELINE MAINTENANCE',
    h1: 'Standard Commercial Cleaning for Everyday Facility Needs',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    summary: 'Essential day-to-day cleaning that maintains an orderly, sanitary, and welcoming commercial environment.',
    detailedDescription: [
      'Commercial Standard Cleaning provides the steady foundation every operational business requires. Beyond Cleaning 24 delivers dependable baseline maintenance that keeps dust at bay, restrooms sanitary, and common spaces neat.',
      'Ideal for facilities that do not yet require intensive daily janitorial staffing but want regular, professional upkeep on a weekly or bi-weekly cadence.',
      'Our commercial team follows a systematic checklist covering trash collection, surface wipe-downs, floor care, and restroom replenishment.'
    ],
    keyBenefits: [
      'Cost-effective baseline maintenance tailored to small and mid-sized commercial spaces',
      'Keeps high-traffic common areas looking fresh and welcoming',
      'Eliminates clutter and accumulated surface dust in administrative areas',
      'Customized frequency options (weekly, bi-weekly, or monthly)'
    ],
    scopeIncluded: [
      'Emptying of all office wastebaskets and recycling bins',
      'Sanitizing of kitchen sink, countertops, and microwave interior/exterior',
      'Wiping and sanitizing of restroom toilets, urinals, mirrors, and countertops',
      'Replenishment of toilet paper, soap, and paper towels',
      'Vacuuming of carpeted walkways and damp mopping of hard-surface floors',
      'Dusting of reception desk, conference tables, and window sills'
    ],
    commonConcerns: [
      {
        question: 'Is standard cleaning enough for high-traffic facilities?',
        answer: 'For facilities with high foot traffic or dozens of employees, we often recommend our dedicated Janitorial or Deep Cleaning programs. We evaluate your needs during your free walkthrough.'
      }
    ],
    processSteps: [
      { step: '01', title: 'Needs Assessment', description: 'Confirm baseline tasks and frequency that best match your budget and facility size.' },
      { step: '02', title: 'Structured Checklist', description: 'Establish clear standard operating procedures for each visit.' },
      { step: '03', title: 'Systematic Execution', description: 'Deliver prompt, thorough cleaning on your agreed schedule.' }
    ],
    faqs: [
      {
        question: 'Can we switch from standard cleaning to deep cleaning periodically?',
        answer: 'Yes! Many of our commercial clients combine regular standard cleaning with scheduled seasonal deep cleanings.'
      }
    ]
  },
  {
    id: 'commercial-disinfection',
    slug: 'commercial-disinfection',
    title: 'Commercial Disinfection',
    shortTitle: 'Disinfection',
    metaTitle: 'Commercial Disinfection Services | Beyond Cleaning 24',
    metaDescription: 'Discuss commercial disinfection services with Beyond Cleaning 24 and request an evaluation for your facility.',
    eyebrow: 'TARGETED SANITIZATION & PROTOCOLS',
    h1: 'Commercial Disinfection Solutions',
    heroImage: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=1600&q=80',
    summary: 'Targeted application of EPA-registered commercial disinfectants on high-contact touchpoints according to manufacturer dwell times.',
    detailedDescription: [
      'Maintaining a healthy workplace requires more than superficial tidiness. Beyond Cleaning 24 provides targeted commercial disinfection services designed to reduce microbial loads on critical shared touchpoints.',
      'We understand the crucial distinction between cleaning (removing physical dirt and organic matter) and disinfecting (using chemical agents to deactivate pathogens on clean surfaces). Our team ensures surfaces are pre-cleaned prior to disinfectant application.',
      'We adhere strictly to manufacturer-specified dwell times, ensuring disinfectants remain wet on surfaces for the duration required for maximum efficacy without damaging sensitive commercial finishes.'
    ],
    keyBenefits: [
      'Targeted treatment of high-touch vectors: door hardware, elevator controls, railings, and conference tables',
      'Strict adherence to chemical manufacturer dwell times for proven efficacy',
      'Safe application compatible with commercial wood, composite, metal, and glass finishes',
      'Transparent communication and peace of mind for employees, clients, and visitors'
    ],
    scopeIncluded: [
      'Pre-cleaning of surfaces to remove grease, dust, and organic barriers',
      'Application of EPA-registered broad-spectrum commercial disinfectants',
      'Careful dwell time monitoring to ensure active sanitization',
      'Targeted treatment of door pulls, panic bars, keypad locks, and light switches',
      'Sanitization of shared breakroom handles, faucet levers, and water dispenser controls',
      'Comprehensive restroom fixture, flush lever, partition lock, and hand dryer disinfection'
    ],
    scopeExcluded: [
      'Sterilization of invasive medical instruments (surgical grade autoclaving)',
      'Unsupported claims of permanent immunity or total virus eradication'
    ],
    commonConcerns: [
      {
        question: 'Are the disinfection products safe for office electronics and furniture?',
        answer: 'We select surface-compatible, non-bleach quaternary ammonium or hydrogen peroxide disinfectants applied via microfiber to prevent pooling on electronics.'
      }
    ],
    processSteps: [
      { step: '01', title: 'Risk Assessment', description: 'Identify primary high-touch congregation points and traffic flow through your facility.' },
      { step: '02', title: 'Pre-Cleaning Step', description: 'Remove dirt and organic films that can shield microbes from disinfectant contact.' },
      { step: '03', title: 'Targeted Disinfection', description: 'Apply approved disinfectant solutions ensuring full contact and required dwell time.' },
      { step: '04', title: 'Documentation', description: 'Provide a clear summary of treated areas and recommend ongoing maintenance protocols.' }
    ],
    faqs: [
      {
        question: 'What is the difference between sanitizing and disinfecting?',
        answer: 'Sanitizing reduces bacteria counts to safe levels specified by public health standards. Disinfecting uses specific antimicrobial agents to kill or deactivate a broader spectrum of pathogens on hard surfaces.'
      },
      {
        question: 'Do you offer emergency disinfection response?',
        answer: 'We offer flexible 24/7 commercial response upon confirmation to help facilities address acute contamination concerns promptly.'
      }
    ]
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'corporate-offices',
    slug: 'corporate-offices',
    title: 'Corporate Offices & Suites',
    heroImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Executive suites, legal practices, finance headquarters, and multi-tenant office complexes.',
    detailedDesc: 'Corporate environments require discreet, meticulous cleaning that preserves confidentiality, protects high-end furnishings, and creates an inspiring workspace for your staff.',
    suitableServices: ['Office Cleaning', 'Commercial Deep Cleaning', 'Janitorial Services'],
    typicalScope: ['Boardrooms', 'Executive Desks', 'Reception & Waiting Lounges', 'Kitchenettes', 'Restrooms']
  },
  {
    id: 'retail-stores',
    slug: 'retail-stores',
    title: 'Retail Stores & Showrooms',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Boutiques, shopping plazas, automobile showrooms, and consumer outlets.',
    detailedDesc: 'First impressions drive customer buying confidence. We ensure display glass, customer pathways, and sales counters stay sparkling and fingerprint-free.',
    suitableServices: ['Retail Store Cleaning', 'Commercial Standard Cleaning', 'Commercial Disinfection'],
    typicalScope: ['Storefront Glass', 'Checkout Counters', 'Dressing Rooms', 'Merchandise Display Areas']
  },
  {
    id: 'restaurants',
    slug: 'restaurants',
    title: 'Restaurants & Hospitality',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Dining rooms, bistros, bar seating, banquet facilities, and guest amenity areas.',
    detailedDesc: 'Dining establishments face intense scrutiny regarding cleanliness. We deliver front-of-house floor degreasing, booth sanitation, and sparkling restrooms on overnight shifts.',
    suitableServices: ['Restaurant Cleaning', 'Commercial Deep Cleaning', 'Commercial Disinfection'],
    typicalScope: ['Dining Floors', 'Bar Counters', 'Host Stations', 'Guest Restrooms', 'Outdoor Patios']
  },
  {
    id: 'commercial-properties',
    slug: 'commercial-properties',
    title: 'Commercial Properties & Buildings',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Property management portfolios, common lobbies, business parks, and mixed-use commercial centres.',
    detailedDesc: 'Property managers depend on Beyond Cleaning 24 for reliable ongoing common-area upkeep, tenant transition turnovers, and elevator lobby maintenance.',
    suitableServices: ['Janitorial Services', 'Commercial Move-In and Move-Out Cleaning', 'Commercial Standard Cleaning'],
    typicalScope: ['Elevator Cabs & Glass', 'Shared Lobbies', 'Common Corridors', 'Restroom Blocks']
  },
  {
    id: 'newly-constructed-spaces',
    slug: 'newly-constructed-spaces',
    title: 'Newly Built & Renovated Spaces',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Commercial construction completions, architectural renovations, and tenant improvements.',
    detailedDesc: 'General contractors and building owners trust our methodical multi-stage cleanup to transform drywall dust and construction debris into pristine, hand-over ready buildings.',
    suitableServices: ['Post-Construction Cleaning', 'Commercial Deep Cleaning'],
    typicalScope: ['HEPA Dust Extraction', 'Window Sticker Removal', 'Floor Machine Scrubbing', 'Fixture Detailing']
  },
  {
    id: 'other-commercial-facilities',
    slug: 'other-commercial-facilities',
    title: 'Other Eligible Commercial Facilities',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Gymnasiums, professional training centers, community venues, and administrative hubs.',
    detailedDesc: 'Whatever your commercial facility structure, we tailor our equipment, chemistry, and shift times to meet your exact environmental and compliance demands.',
    suitableServices: ['Commercial Disinfection', 'Commercial Standard Cleaning', 'Janitorial Services'],
    typicalScope: ['High-Touch Stations', 'Locker Rooms', 'Training Halls', 'Administrative Workspaces']
  }
];

export const SERVICE_AREAS = [
  {
    name: 'Friant, California',
    isPrimary: true,
    description: 'Our home service territory. Full availability for 24/7 commercial cleaning schedules, emergency response, and free in-person facility evaluations.',
    highlights: ['Millerton Lake Commercial Hubs', 'Friant Business Corridors', 'Local Offices & Retail']
  },
  {
    name: 'North Fresno Commercial District',
    isPrimary: false,
    description: 'Servicing commercial office parks, retail centers, and medical-adjacent office suites with regular janitorial and deep cleaning programs.',
    highlights: ['Woodward Park Office Center', 'River Park Commercial Zone', 'Friant Road Corporate Corridor']
  },
  {
    name: 'Clovis Commercial Area',
    isPrimary: false,
    description: 'Supporting growing commercial developments, professional offices, retail store handovers, and restaurant facilities in the greater Clovis area.',
    highlights: ['Old Town Clovis Commercial', 'Herndon Commercial Corridor', 'Corporate Business Parks']
  },
  {
    name: 'Central Valley Regional Projects',
    isPrimary: false,
    description: 'Available for major post-construction cleanups, commercial move-ins, and large deep cleaning projects across Fresno County upon confirmation.',
    highlights: ['Tenant Improvement Turnovers', 'New Commercial Builds', 'Facility Resets']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Executive Corporate Office Deep Clean',
    category: 'Office Cleaning',
    facilityType: '12,000 sq ft Corporate Headquarters',
    location: 'Friant Road Corridor, CA',
    scopeSummary: 'Comprehensive commercial deep cleaning, high-vent extraction, executive desk detailing, and commercial tile restoration.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    aspectsCovered: ['Vented Ceiling Trims', 'Floor Detailing', 'Conference Audio-Visual Desks', 'Restroom Sanitization']
  },
  {
    id: 'proj-2',
    title: 'Retail Store Grand Opening Detailing',
    category: 'Retail Store Cleaning',
    facilityType: '6,500 sq ft Premium Retail Showroom',
    location: 'Friant Commercial Plaza, CA',
    scopeSummary: 'Post-construction sticker removal, storefront glass polishing, sales counter sanitization, and streak-free floor buffing.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    aspectsCovered: ['Storefront Glass', 'Display Casework', 'High Traffic Lanes', 'Dressing Room Mirrors']
  },
  {
    id: 'proj-3',
    title: 'Hospitality Dining Room Reset',
    category: 'Restaurant Cleaning',
    facilityType: '4,200 sq ft Casual Fine-Dining Restaurant',
    location: 'Friant, CA',
    scopeSummary: 'Overnight front-of-house degreasing, booth upholstery sanitization, bar rail polishing, and deep restroom descaling.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    aspectsCovered: ['Floor Degreasing', 'Bar Rail Detailing', 'Restroom Tile Scrub', 'Host Station Sanitization']
  },
  {
    id: 'proj-4',
    title: 'Post-Renovation Commercial Buildout',
    category: 'Post-Construction Cleaning',
    facilityType: '18,500 sq ft Multi-Tenant Commercial Building',
    location: 'North Fresno / Friant Area, CA',
    scopeSummary: 'Two-stage drywall dust remediation using HEPA vacuums, window frame sticker clearing, and final move-in floor machine washing.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    aspectsCovered: ['Drywall Particulate Capture', 'Window Sticker Scraping', 'Plumbing Fixture Polish', 'Corridor Auto-Scrubbing']
  },
  {
    id: 'proj-5',
    title: 'Ongoing Commercial Janitorial Program',
    category: 'Janitorial Services',
    facilityType: '8,000 sq ft Professional Services Firm',
    location: 'Friant, CA',
    scopeSummary: 'Scheduled 5-night/week janitorial maintenance, recycling management, breakroom detailing, and high-touch disinfection.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    aspectsCovered: ['Nightly Waste Handling', 'Kitchenette Detailing', 'Restroom Restocking', 'High-Touch Sanitizing']
  },
  {
    id: 'proj-6',
    title: 'Targeted High-Touch Commercial Disinfection',
    category: 'Commercial Disinfection',
    facilityType: '10,500 sq ft Community Business Facility',
    location: 'Friant Area, CA',
    scopeSummary: 'Systematic pre-cleaning and dwell-time-verified broad spectrum disinfectant application across shared meeting spaces and facilities.',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=800&q=80',
    aspectsCovered: ['Railings & Hardware', 'Conference Tables', 'Shared Office Keypads', 'Breakroom Touchpoints']
  }
];

export const REVIEWS_DATA = [
  {
    id: 'rev-1',
    author: 'Verified Business Client',
    businessType: 'Commercial Facility Manager',
    location: 'Friant, CA Area',
    rating: 5,
    date: 'Recent Verified Review',
    text: 'Beyond Cleaning 24 delivered an exceptional level of cleanliness for our commercial space. Their attention to detail, punctuality, and thoroughness surpassed our expectations. The facility looked and smelled immaculate. Highly recommended for any business that cares about their professional image.',
    source: 'Google Business Listing Profile',
    verified: true
  }
];

export const FAQS_DATA = [
  {
    category: 'General Services',
    items: [
      {
        question: 'What types of commercial cleaning services do you offer?',
        answer: 'Beyond Cleaning 24 provides nine primary commercial services: Commercial Deep Cleaning, Janitorial Services, Office Cleaning, Move-In / Move-Out Cleaning, Retail Store Cleaning, Restaurant Cleaning, Post-Construction Cleaning, Commercial Standard Cleaning, and Commercial Disinfection.'
      },
      {
        question: 'Do you provide free facility evaluations?',
        answer: 'Yes! We offer a 100% complimentary, no-obligation facility evaluation for commercial businesses in the Friant area. We visit your property, review your square footage, identify critical priorities, and provide an itemized written scope.'
      },
      {
        question: 'Can you clean offices and retail stores?',
        answer: 'Absolutely. We specialize in corporate offices, executive suites, boutiques, showrooms, and retail stores with tailored schedules that do not interrupt your patrons or staff.'
      },
      {
        question: 'Do you offer restaurant cleaning?',
        answer: 'Yes. We provide front-of-house restaurant cleaning including dining floor degreasing, booth detailing, bar counter sanitization, and restroom deep scrubbing, primarily scheduled during kitchen closed hours.'
      }
    ]
  },
  {
    category: 'Operations & Scheduling',
    items: [
      {
        question: 'Can cleaning be scheduled outside normal business hours?',
        answer: 'Yes. Beyond Cleaning 24 is listed as operating 24 hours, 7 days a week for commercial cleaning execution. We regularly perform cleanings during evening, overnight, and early morning shifts to protect your daily workflow.'
      },
      {
        question: 'Which areas do you serve?',
        answer: 'We are based in and serve Friant, California (93626), as well as commercial clients across northern Fresno County and neighboring Central Valley business corridors upon scheduling confirmation.'
      },
      {
        question: 'How can I request a quote?',
        answer: 'Simply click "Request a Free Evaluation" anywhere on our website, fill out our quick 2-minute facility questionnaire, or chat with our Virtual Assistant. We will get back to you promptly to arrange your walkthrough.'
      }
    ]
  },
  {
    category: 'Standards & Protocols',
    items: [
      {
        question: 'What does commercial deep cleaning include?',
        answer: 'Commercial deep cleaning includes intensive baseboard detailing, deep floor scrubbing and grout treatment, high/low air vent dusting, restroom descaling, interior cabinetry cleaning, and thorough high-touch point disinfection.'
      },
      {
        question: 'Is commercial disinfection available?',
        answer: 'Yes. We provide targeted commercial disinfection using EPA-registered products applied with precise dwell times on high-contact touchpoints such as door hardware, elevator panels, conference tables, and restrooms.'
      },
      {
        question: 'Do you clean commercial properties before move-in or after move-out?',
        answer: 'Yes. We prepare commercial spaces for lease handovers, property turnover inspections, and new tenant move-ins with top-to-bottom detailing.'
      },
      {
        question: 'Do you offer post-construction cleaning?',
        answer: 'Yes. We provide rough and final post-construction cleans to remove drywall dust, sawdust, sticker residue, and construction films from newly built or renovated commercial spaces.'
      }
    ]
  }
];
