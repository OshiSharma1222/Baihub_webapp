export const siteConfig = {
  name: "BaiHub",
  tagline: "Connecting families with trusted domestic help.",
  siteUrl: "https://www.baihub.co.in",
  bookUrl: "https://baihub.co.in/dl",
  // Update when app login URL is confirmed
  loginUrl: "https://app.baihub.co.in",

  appStores: {
    downloadUrl: "https://baihub.co.in/dl",
    googlePlay: "https://play.google.com/store/apps/details?id=com.baihub.app&pcampaignid=web_share",
    appStore: "https://apps.apple.com/in/app/baihub/id6756186197",
  },

  contact: {
    email: "hello@baihub.co.in",
    phone: "+91 98104 68163",
    whatsappPhone: "919810468163",
  },

  whatsapp: {
    phone: "919810468163",
    defaultMessage:
      "Hello, I would like to enquire about BaiHub domestic help services.",
    serviceMessages: {
      babysitter:
        "Hello, I am looking for a verified Babysitter/Nanny through BaiHub.",
      japa: "Hello, I am looking for a verified Baby Sitter through BaiHub.",
      housemaid: "Hello, I am looking for a verified Housemaid through BaiHub.",
      helper: "Hello, I am looking for a verified Helper through BaiHub.",
    },
    pricingMessage:
      "Hello, I would like to get a custom quote for domestic help through BaiHub.",
    enquiryTemplate:
      "Hello BaiHub, my name is {name}. I need a {role} in {city} for {hours}. Please assist.",
  },

  navLinks: [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why BaiHub", href: "#why-baihub" },
    // { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ],

  areasSection: {
    headline: "Areas We Serve in Bangalore",
    description:
      "BaiHub is live across 10+ premium societies in North Bangalore including Nikoo Homes, Purva Atmosphere, DNR Arista, Sobha City, Vajram Newtown and nearby areas.",
  },

  areas: [
    { id: "nikoo-homes-1", name: "Nikoo Homes 1", experts: 20, etaMinutes: 10 },
    { id: "nikoo-homes-2", name: "Nikoo Homes 2", experts: 18, etaMinutes: 10 },
    { id: "nikoo-homes-3", name: "Nikoo Homes 3", experts: 22, etaMinutes: 12 },
    { id: "nikoo-homes-4", name: "Nikoo Homes 4", experts: 16, etaMinutes: 12 },
    { id: "purva-atmosphere", name: "Purva Atmosphere", experts: 24, etaMinutes: 15 },
    { id: "dnr-arista", name: "DNR Arista", experts: 20, etaMinutes: 15 },
    { id: "sobha-city", name: "Sobha City", experts: 28, etaMinutes: 10 },
    { id: "trendsquares-ambience", name: "Trendsquares Ambience", experts: 18, etaMinutes: 12 },
    { id: "vajram-newtown", name: "Vajram Newtown", experts: 20, etaMinutes: 10 },
    { id: "the-leela-residencies", name: "The Leela Residencies", experts: 15, etaMinutes: 15 },
  ],

  hero: {
    headline: "Trusted Domestic Help in Minutes.",
    subhead:
      "Verified Babysitters, Housemaids and Helpers. Part-time or full-time, with complete peace of mind.",
    trustStrip: "Trusted by 2,500+ families · 12 cities live",
    localityCta: "Request BaiHub in your locality",
    rating: {
      score: "4.8",
      label: "from verified families",
    },
    cities: [
      "Gurgaon",
      "Delhi",
      "Noida",
      "Faridabad",
      "Ghaziabad",
      "Greater Noida",
    ],
    moreCitiesLabel: "+ 6 more cities",
    trustBadges: [
      "100% Verified Helpers",
      "ID & Police Verified",
      "Secure Payments",
      "48h Replacement",
    ],
  },

  services: [
    {
      id: "japa",
      title: "BabySitter",
      description:
        "45+ Babysitters available. Specialized postnatal care for mother and newborn. Bathing, massage, feeding support, and recovery assistance.",
      image: "/images/who-hire-babysitter.png",
      whatsappKey: "japa" as const,
    },
    {
      id: "housemaid",
      title: "House Cleaning",
      description:
        "Professional sweeping, mopping, dusting, and daily upkeep to keep your home spotless.",
      image: "/images/who-hire-cleaning.png",
      whatsappKey: "housemaid" as const,
    },
    {
      id: "cooking",
      title: "Cooking",
      description:
        "Home-style meal preparation, cutting, chopping, and kitchen cleanup. Fresh food daily.",
      image: "/images/who-hire-cooking.png",
      whatsappKey: "helper" as const,
    },
    {
      id: "elderly",
      title: "Elderly Care",
      description:
        "Compassionate companionship, meal service, medication reminders, and daily assistance for seniors.",
      image: "/images/who-hire-elderly.png",
      whatsappKey: "helper" as const,
    },
  ],

  steps: [
    {
      number: 1,
      title: "Tell us your requirements",
      description: "Role, hours, location, and start date. Share what you need.",
      icon: "clipboard",
    },
    {
      number: 2,
      title: "Get matched instantly",
      description: "We connect you with verified, trained helpers who fit your needs.",
      icon: "users",
    },
    {
      number: 3,
      title: "Book & pay securely",
      description: "Manage everything with ongoing support from our team.",
      icon: "shield",
    },
  ],

  whyBaiHub: {
    eyebrow: "Why Choose BaiHub",
    headline: "Trusted by 2,500+ Families",
    trustCard: {
      title: "Trusted by India's Families",
      description:
        "Every helper is background checked, ID verified & professionally trained before their first booking.",
    },
  },

  features: [
    {
      title: "ID & Police Verification",
      description:
        "Every helper passes KYC and police background check before joining.",
      icon: "shield-check",
    },
    {
      title: "Training & Trial Day",
      description:
        "Onboarding covers hygiene, safety, and communication. Try before you commit.",
      icon: "graduation-cap",
    },
    {
      title: "Replacement in 48 Hours",
      description:
        "If it's not the right fit, we replace your helper quickly. No hassle.",
      icon: "refresh-cw",
    },
    {
      title: "Support That Cares",
      description: "Live chat 7 days a week for any booking issue or question.",
      icon: "message-circle",
    },
  ],

  stats: [
    { label: "Families Served", value: 2500, suffix: "+" },
    { label: "Verified Helpers", value: 800, suffix: "+" },
    { label: "Cities", value: 12, suffix: "+" },
    { label: "Avg. Match Time", value: 24, suffix: " hrs" },
  ],

  testimonialsSection: {
    eyebrow: "Customer Reviews",
    headline: "Hear From Our Customers",
  },

  testimonials: [
    {
      quote:
        "Our cook from BaiHub makes delicious home-style meals every day, and the househelp keeps everything spotless. Truly reliable.",
      author: "Niharika",
      role: "Cook & Househelp",
    },
    {
      quote:
        "The babysitter is wonderful with our little one — caring, punctual, and trustworthy. We finally have peace of mind.",
      author: "Gautam",
      role: "Babysitter",
    },
    {
      quote:
        "Having both a househelp and babysitter through BaiHub has made our daily routine so much easier. Highly recommend.",
      author: "Mayuri",
      role: "Househelp & Babysitter",
    },
    {
      quote:
        "Our househelp is hardworking and thorough. The home has never looked better.",
      author: "Prashant",
      role: "Househelp",
    },
    {
      quote:
        "Booking was simple and the helper arrived right on time. Very satisfied with the service.",
      author: "Nishesh",
      role: "Househelp",
    },
    {
      quote:
        "Professional, polite, and dependable househelp. Couldn't ask for more.",
      author: "Ankur",
      role: "Househelp",
    },
    {
      quote:
        "Spotless cleaning every single day. BaiHub made finding help effortless.",
      author: "Ruchi",
      role: "Househelp",
    },
    {
      quote:
        "Reliable and friendly househelp. She treats our home like her own.",
      author: "Parvati",
      role: "Househelp",
    },
    {
      quote:
        "Great experience from start to finish. The househelp is fantastic.",
      author: "Sabah",
      role: "Househelp",
    },
    {
      quote:
        "Quick matching and a wonderful helper. Highly recommend BaiHub.",
      author: "Varun",
      role: "Househelp",
    },
    {
      quote:
        "Our househelp is meticulous and warm. The whole family loves her.",
      author: "Megha",
      role: "Househelp",
    },
    {
      quote:
        "Smooth onboarding and dependable service. Very happy with BaiHub.",
      author: "Gaurav",
      role: "Househelp",
    },
    {
      quote:
        "The helper is punctual and detail-oriented. Our home stays spotless.",
      author: "Saira",
      role: "Househelp",
    },
    {
      quote:
        "Finding trusted help used to be stressful — BaiHub solved that completely.",
      author: "Aditi",
      role: "Househelp",
    },
    {
      quote:
        "Professional service and a lovely househelp. Five stars all the way.",
      author: "Asmita",
      role: "Househelp",
    },
    {
      quote:
        "Reliable help every day without fail. Truly a relief for our family.",
      author: "Abhilasha",
      role: "Househelp",
    },
    {
      quote:
        "Wonderful househelp who is thorough and kind. Highly recommend.",
      author: "Reetika",
      role: "Househelp",
    },
    {
      quote:
        "Excellent service. The helper is hardworking and trustworthy.",
      author: "Manisha",
      role: "Househelp",
    },
    {
      quote:
        "BaiHub matched us with a fantastic househelp. So grateful for the service.",
      author: "Sushmita",
      role: "Househelp",
    },
  ],

  subscriptionBanner: "Save up to 20% with a subscription.",

  safetyItems: [
    {
      title: "KYC Verification",
      description: "Government ID verification for every helper on the platform.",
      icon: "id-card",
    },
    {
      title: "Police Verification",
      description: "Police background checks conducted before placement.",
      icon: "shield",
    },
    {
      title: "Background Checks",
      description: "Reference and work history reviewed for added assurance.",
      icon: "search",
    },
    {
      title: "Support Chat",
      description: "Reach our team 7 days a week for any concern or change.",
      icon: "message-circle",
    },
    {
      title: "Data Privacy",
      description: "Your personal information is handled securely and responsibly.",
      icon: "lock",
    },
  ],

  faq: [
    {
      question: "How are helpers verified?",
      answer:
        "Every helper goes through government ID (KYC) verification and a police background check. We also review references and provide training before placement.",
    },
    {
      question: "What if I'm not satisfied with my helper?",
      answer:
        "We offer a 48-hour replacement guarantee. If the match isn't right, contact our support team and we'll find a replacement quickly.",
    },
    {
      question: "What's the difference between part-time and full-time?",
      answer:
        "Part-time helpers work fixed hours on selected days, ideal for cleaning, cooking, or babysitting shifts. Full-time helpers are dedicated to your household for longer daily hours.",
    },
    {
      question: "How does payment work?",
      answer:
        "You book and pay securely through BaiHub. We support transparent pricing with options for one-time bookings or subscriptions that save up to 20%.",
    },
    {
      question: "Which cities do you serve?",
      answer:
        "BaiHub currently serves major cities across Bangaluru and is expanding. Contact us on WhatsApp to confirm availability in your area.",
    },
    {
      question: "How fast is matching?",
      answer:
        "Most families are matched within 24 hours after sharing their requirements. Urgent requests are prioritized by our support team.",
    },
    {
      question: "What does a Baby Sitter do?",
      answer:
        "Baby sitters specialize in childcare: feeding, bathing, diaper changes, playtime supervision, sleep routines, and ensuring the safety and well-being of your little one.",
    },
  ],

  socialLinks: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/baihub__india/",
      icon: "instagram",
    },
  ],

  footerLinks: {
    company: [
      { label: "About", href: "/about" },
      // { label: "Blog", href: "/blog" },
      // { label: "Support", href: "/support" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
    services: [
      { label: "Babysitters / Nannies", href: "#services" },
      { label: "Housemaids", href: "#services" },
      { label: "Helpers", href: "#services" },
    ],
  },
} as const;

export type ServiceWhatsAppKey = keyof typeof siteConfig.whatsapp.serviceMessages;
