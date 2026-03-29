export const languages = {
  de: "Deutsch",
  en: "English",
};

export const defaultLang = "de";

// URL path mapping between languages
export const langPathMap: Record<string, Record<string, string>> = {
  de: {
    "/": "/",
    "/ueber-uns": "/ueber-uns",
    "/programme": "/programme",
    "/programme/spatzenprogramm": "/programme/spatzenprogramm",
    "/programme/falkenprogramm": "/programme/falkenprogramm",
    "/einschreibung": "/einschreibung",
    "/kalender": "/kalender",
    "/schulrichtlinien": "/schulrichtlinien",
    "/erfahrungsberichte": "/erfahrungsberichte",
    "/kontakt": "/kontakt",
  },
  en: {
    "/": "/en",
    "/ueber-uns": "/en/about",
    "/programme": "/en/programs",
    "/programme/spatzenprogramm": "/en/programs/sparrows",
    "/programme/falkenprogramm": "/en/programs/falcons",
    "/einschreibung": "/en/enrolment",
    "/kalender": "/en/calendar",
    "/schulrichtlinien": "/en/guidelines",
    "/erfahrungsberichte": "/en/experiences",
    "/kontakt": "/en/contact",
  },
};

// Reverse map: English path → German path
export const enToDePathMap: Record<string, string> = {
  "/en": "/",
  "/en/about": "/ueber-uns",
  "/en/programs": "/programme",
  "/en/programs/sparrows": "/programme/spatzenprogramm",
  "/en/programs/falcons": "/programme/falkenprogramm",
  "/en/enrolment": "/einschreibung",
  "/en/calendar": "/kalender",
  "/en/guidelines": "/schulrichtlinien",
  "/en/experiences": "/erfahrungsberichte",
  "/en/contact": "/kontakt",
};

export function getLangFromUrl(url: URL): "de" | "en" {
  const [, lang] = url.pathname.split("/");
  if (lang === "en") return "en";
  return "de";
}

export function getAlternatePath(currentPath: string, targetLang: "de" | "en"): string {
  // Normalize: remove trailing slash
  const path = currentPath.replace(/\/$/, "") || "/";

  if (targetLang === "en") {
    return langPathMap.de[path] !== undefined ? langPathMap.en[path] ?? "/en" : "/en";
  } else {
    return enToDePathMap[path] ?? "/";
  }
}

