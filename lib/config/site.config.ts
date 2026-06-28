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
      japa: "Hello, I am looking for a verified Japa Maid through BaiHub.",
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
    { label: "About", href: "/about" },
  ],

  hero: {
    headline: "Trusted Domestic Help in Minutes.",
    subhead:
      "Verified Babysitters, Japa Maids, Housemaids and Helpers. Part-time or full-time, with complete peace of mind.",
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
      title: "Japa Maid",
      description:
        "Specialized postnatal care for mother and newborn. Bathing, massage, feeding support, and recovery assistance.",
      image: "/images/service-japa.png",
      whatsappKey: "japa" as const,
    },
    {
      id: "housemaid",
      title: "House Cleaning",
      description:
        "Professional sweeping, mopping, dusting, and daily upkeep to keep your home spotless.",
      image: "/images/service-cleaning.png",
      whatsappKey: "housemaid" as const,
    },
    {
      id: "cooking",
      title: "Cooking",
      description:
        "Home-style meal preparation, cutting, chopping, and kitchen cleanup. Fresh food daily.",
      image: "/images/service-cooking.png",
      whatsappKey: "helper" as const,
    },
    {
      id: "elderly",
      title: "Elderly Care",
      description:
        "Compassionate companionship, meal service, medication reminders, and daily assistance for seniors.",
      image: "/images/service-elderly.png",
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

  testimonials: [
    {
      quote:
        "BaiHub connected us with a wonderful nanny quickly and stress-free.",
      author: "Amanda S.",
      location: "Gurgaon",
    },
    {
      quote:
        "The Japa maid they matched was exactly what we needed after delivery. Very professional.",
      author: "Priya M.",
      location: "Delhi NCR",
    },
    {
      quote:
        "Background verification gave us peace of mind. Our housemaid has been with us for 6 months now.",
      author: "Rahul K.",
      location: "Noida",
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
      question: "What does a Japa maid do?",
      answer:
        "Japa maids specialize in postnatal care: newborn bathing and massage, breastfeeding support, mother recovery assistance, hygiene for baby and mother, and sometimes postnatal meal preparation.",
    },
  ],

  socialLinks: [
    {
      name: "Facebook",
      href: "https://facebook.com/baihub",
      icon: "facebook",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/baihub",
      icon: "twitter",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/baihub__india",
      icon: "instagram",
    },
  ],

  footerLinks: {
    company: [
      { label: "About", href: "/about" },
      { label: "Support", href: "/support" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
    services: [
      { label: "Babysitters / Nannies", href: "#services" },
      { label: "Japa Maids", href: "#services" },
      { label: "Housemaids", href: "#services" },
      { label: "Helpers", href: "#services" },
    ],
  },
} as const;

export type ServiceWhatsAppKey = keyof typeof siteConfig.whatsapp.serviceMessages;