export const ui = {
  de: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "Über uns",
    "nav.programs": "Programme",
    "nav.sparrows": "Spatzenprogramm",
    "nav.falcons": "Falkenprogramm",
    "nav.enrolment": "Einschreibung",
    "nav.calendar": "Kalender",
    "nav.guidelines": "Schulrichtlinien",
    "nav.experiences": "Erfahrungsberichte",
    "nav.contact": "Kontakt",
    "nav.cta": "Jetzt Anmelden",

    // Common
    "btn.learnMore": "Mehr erfahren",
    "btn.enrol": "Jetzt Anmelden",
    "btn.contact": "Kontakt aufnehmen",
    "btn.download": "Herunterladen",
    "btn.back": "Zurück",

    // Footer
    "footer.description": "Deutsches Muttersprachlerprogramm in Melbourne seit 2007 – für Kinder von Prep bis Year 12.",
    "footer.address": "Toorak Primary School, Melbourne VIC, Australien",
    "footer.email": "enrolments.spatzenschule@gmail.com",

    // Home page
    "home.hero.title": "Willkommen an der Spatzenschule Melbourne",
    "home.hero.subtitle": "Deutsch lernen. Kultur erleben. Gemeinschaft leben.",
    "home.hero.description": "Die Spatzenschule Melbourne ist seit 2007 ein etabliertes deutsches Muttersprachlerprogramm an der Toorak Primary School. Wir bieten hochwertigen Deutschunterricht für Kinder von Prep bis Year 12.",
    "home.hero.badge": "Seit 2007 in Melbourne",
    "home.hero.btn1": "Programme entdecken",
    "home.hero.btn2": "Über uns",

    "home.programs.badge": "Unsere Programme",
    "home.programs.title": "Zweisprachige Bildung für Ihre Kinder",
    "home.programs.description": "Wir bieten zwei spezialisierte Programme für Kinder und Jugendliche mit deutschsprachigem Hintergrund.",

    "home.features.badge": "Was uns auszeichnet",
    "home.features.title": "Warum die Spatzenschule?",
    "home.features.description": "Hochwertige Bildung, kulturelle Verbundenheit und eine starke Gemeinschaft – das ist die Spatzenschule.",
    "home.features.f1.title": "Muttersprachlerunterricht",
    "home.features.f1.desc": "Kleine Gruppen, erfahrene deutsche Lehrkräfte, moderne Lehrwerke – für lebendiges und nachhaltiges Lernen.",
    "home.features.f2.title": "Kulturelle Immersion",
    "home.features.f2.desc": "Wir feiern deutsche Feste, organisieren Kunst- und Gedichtwettbewerbe und fördern kulturelle Identität.",
    "home.features.f3.title": "Starke Gemeinschaft",
    "home.features.f3.desc": "Als gemeinnütziger Elternverein organisiert, bietet die Spatzenschule ein herzliches, unterstützendes Netzwerk.",
    "home.features.f4.title": "Flexibilität & Zukunftschancen",
    "home.features.f4.desc": "Unsere Programme ermöglichen einen leichten Wechsel ins deutsche Schulsystem und öffnen Türen weltweit.",

    "home.numbers.badge": "In Zahlen",
    "home.numbers.title": "Die Spatzenschule auf einen Blick",
    "home.numbers.n1": "Seit 2007 in Melbourne",
    "home.numbers.n2": "Schüler:innen im Programm",
    "home.numbers.n3": "Unterrichtsstunden pro Woche",
    "home.numbers.n4": "Qualifizierte Lehrkräfte",

    "home.cta.title": "Ist die Spatzenschule das Richtige für Ihr Kind?",
    "home.cta.description": "Für Familien, die ihren Kindern eine bilinguale, kulturell reiche Perspektive ermöglichen möchten.",
    "home.cta.btn": "Jetzt Anmelden",

    // About page
    "about.badge": "Über uns",
    "about.title": "Unsere Geschichte – seit 2007 in Melbourne",
    "about.description": "Die Spatzenschule wurde 2007 gegründet und hat sich zu einem der führenden deutschen Muttersprachlerprogramme in Melbourne entwickelt.",

    // Contact page
    "contact.badge": "Kontakt",
    "contact.title": "Kontaktieren Sie uns",
    "contact.description": "Für weitere Informationen zu Konzept, Anmeldung und Gebühren stehen wir Ihnen gerne zur Verfügung.",
    "contact.email.label": "E-Mail",
    "contact.email.value": "enrolments.spatzenschule@gmail.com",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail-Adresse",
    "contact.form.message": "Ihre Nachricht",
    "contact.form.submit": "Nachricht senden",

    // Programs page
    "programs.badge": "Programme",
    "programs.title": "Unsere Bildungsprogramme",
    "programs.description": "Zwei spezialisierte Programme für deutschsprachige Kinder und Jugendliche in Melbourne.",

    // Experiences page
    "reviews.badge": "Erfahrungsberichte",
    "reviews.title": "Was Familien sagen",
    "reviews.description": "Lesen Sie, was Eltern und Schüler:innen über ihre Zeit an der Spatzenschule berichten.",

    // Enrolment page
    "enrolment.badge": "Anmeldung",
    "enrolment.title": "Einschreibung & Formulare",
    "enrolment.description": "Hier finden Sie alle wichtigen Formulare für die Programme der Spatzenschule.",

    // Calendar page
    "calendar.badge": "Kalender 2026",
    "calendar.title": "Kalender & Neuigkeiten",
    "calendar.description": "Alle wichtigen Termine und Veranstaltungen der Spatzenschule im Überblick.",

    // Guidelines page
    "guidelines.badge": "Schulrichtlinien",
    "guidelines.title": "Schulrichtlinien",
    "guidelines.description": "Übersicht über die Schulrichtlinien der Spatzenschule Melbourne.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.programs": "Programs",
    "nav.sparrows": "Sparrows Program",
    "nav.falcons": "Falcons Program",
    "nav.enrolment": "Enrolment",
    "nav.calendar": "Calendar",
    "nav.guidelines": "Guidelines",
    "nav.experiences": "Experiences",
    "nav.contact": "Contact",
    "nav.cta": "Enrol Now",

    // Common
    "btn.learnMore": "Learn More",
    "btn.enrol": "Enrol Now",
    "btn.contact": "Contact Us",
    "btn.download": "Download",
    "btn.back": "Back",

    // Footer
    "footer.description": "German native speaker program in Melbourne since 2007 – for children from Prep to Year 12.",
    "footer.address": "Toorak Primary School, Melbourne VIC, Australia",
    "footer.email": "enrolments.spatzenschule@gmail.com",

    // Home page
    "home.hero.title": "Welcome to Spatzenschule Melbourne",
    "home.hero.subtitle": "German language. Cultural identity. A strong community.",
    "home.hero.description": "Spatzenschule Melbourne has been a leading German native speaker program at Toorak Primary School since 2007. We offer quality German education for children from Prep to Year 12.",
    "home.hero.badge": "In Melbourne since 2007",
    "home.hero.btn1": "Discover Programs",
    "home.hero.btn2": "About Us",

    "home.programs.badge": "Our Programs",
    "home.programs.title": "Bilingual education for your children",
    "home.programs.description": "We offer two specialised programs for children and young people with a German-speaking background.",

    "home.features.badge": "What sets us apart",
    "home.features.title": "Why Spatzenschule?",
    "home.features.description": "Quality education, cultural connection and a strong community – that is Spatzenschule.",
    "home.features.f1.title": "Native Speaker Instruction",
    "home.features.f1.desc": "Small groups, experienced German teachers, modern textbooks – for engaging and lasting learning.",
    "home.features.f2.title": "Cultural Immersion",
    "home.features.f2.desc": "We celebrate German traditions, run arts and poetry competitions, and nurture cultural identity.",
    "home.features.f3.title": "Strong Community",
    "home.features.f3.desc": "Run as a not-for-profit parent association, Spatzenschule offers a warm, supportive network of engaged families.",
    "home.features.f4.title": "Flexibility & Future Opportunities",
    "home.features.f4.desc": "Our programs make it easy to transition into the German school system and open doors worldwide.",

    "home.numbers.badge": "By the Numbers",
    "home.numbers.title": "Spatzenschule at a Glance",
    "home.numbers.n1": "In Melbourne since 2007",
    "home.numbers.n2": "Students in the program",
    "home.numbers.n3": "Hours of instruction per week",
    "home.numbers.n4": "Qualified teachers",

    "home.cta.title": "Is Spatzenschule right for your child?",
    "home.cta.description": "For families who want to give their children a bilingual, culturally rich perspective on the world.",
    "home.cta.btn": "Enrol Now",

    // About page
    "about.badge": "About Us",
    "about.title": "Our Story – in Melbourne since 2007",
    "about.description": "Spatzenschule was founded in 2007 and has grown into one of Melbourne's leading German native speaker programs.",

    // Contact page
    "contact.badge": "Contact",
    "contact.title": "Get in Touch",
    "contact.description": "We are happy to answer any questions about our programs, enrolment, and fees.",
    "contact.email.label": "Email",
    "contact.email.value": "enrolments.spatzenschule@gmail.com",
    "contact.form.name": "Name",
    "contact.form.email": "Email address",
    "contact.form.message": "Your message",
    "contact.form.submit": "Send message",

    // Programs page
    "programs.badge": "Programs",
    "programs.title": "Our Education Programs",
    "programs.description": "Two specialised programs for German-speaking children and young people in Melbourne.",

    // Experiences page
    "reviews.badge": "Experiences",
    "reviews.title": "What Families Say",
    "reviews.description": "Read what parents and students share about their time at Spatzenschule.",

    // Enrolment page
    "enrolment.badge": "Enrolment",
    "enrolment.title": "Enrolment & Downloads",
    "enrolment.description": "Here you can download all the important forms for both Spatzen and Falcons programs.",

    // Calendar page
    "calendar.badge": "Calendar 2026",
    "calendar.title": "Calendar & News",
    "calendar.description": "Key dates and events at Spatzenschule throughout the year.",

    // Guidelines page
    "guidelines.badge": "School Guidelines",
    "guidelines.title": "School Guidelines",
    "guidelines.description": "Overview of Spatzenschule Melbourne's school guidelines and safety policies.",
  },
} as const;

export type UiKey = keyof typeof ui.de;

export function useTranslations(lang: "de" | "en") {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui.de[key] ?? key;
  };
}
