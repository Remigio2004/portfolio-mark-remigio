document.documentElement.classList.add("js");

/* =========================================================
   1. YOUR CONTENT: edit everything in this block.
   Anything in [square brackets] is a placeholder to replace.
   ========================================================= */
const CONFIG = {
  photoSrc: "assets/images/me.jpg", // shows on the ID card
  githubUser: "Remigio2004",
  linkedin: "https://www.linkedin.com/in/remigio-markadrian/",
  email: "your.email@example.com", // TODO: put your real email
  formEndpoint: "", // Formspree URL, e.g. "https://formspree.io/f/xxxx". Empty = opens the visitor's email app
  cvUrl: "cv.pdf",
};

const PROFILE = {
  heroIntro:
    "4th-year BSIT student at Universidad de Manila. I build websites and apps, and I'm always looking for the next thing to ship.",
  heroChips: ["BSIT Student", "Aspiring Full-Stack Developer", "Web & Game Development"],
  aboutTitle: "I craft digital tools that work.",
  aboutBody: [
    "I'm Mark Adrian Remigio, a 4th-year Information Technology student at Universidad de Manila and a YSLEP scholar. I spend most of my time building web applications and sharpening my skills as an aspiring full-stack developer.",
    "Outside of school, I serve as an active altar server at San Sebastian Basilica Church, where I also handle media relations for our organization. I like creating things that actually solve problems, and I'm always looking for ways to work faster and smarter. Right now, I'm eager to learn agentic development and how AI models can be used in building software, and I'm still exploring where these tools fit best in the development process.",
  ],
  location: "Quiapo, Manila",
  stats: [
    { to: 7, suffix: "+", label: "Projects completed" },
    { to: 2, suffix: "+", label: "Years of experience" },
    { to: 100, suffix: "%", label: "Passion for code" },
  ],
};

const EDUCATION = [
  {
    school: "Universidad de Manila",
    shortTitle: "Universidad de Manila (UDM)",
    location: "Manila, Philippines",
    degree: "Bachelor of Science in Information Technology",
    start: "2023",
    end: "Present",
    logo: "assets\\logos\\udm.jpg",
    summary:
      "4th-year student focused on full-stack web development, database management, and game development, currently leading a CNN-based facility management system as a thesis project.",
    details: [
      "Currently studying Microsoft Azure and cloud deployment, including deploying a website on an Azure Virtual Machine using IIS under the student free plan.",
      "Gained hands-on experience hosting a full-stack web application with Firebase integration on an Azure VM, made accessible via IP address or domain.",
      "Served as Developer for the capstone thesis Fac-Check, a facility concern reporting and corrective maintenance management system using Convolutional Neural Networks.",
      "Built various academic and commissioned projects involving web development, database systems, and mobile game development.",
      "Studied object-oriented programming, data structures and algorithms, web and platform technologies, and game development using Godot Engine.",
      "Earned a place on the Dean's List for the Second Semester of School Year 2023–2024 and the First Semester of School Year 2025–2026.",
      "Graduated Senior High School with High Honors in both Grade 11 and Grade 12, ICT Strand, from the same university.",
    ],
    images: [
      { src: "assets\\images\\udm.jpg", caption: "Main Building, Universidad de Manila (UDM)" },
      // { src: "assets\\images\\udm2.jpg", caption: "[Caption for this photo]" },
    ],
  },
];

const EXPERIENCE = [
  // type: Internship | Part-time | Freelance | Seasonal
  {
    type: "Internship",
    pet: { name: "Yoshi", dir: "assets/pet/yoshi" }, // walking pet inside this card. Remove this line to hide it
    org: "[Company Name]",
    role: "[Your Role]",
    start: "[Mon YYYY]",
    end: "[Mon YYYY]",
    logo: "",
    summary: "[Two sentences about what you did and what you shipped or learned.]",
    details: [
      "[Result or responsibility 1]",
      "[Result or responsibility 2]",
      "[Result or responsibility 3]",
    ],
    images: [],
  },
  {
    type: "Part-time",
    org: "[Company Name]",
    role: "[Your Role]",
    start: "[Mon YYYY]",
    end: "[Mon YYYY]",
    logo: "",
    summary: "[Two sentences about what you did and what you shipped or learned.]",
    details: ["[Result or responsibility 1]", "[Result or responsibility 2]"],
    images: [],
  },
];

const ORGANIZATIONS = [
  {
    type: "Organization",
    org: "CARAS de San Sebastian (Confraternity of Augustinian Recollect Altar Servers)",
    role: "Secretary to Media Relations Officer",
    start: "2018",
    end: "Present",
    logo: "assets/logos/caras logo.png",
    summary:
      "An 8-year member and altar server of CARAS de San Sebastian, serving 2 years as Secretary (2022 to 2024) and currently 2 years as Media Relations Officer (2024 to Present).",
    details: [
      "As Secretary (2022-2024): represented CARAS in Vicariate of San Jose de Trozo meetings, recorded and prepared minutes for the confraternity's programs, activities, and projects, then reported these back to the members alongside the president",
      "As Media Relations Officer (2024-Present): handle the technical side of CARAS programs and projects, photo and video documentation, Facebook page management, pubmats and Canva presentations, and sound systems",
      "Built and maintain the confraternity's official website (carasdesansebastian.vercel.app), where members and the public can follow the org's programs and projects",
      "This 8-year journey shaped my personal and spiritual growth: service became less of a duty and more a spiritual practice, taught humility in serving without expecting anything back, and showed me that leadership itself is a form of service to others",
    ],
    images: [
      "assets/organizations/caras/image2.jpg",
      "assets/organizations/caras/image5.jpg",
      "assets/organizations/caras/image6.jpg",
      "assets/organizations/caras/image7.jpg",
      "assets/organizations/caras/image8.jpg",
      "assets/organizations/caras/image9.jpg",
      "assets/organizations/caras/image10.jpg",
      "assets/organizations/caras/image11.jpg",
      "assets/organizations/caras/image12.jpg",
      "assets/organizations/caras/image13.jpg",
      "assets/organizations/caras/image14.jpg",
      "assets/organizations/caras/image15.jpg",
      "assets/organizations/caras/image16.jpg",
      "assets/organizations/caras/image17.jpg",
      "assets/organizations/caras/image18.jpg",
      "assets/organizations/caras/image19.jpg",
      "assets/organizations/caras/image20.jpg",
      "assets/organizations/caras/image21.jpg",
      "assets/organizations/caras/image22.jpg",
      "assets/organizations/caras/image23.jpg",
      "assets/organizations/caras/image24.jpg",
    ],
  },
  {
    type: "Scholarship",
    org: "Youth Servant Leaders and Entrepreneurs Program (YSLEP)",
    role: "YSLEP Scholar",
    start: "2023",
    end: "2027",
    logo: "assets/logos/yslep.jpg",
    summary:
      "A 4-year scholarship program (2023-2027) that requires personal and spiritual formation every college year. More than just financial support, it became a huge part of shaping who I am today, as a person, as a servant, and as someone learning to lead.",
    details: [
      "Completed 8 formation modules every college year focused on personal and spiritual growth, building on the foundation I already had as an altar server long before I became a scholar.",
      "Joined community outreach activities like tree planting, clean-up drives, and feeding programs for the poor as part of our service requirement, which taught me that service isn't limited to the church alone.",
      "Got to know fellow scholars from different backgrounds who generously shared their own talents and skills with me. Over time, the roles reversed and I found myself sharing mine too, especially in web development and media work.",
      "Looking back, this journey taught me that leadership isn't about title or position. It's about showing up consistently, serving others without expecting anything in return, and helping the people around you grow closer to God along the way.",
    ],
    images: [
      "assets/organizations/yslep/y1.jpg",
      "assets/organizations/yslep/y2.jpg",
      "assets/organizations/yslep/y3.jpg",
      "assets/organizations/yslep/y4.jpg",
      "assets/organizations/yslep/y5.jpg",
      "assets/organizations/yslep/y6.jpg",
      "assets/organizations/yslep/y7.jpg",
      "assets/organizations/yslep/y8.jpg",
      "assets/organizations/yslep/y9.jpg",
      "assets/organizations/yslep/y10.jpg",
      "assets/organizations/yslep/y11.jpg",
      "assets/organizations/yslep/y12.jpg",
      "assets/organizations/yslep/y13.jpg",
      "assets/organizations/yslep/y14.jpg",
    ],
  },
];

const CERTIFICATIONS = [
  {
    title: "National Certificate II in Computer Systems Servicing",
    issuer: "Technical Education and Skills Development Authority (TESDA)",
    year: "Jun 2023",
    credentialId: "",
    credentialUrl: "",
    image: "assets/images/NCII.png",
    description:
      "Demonstrates competency in assembling, installing, configuring, maintaining, and repairing computer systems, networks, and servers. Covers core skills such as setting up computer networks and servers, diagnostic troubleshooting, component testing, and applying workplace occupational health and safety standards.",
  },
  {
    title: "Certificate of Participation: Workplace Preparation 101",
    issuer: "Universidad de Manila",
    year: "Jul 2026",
    credentialId: "",
    credentialUrl: "",
    image: "assets/images/UID-107.png",
    description:
      "Participated in the workplace readiness seminar 'Workplace Preparation 101' under UID 107 (University Identity 7). Focused on practical career development, professional communication, and strategies for transitioning into professional work environments.",
  },
  {
    title: "Certificate of Recognition: Media Relation Officer & Web Developer",
    issuer: "Minor Basilica and Parish of San Sebastian (CARAS de San Sebastian)",
    year: "Aug 2026",
    credentialId: "",
    credentialUrl: "",
    image: "assets/images/caras.png",
    description:
      "Recognized for valuable service as Media Relation Officer and dedicated contributions to the development of the official website for CARAS de San Sebastian (Confraternity of Augustinian Recollect Altar Servers).",
  },
  {
    title: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco Networking Academy",
    year: "2023",
    credentialId: "",
    credentialUrl: "",
    image: "assets/images/cisco-cybersec.png",
    description:
      "Acquired foundational expertise in network and information security. Proficient in mitigating network and systems security threats, evaluating organizational security posture using vulnerability and risk assessment tools, recommending cybersecurity controls, and planning incident management activities.",
  },
  {
    title: "Think Bold, Lead Smart: The Power of Innovative Leadership",
    issuer: "Universidad de Manila — UID 106 Leadership and Innovation Seminar",
    year: "Apr 2026",
    credentialId: "",
    credentialUrl: "",
    image: "assets/images/Seminar-think bold.png",
    description:
      "Certificate of Participation for active engagement in the UID 106 Leadership and Innovation Seminar, held via Google Meet, exploring innovative approaches to leadership and decision-making.",
  },
  {
    title: "Data Privacy — 3rd Year I.T. Seminar",
    issuer: "Universidad de Manila College of Computing Studies",
    year: "Oct 2025",
    credentialId: "",
    credentialUrl: "",
    image: "assets/images/seminar-InformationTech.png",
    description:
      "Certificate of Participation for attending the 3rd Year I.T. Seminar on Data Privacy, held at UDM Palma Hall in compliance with the subject Seminar in Information Technology.",
  },
  {
    title: "Certificate of Appreciation: Altar Server",
    issuer: "Minor Basilica and Parish of San Sebastian",
    year: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "assets/images/caras2025.png",
    description:
      "Recognized for unwavering dedication, faithful service, and humble devotion as an Altar Server at the Minor Basilica and Parish of San Sebastian — Shrine of Our Lady of Mount Carmel de San Sebastian. Awarded for upholding the sacredness of the liturgy with grace, discipline, and devotion to the Eucharist.",
  },
];
const parseCertDate = (y) => {
  const m = y.match(/^([A-Za-z]+)\s+(\d{4})$/);
  const months = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Sept: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };
  return m ? new Date(parseInt(m[2], 10), months[m[1]] ?? 0, 1) : new Date(parseInt(y, 10), 0, 1);
};
CERTIFICATIONS.sort((a, b) => parseCertDate(b.year) - parseCertDate(a.year));

/* Starter guesses. Delete or add freely. tone: green | gold | mint | deep. category: Development | Design | Tools */
const SKILLS = [
  { name: "React", abbr: "Re", tone: "green", category: "Development", label: "Front-End" },
  { name: "JavaScript", abbr: "JS", tone: "gold", category: "Development", label: "Front-End" },
  { name: "HTML5", abbr: "H5", tone: "mint", category: "Development", label: "Front-End" },
  { name: "CSS3", abbr: "C3", tone: "deep", category: "Development", label: "Front-End" },
  { name: "Tailwind CSS", abbr: "Tw", tone: "green", category: "Development", label: "Front-End" },
  { name: "Git", abbr: "Gi", tone: "gold", category: "Tools", label: "Version Control" },
  { name: "GitHub", abbr: "GH", tone: "mint", category: "Tools", label: "Version Control" },
  { name: "Figma", abbr: "Fg", tone: "deep", category: "Design", label: "UI/UX" },
  { name: "VS Code", abbr: "VS", tone: "green", category: "Tools", label: "Editor" },
  { name: "MySQL", abbr: "My", tone: "gold", category: "Development", label: "Database" },
  { name: "MongoDB", abbr: "Mo", tone: "mint", category: "Development", label: "Database" },
  { name: "Firebase", abbr: "Fb", tone: "deep", category: "Development", label: "Backend" },
  { name: "Supabase", abbr: "Sb", tone: "green", category: "Development", label: "Backend" },
  { name: "Microsoft Azure", abbr: "Az", tone: "gold", category: "Tools", label: "Cloud" },
  { name: "Godot", abbr: "Gd", tone: "mint", category: "Development", label: "Game Engine" },
  { name: "Python", abbr: "Py", tone: "deep", category: "Development", label: "Programming" },
  { name: "Google Colab", abbr: "Co", tone: "green", category: "Tools", label: "Data / ML" },
  { name: "Vite", abbr: "Vi", tone: "gold", category: "Development", label: "Build Tool" },
  { name: "Cisco Networking", abbr: "Ci", tone: "mint", category: "Tools", label: "Networking" },
  { name: "Canva", abbr: "Cv", tone: "deep", category: "Design", label: "Graphic Design" },
];

/* category: Web | UI/UX Design | Mobile | Machine Learning | IoT | Other  (filter tabs build themselves from these) */
const PROJECTS = [
  {
    title: "UDM OrgCentral — Organization Management System	",
    category: "Web Dev",
    year: "2025",
    cover: "assets\\projects\\udm-orgcentral\\auth.png",
    summary:
      "A centralized web platform for managing student organizations at Universidad de Manila — org discovery, membership applications, event management, and analytics in one dashboard.",
    problem:
      "Student orgs at UDM tracked members, events, and applications through scattered spreadsheets and manual approvals, making it hard for officers to see org health or for students to discover and join orgs.",
    solution:
      "Built a full-stack platform with two developers where students browse and apply to orgs, officers manage members and events from a dashboard, and admins approve new org requests — with a Chart.js analytics view tracking membership growth and application status.",
    highlights: [
      "Built as a two-person dev team — full-stack lead (auth, dashboard, org/event management) plus a back-end developer",
      "Built an analytics dashboard (Chart.js) showing monthly membership/event trends and application status breakdowns",
      "Designed the membership application + org-request approval workflow end-to-end (student → officer → admin)",
    ],
    stack: ["React", "Tailwind CSS", "Express", "MongoDB", "Chart.js"],
    screenshots: [
      "assets\\projects\\udm-orgcentral\\auth.png",
      "assets\\projects\\udm-orgcentral\\dashboard.png",
      "assets\\projects\\udm-orgcentral\\home.png",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/Remigio2004/udm-orgCentral",
  },
  {
    title: "CARAS Organization Management System",
    category: "Web Dev",
    location: "San Sebastian Basilica, Quiapo, Manila",
    year: "Nov 2025",
    cover: "assets\\projects\\caras-web\\home.png",
    summary:
      "An admin and treasurer web dashboard for CARAS de San Sebastian, a parish confraternity — manages members, events, documents, and finances in one place.",
    problem:
      "The confraternity tracked member records, event documentation, and treasury (contributions, penalties, donations, expenses) through scattered manual records, making it hard to see financial standing or pull reports.",
    solution:
      "Built a React/TypeScript dashboard backed by Supabase with role-based access for admins and treasurers — member management, an event gallery with narrative reports, a Google Drive-style documents module, and a treasurer view with contribution/penalty tracking, PDF exports, and trend charts.",
    highlights: [
      "Built a treasurer dashboard with live stats (Total Funds, Contributions Collected, Penalties Collected, Outstanding) plus 4 trend charts (Contributions, Penalties, Fund Sources, Cash Flow) using Recharts",
      "Reworked the Documents module into a Google Drive-style file manager — click/shift-click/ctrl-click selection, double-click to open, Ctrl+A select-all across pages, bulk move/download/delete",
      "Built a pivot-table PDF export for Contributions (members as rows, periods as columns) with a preview-before-download dialog",
      "Built an Events module with narrative reports — multi-image carousel with photo credits, newest-to-oldest sorting and pagination, admin-side dynamic multi-image inputs",
      "Set up the Supabase backend with row-level security policies and schema migrations to support new features",
      "Integrated an AI chatbot for member inquiries",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    screenshots: [
      "assets\\projects\\caras-web\\home.png",
      "assets\\projects\\caras-web\\dashboard.png",
      "assets\\projects\\caras-web\\dashboard2.png",
      "assets\\projects\\caras-web\\caras web.jpg",
      "assets\\projects\\caras-web\\talk.jpg",
      "assets\\projects\\caras-web\\cert.jpg",
    ],
    liveUrl: "https://carasdesansebastian.vercel.app",
    repoUrl: "https://github.com/Remigio2004/caras-website",
  },
  {
    title: "SDLC Strike: 2D Mobile Game-Based Learning Tool for SDLC Education",
    category: "Game Dev",
    year: "May 2026",
    cover: "assets\\projects\\sdlc-strike\\menu.png",
    summary:
      "A 2D mobile game that teaches the six SDLC methodologies (Waterfall, Iterative, Incremental, Agile, Spiral, and V-Model) through boss-battle stages and in-game quizzes.",
    problem:
      "Students usually memorize SDLC models from slides without engaging with them, so the differences between methodologies don't stick.",
    solution:
      "Built a 2D top-down game in Godot where each SDLC model is its own world with two stages and a boss fight. Defeating enemies and bosses requires correctly answering SDLC multiple-choice questions, backed by a hearts/lives system, a model-selection hub, and per-stage scoreboards.",
    highlights: [
      "Built 6 model-based worlds (Waterfall, Iterative, Incremental, Agile, Spiral, V-Model), each with 2 stages plus a boss fight",
      "Built a quiz-battle system: defeating bots and bosses requires correctly answering SDLC questions, with a hearts/lives system on wrong answers",
      "Built the model-selection hub, stage-complete/summary/scoreboard screens, and mobile touch controls for the Godot Mobile export",
    ],
    stack: ["Godot Engine", "GDScript"],
    screenshots: [
      "assets\\projects\\sdlc-strike\\opening.png",
      "assets\\projects\\sdlc-strike\\menu.png",
      "assets\\projects\\sdlc-strike\\model.png",
      "assets\\projects\\sdlc-strike\\bots.png",
      "assets\\projects\\sdlc-strike\\question.png",
      "assets\\projects\\sdlc-strike\\boss.png",
    ],
    liveUrl:
      "https://github.com/Remigio2004/SDLC-Strike/releases/download/v1.0.0/SDLC.Strike.Main.apk",
    repoUrl: "https://github.com/Remigio2004/SDLC-Strike",
  },
  {
    title: "Fac-Check — Facility Concern Reporting & Corrective Maintenance Management System",
    category: "Web Dev",
    location: "Universidad de Manila",
    year: "Jul 2026",
    cover: "assets/projects/fac-check/client.jpg",
    summary:
      "A Django system for Universidad de Manila's Maintenance & Engineering Division — students, faculty, and staff report facility concerns with a photo that a custom-trained CNN auto-classifies, and the division tracks each report through to resolution.",
    problem:
      "UDM's Maintenance & Engineering Division fielded facility concerns (electrical, plumbing, and more) through manual, unstructured channels, making it hard to categorize issues consistently, enforce response-time targets, or measure how maintenance personnel were actually performing.",
    solution:
      "Built a full-stack Django system where reporters submit a photo and pick a location (building → floor → room), and a custom-trained CNN image classifier sorts the concern into one of 7 maintenance categories — flagging low-confidence predictions for manual review instead of guessing. Admins triage and assign personnel, each report moves through an SLA-timed status pipeline, and a personnel analytics module scores maintenance staff on quality, quantity, and timeliness.",
    highlights: [
      "Trained and integrated a CNN image classifier (TensorFlow/Keras) that auto-categorizes concern photos into 7 categories, using confidence and margin thresholds to flag uncertain predictions for manual review instead of misclassifying",
      "Built an SLA-based priority system (Critical = 3h, High = 24h, Standard = 72h, per the division's own policy) with auto-generated Job Order IDs and a full status pipeline (Pending → In Progress → Resolved → Closed)",
      "Built a Personnel Performance Analytics module scoring each maintenance staffer 1-5 on Quality (survey ratings), Quantity (completion ratio), and Timeliness (SLA compliance + resolution delay), averaged into an overall rating and exportable as PDF",
      "Built 'FACI', a Gemini-powered support chatbot scoped to a hardcoded FAQ knowledge base with a strict no-hallucination system prompt, so it never answers outside the Fac-Check docs",
      "Hardened both login portals (student and admin) with account lockout after failed attempts (django-axes), IP-based rate limiting, and honeypot traps (hidden fields, decoy admin pages, known attack paths) that log and flag suspicious IPs",
      "Built PDF Job Order exports (xhtml2pdf) for both the reporter and admin views, plus a post-resolution Client Satisfaction Survey required to close each report",
    ],
    stack: [
      "Django",
      "Python",
      "TensorFlow / Keras",
      "PostgreSQL (Supabase)",
      "Tailwind CSS",
      "Cloudinary",
      "Gemini API",
    ],
    screenshots: ["assets/projects/fac-check/client.jpg"],
    liveUrl: "",
    repoUrl: "https://github.com/sjane16/KuhaMo",
  },
  {
    title: "Inuman Log: Social Networking Web App",
    category: "Web Dev",
    year: "Sept 2026",
    cover: "assets/projects/inuman-log/feed2.png",
    summary:
      "A Facebook-style social app for logging inuman (drinking) sessions with your tropa. It has posts, reactions, inline comments, a follow system, and a real-time Messenger-style chat, all built in vanilla JavaScript on top of Firebase.",
    problem:
      "Friend groups usually share their inuman photos and stories across scattered group chats and social media stories. There is no dedicated place to log who was there, react to the session, or look back on it later.",
    solution:
      "Built the app entirely in vanilla HTML/CSS/JS with no framework and no build step, running on Firebase Auth and Firestore. Users post sessions with photos and tagged tropa (friend group), react and comment inline on the feed, follow other users, and message each other in real time with reactions, replies, pinning, and unsend.",
    highlights: [
      "Wrote a real-time Messenger-style chat from scratch: conversation list with live previews, online/presence indicators, message reactions, reply-to-message, pin and unsend, multi-photo carousels, and message forwarding, all driven by Firestore listeners",
      "Designed 5 custom hand-drawn reaction icons (Tagay, Sarap, Lupet, Lasing na, Ubos) with bounce and burst-float animations, plus threaded comments rendered inline on the feed (no separate post-detail page) with reply tagging",
      "Built a profile system with click-to-edit name/username/bio, a username-change cooldown, and preset avatar/cover pickers. Profile edits cascade automatically across every denormalized copy of the user's data (posts, comments, tagged users)",
      "Built a follow system with mutual-follow detection and a 'People you may know' sidebar that suggests users based on mutual connections",
      "Post creation supports tagged-tropa (friend-group) chips, drag-and-drop multi-photo upload, and client-side photo compression so images stay within Firestore's free-tier document size limits",
      "Designed the whole system to run on Firebase's free Spark plan with no billing account required, storing photos as compressed base64 in Firestore instead of using paid Cloud Storage",
    ],
    stack: [
      "JavaScript (Vanilla)",
      "HTML5",
      "CSS3",
      "Firebase Authentication",
      "Firebase Firestore",
    ],
    screenshots: [
      "assets/projects/inuman-log/feed.png",
      "assets/projects/inuman-log/mess.png",
      "assets/projects/inuman-log/profile.png",
      "assets/projects/inuman-log/profile1.png",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/Remigio2004/inuman-log-sesh",
  },
  {
    title: "NurseVault — Digital Records Archival System, PLM College of Nursing",
    category: "Web Dev",
    location: "Pamantasan ng Lungsod ng Maynila",
    year: "Sept 2026",
    cover: "assets/projects/plm-nurse-vault/client.jpg",
    summary:
      "Commissioned by PLM nursing students as their Nursing Informatics capstone: a secure archive that files the College of Nursing's scanned student records into Batch → Category → Status folders, with search and a full audit trail.",
    problem:
      "Scanned student records need to be stored, found, and protected consistently. Without a fixed filing structure and a history of who touched what, retrieval is slow and sensitive files are hard to control.",
    solution:
      "Built solo with agentic development: a full-stack web app on Supabase where archival staff sign in, upload scanned PDFs that are filed automatically by batch, student category, and status, and retrieve them through folder browsing or a searchable records table. File access runs through server-side Edge Functions, and every change is written to an audit log.",
    highlights: [
      "Built the auto-organized filing structure: Batch → Student Category (CN Graduate, CN Honorable Dismissal, CN Others) → Status (Regular, Irregular, N/A), with breadcrumb navigation and a grid/list toggle",
      "Built a Records Table with search, batch/category/status filters, column sorting, and pagination so any record can be found without browsing folders",
      "Built a multi-file drag-and-drop PDF upload with type and 50 MB validation, plus a server-side duplicate-file check that skips files already on record for the student",
      "Designed hybrid file storage: files up to 10 MB go to Cloudinary through an Edge Function, while larger files fall back to Supabase Storage (up to 50 MB) because Cloudinary's free plan rejects large raw files",
      "Locked down file access: file names, paths, and storage IDs are hidden from the browser using Postgres column-level permissions, and files open only through an Edge Function that checks an admin allowlist and returns a signed URL",
      "Built an append-only audit log (upload, edit, delete, restore, permanent delete, and every file view) with user email, timestamp, and before/after field changes, plus a recycle bin to restore or permanently purge deleted records",
      "Secured access: sign-in runs through an Edge Function that locks an IP out for 15 minutes after 5 failed attempts, and row-level security limits records, audit logs, and storage to designated admin accounts",
    ],
    stack: [
      "React",
      "TypeScript",
      "Supabase",
      "TanStack Start",
      "Tailwind CSS",
      "Cloudinary",
      "shadcn/ui",
      "Vercel",
    ],
    screenshots: [
      "assets/projects/plm-nurse-vault/client.jpg",
      "assets/projects/plm-nurse-vault/client2.jpg",
      "assets/projects/plm-nurse-vault/auth.png",
      "assets/projects/plm-nurse-vault/dashboard.png",
      "assets/projects/plm-nurse-vault/browse.png",
      "assets/projects/plm-nurse-vault/upload.png",
      "assets/projects/plm-nurse-vault/log.png",
    ],
    liveUrl: "https://plm-nurse-vault.vercel.app/",
    repoUrl: "https://github.com/Remigio2004/plm-nurse-vault",
  },
];

/* GitHub snapshot (taken Sep 20, 2026). Replaced automatically by live data when the site is hosted online. */
const GH_SNAPSHOT = {
  start: "2025-09-21",
  levels:
    "00000000000000000000000000000000000000001121111111011000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001100000000000000000000000000000000000112011000001010000044440040001101201100002000",
  counts: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 6, 1, 2, 1, 1, 1, 3, 1, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 3, 5, 0, 3, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 12, 25, 21, 54, 0, 0, 13, 0, 0, 0, 2,
    2, 0, 1, 5, 0, 1, 1, 0, 0, 0, 0, 4, 0, 0, 0,
  ],
};

/* =========================================================
   2. HELPERS
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  );
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

let revealIO = null;
function reveal(root) {
  const els = $$(".rise:not(.in)", root);
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("in"));
    return;
  }
  revealIO =
    revealIO ||
    new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            revealIO.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
  els.forEach((e) => revealIO.observe(e));
}

const logoTile = (it) =>
  `<span class="logo-tile">${it.logo ? `<img src="${esc(it.logo)}" alt="" loading="lazy">` : '<svg aria-hidden="true"><use href="#brick"/></svg>'}</span>`;
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const imgs = (arr, cls = "") =>
  (arr || [])
    .map(
      (s, i) => `<img class="rise ${cls}" style="--i:${i}" src="${esc(s)}" alt="" loading="lazy">`
    )
    .join("");

let shotIO = null;
function revealShots() {
  const root = $("#mBody");
  const els = $$(".rise:not(.in)", root);
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("in"));
    return;
  }
  if (shotIO) shotIO.disconnect();
  shotIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          shotIO.unobserve(en.target);
        }
      });
    },
    { root, threshold: 0.12 }
  );
  els.forEach((e) => shotIO.observe(e));
}

/* =========================================================
   3. STATIC BITS
   ========================================================= */
(function init() {
  // marquee
  const words = ["BUILD", "CODE", "DESIGN"];
  const one = words
    .map((w) => `${w}<svg aria-hidden="true"><use href="#shuriken"/></svg>`)
    .join("");
  $("#track").innerHTML = `<span>${one.repeat(4)}</span><span>${one.repeat(4)}</span>`;

  // hero text
  $("#heroIntro").textContent = PROFILE.heroIntro;
  $("#heroChips").innerHTML = PROFILE.heroChips
    .map((c) => `<span class="tag">${esc(c)}</span>`)
    .join("");

  // about
  $("#aboutCard").innerHTML =
    `<h3>${esc(PROFILE.aboutTitle)}</h3>` +
    PROFILE.aboutBody.map((p) => `<p>${esc(p)}</p>`).join("");

  // education
  $("#eduWrap").innerHTML =
    `<div class="block-head" style="margin-bottom:26px"><h3 class="h-sub">Education</h3></div>` +
    EDUCATION.map(
      (e, i) => `
      <article class="card studs item">
        <div class="item-top"><span class="tag deep">${esc(e.degree.split(" in ")[0].replace("Bachelor of Science", "BS"))}</span><span class="tag gold">${esc(e.start)} – ${esc(e.end)}</span></div>
        <div class="item-head">${logoTile(e)}<div><h4 class="ttl">${esc(e.school)}</h4><p class="role">${esc(e.degree)}</p></div></div>
        <p class="clamp3">${esc(e.summary)}</p>
        <button class="btn sm ghost" data-open="edu:${i}">View details</button>
      </article>`
    ).join("");

  // links / cv / year
  $$(".dl-cv").forEach((a) => a.setAttribute("href", CONFIG.cvUrl));
  $("#ghLink").href = "https://github.com/" + CONFIG.githubUser;
  [$("#socGh"), $("#ftGh")].forEach((a) => (a.href = "https://github.com/" + CONFIG.githubUser));
  [$("#socLi"), $("#ftLi")].forEach((a) => (a.href = CONFIG.linkedin));
  $("#yr").textContent = new Date().getFullYear();
})();

/* =========================================================
   4. LISTS: experience, organizations, certifications
   ========================================================= */
const DATA = {
  exp: EXPERIENCE,
  org: ORGANIZATIONS,
  cert: CERTIFICATIONS,
  edu: EDUCATION,
  proj: PROJECTS,
};

/* =========================================================
   PET: Yoshi wanders around inside the card, doing random things.
   Every gif in assets/pet/yoshi is used. Each entry is
   [file, canvas w, canvas h, sprite center-x, sprite feet-y], measured from the gifs so the
   paws stay on the same spot when the gif is swapped (the canvases are different sizes).
   ========================================================= */
const PET_SPRITES = {
  walkE: ["Idle_v3_walking_east.gif", 64, 64, 28.5, 51],
  walkW: ["Idle_v3_walking_west.gif", 64, 64, 35.5, 51],
  walkNE: ["Idle_v3_walking_north-east.gif", 60, 60, 27.5, 51],
  walkNW: ["Idle_v3_walking_north-west.gif", 60, 60, 32.5, 51],
  walkSE: ["Idle_v3_walking_south-east.gif", 56, 56, 26, 47],
  walkSW: ["Idle_v3_walking_south-west.gif", 56, 56, 30, 47],
  walkN: ["Idle_v3_walking_north.gif", 68, 68, 34, 54],
  walkS: ["Idle_v3_walking_south.gif", 60, 60, 28, 50],
  runE: ["Idle_running-6-frames_east.gif", 48, 48, 22.5, 45],
  runW: ["Idle_running-6-frames_west.gif", 48, 48, 25.5, 45],
  sitE: ["Idle_seated-on-belly-idle_east.gif", 64, 64, 31, 48],
  sitW: ["Idle_seated-on-belly-idle_west.gif", 64, 64, 33, 48],
  sitS: ["Idle_seated-on-belly-idle_south.gif", 48, 48, 24.5, 39],
  sleepS: ["Idle_sleeping_south.gif", 60, 60, 29, 51],
  sleepSE: ["Idle_sleeping_south-east.gif", 56, 56, 28.5, 48],
  sleepSW: ["Idle_sleeping_south-west.gif", 56, 56, 27.5, 48],
};

function petLane(p) {
  const dir = esc(p.dir);
  const bubble = `<div class="pet-bubble">pls hire my hooman so he can get me food 🥺</div>`;
  // reduced motion: no wandering, he just sits facing you (hover still reveals the bubble)
  if (reduce)
    return `<div class="pet-lane still" aria-hidden="true"><div class="pet-track"><img class="pet" src="${dir}/${PET_SPRITES.sitS[0]}" alt="" width="48" height="48" draggable="false">${bubble}</div></div>`;
  return `<div class="pet-lane" data-dir="${dir}" aria-hidden="true"><div class="pet-track"><img class="pet" alt="" draggable="false">${bubble}</div></div>`;
}

/* The cage floor at the bottom of an experience card: walking pet if the entry has one
   (see EXPERIENCE[].pet in the content block up top), otherwise just an empty enclosure.
   Background is the nature_1 pixel-art scene set via CSS (--cage-bg in style.css). */
function cageFloor(pet) {
  if (pet) return petLane(pet);
  return `<div class="pet-lane empty" aria-hidden="true"></div>`;
}

function startPets(root) {
  if (reduce) return;
  $$(".pet-lane[data-dir]:not([data-live])", root).forEach(runPet);
}

function runPet(lane) {
  lane.dataset.live = "1";
  const img = $(".pet", lane);
  const bubble = $(".pet-bubble", lane);
  const dir = lane.dataset.dir;
  const S = PET_SPRITES;
  Object.values(S).forEach(([f]) => (new Image().src = `${dir}/${f}`)); // preload so swaps don't flicker

  /* TWEAK HERE */
  const EDGE = 26; // px kept clear from the left/right walls
  const BASE = 8; // px between his paws and the bottom of the lane
  const WALK = 40; // px/s
  const RUN = 105; // px/s

  const rnd = (a, b) => a + Math.random() * (b - a);
  let W = 300,
    H = 80,
    DEPTH = 22; // px he can drift up/down the lane, recalculated from the lane's actual height below
  const measure = () => {
    W = lane.clientWidth || W;
    H = lane.clientHeight || H;
    DEPTH = Math.max(6, Math.min(160, H - 58)); // small strip = mostly east-west, a tall cage = lots of room to roam
  };
  measure();
  new ResizeObserver(measure).observe(lane);

  let x = W / 2,
    d = DEPTH / 2, // d = 0 is the front of the lane, DEPTH is the back
    face = Math.random() < 0.5 ? 1 : -1, // 1 = east, -1 = west
    cur = null,
    key = "",
    left = 0,
    last = 0,
    visible = false,
    running = false,
    hovering = false; // true while the pointer is over Yoshi himself: freezes him, sitting, bubble up

  function choose() {
    const canE = x < W - EDGE - 50,
      canW = x > EDGE + 50;
    const sx =
      canE && canW
        ? Math.random() < 0.7
          ? face
          : -face
        : canE
          ? 1
          : canW
            ? -1
            : x < W / 2
              ? 1
              : -1;
    const h = sx > 0 ? "E" : "W";
    const up = d < DEPTH * 0.35 ? true : d > DEPTH * 0.65 ? false : Math.random() < 0.5;
    const v = up ? "N" : "S";
    const r = Math.random() * 100;
    if (r < 25)
      return { kind: "walk", sp: "walk" + h, vx: sx * WALK, vd: 0, t: rnd(3, 6), face: sx };
    if (r < 40)
      return { kind: "run", sp: "run" + h, vx: sx * RUN, vd: 0, t: rnd(1.6, 3.2), face: sx };
    if (r < 60)
      return {
        kind: "sit",
        sp: Math.random() < 0.65 ? "sit" + (face > 0 ? "E" : "W") : "sitS",
        vx: 0,
        vd: 0,
        t: rnd(2.5, 6),
      };
    if (r < 75) {
      const s = Math.random();
      return {
        kind: "sleep",
        sp: s < 0.4 ? "sleepS" : face > 0 ? "sleepSE" : "sleepSW",
        vx: 0,
        vd: 0,
        t: rnd(5, 10),
      };
    }
    if (r < 90)
      return {
        kind: "wander",
        sp: "walk" + v + h,
        vx: sx * 28,
        vd: up ? 10 : -10,
        t: rnd(1.6, 2.6),
        face: sx,
      };
    return { kind: "turn", sp: "walk" + v, vx: 0, vd: up ? 12 : -12, t: rnd(1.6, 2.4) };
  }
  function pick() {
    let a;
    for (let n = 0; n < 4; n++) {
      a = choose();
      if (
        !(
          (a.kind === "sit" || a.kind === "sleep") &&
          cur &&
          (cur.kind === "sit" || cur.kind === "sleep")
        )
      )
        break; // no two rests in a row
    }
    return a;
  }

  function frame(dt) {
    if (!hovering) {
      left -= dt;
      if (!cur || left <= 0) {
        cur = pick();
        left = cur.t;
        if (cur.face) face = cur.face;
        if (cur.sp !== key) {
          key = cur.sp;
          const [file, w, h] = S[key];
          img.src = `${dir}/${file}`;
          img.width = w;
          img.height = h;
        }
      }
      let hit = false;
      x += cur.vx * dt;
      if (x < EDGE) ((x = EDGE), (hit = true));
      else if (x > W - EDGE) ((x = W - EDGE), (hit = true));
      d = Math.max(0, Math.min(DEPTH, d + cur.vd * dt));
      if (hit && cur.vx) left = 0; // reached a wall: pick something new, facing away
    }

    const [, , , cx, feet] = S[key];
    const py = Math.round(H - BASE - d - feet);
    img.style.transform = `translate(${Math.round(x - cx)}px, ${py}px)`;
    bubble.style.left = Math.round(x) + "px";
    bubble.style.top = py + "px";
  }

  function tick(t) {
    if (!lane.isConnected || !visible) {
      running = false;
      return;
    }
    const dt = Math.min(0.05, (t - last) / 1000 || 0.016);
    last = t;
    frame(dt);
    requestAnimationFrame(tick);
  }
  function wake() {
    if (!running && visible) {
      running = true;
      last = performance.now();
      requestAnimationFrame(tick);
    }
  }

  frame(0);
  img.style.visibility = "visible";
  img.addEventListener("pointerenter", () => {
    hovering = true;
    if (key !== "sitS") {
      key = "sitS";
      const [file, w, h] = S.sitS;
      img.src = `${dir}/${file}`;
      img.width = w;
      img.height = h;
    }
    lane.classList.add("bubble-open");
    bubble.classList.add("show");
  });
  img.addEventListener("pointerleave", () => {
    hovering = false;
    lane.classList.remove("bubble-open");
    bubble.classList.remove("show");
    left = 0; // resume: pick a fresh action next frame
  });
  const io = new IntersectionObserver((es) => {
    if (!lane.isConnected) return io.disconnect();
    visible = es[0].isIntersecting;
    if (visible) wake();
  });
  io.observe(lane);
}

/* Experience cards (Internship, Part-time, etc.) render as one "cage" card: a landscape
   card where the whole thing is the enclosure — content on top, a walking-floor strip
   at the bottom (only cards with a `pet` actually show an animal walking in it).
   Organizations use the plain card layout below instead, unchanged. */
function cageCard(it, key, i) {
  return `<article class="card studs cage rise" style="--i:${i % 4}">
    <div class="cage-top">
      <div class="item-top"><span class="tag">${esc(it.type)}</span><span class="tag gold">${esc(it.start)} – ${esc(it.end)}</span></div>
      <div class="item-head">${logoTile(it)}<div><h4 class="ttl">${esc(it.org)}</h4><p class="role">${esc(it.role)}</p></div></div>
      <p class="clamp3">${esc(it.summary)}</p>
      <button class="btn sm ghost" data-open="${key}:${i}">View details</button>
    </div>
    ${cageFloor(it.pet)}
  </article>`;
}

/* Still using the [Company Name]-style placeholders in EXPERIENCE? Then there's nothing
   real to show yet, so the whole section collapses into one big empty cage instead of
   two half-filled cards. Fill in real org/role/etc. (remove the [brackets]) and the
   normal per-entry cage cards above take over automatically — nothing else to flip. */
const isPlaceholder = (it) => /^\[.*\]$/.test(String(it.org || "").trim());

function emptyExpCard() {
  const pet = EXPERIENCE.find((it) => it.pet)?.pet || { dir: "assets/pet/yoshi" };
  return `<article class="card studs cage cage-empty rise">
    ${cageFloor(pet).replace('class="pet-lane', 'class="pet-lane big')}
    <div class="cage-poster" aria-hidden="true">
      <span class="cage-poster-pin"></span>
      <b>No experience<br>(yet)</b>
      <small>Yoshi's hooman is still job hunting too.</small>
    </div>
  </article>`;
}

function renderExperience() {
  const grid = $("#expGrid"),
    more = $("#expMore"),
    block = $("#expBlock");
  const real = EXPERIENCE.map((it, idx) => ({ it, idx })).filter(({ it }) => !isPlaceholder(it));
  if (!real.length) {
    grid.innerHTML = emptyExpCard();
    more.innerHTML = "";
    startPets(grid);
    reveal(grid);
    return;
  }
  const limit = 4;
  let open = false;
  const draw = () => {
    const shown = open ? real : real.slice(0, limit);
    grid.innerHTML = shown.map(({ it, idx }) => cageCard(it, "exp", idx)).join("");
    startPets(grid);
    reveal(grid);
    if (real.length > limit) {
      more.innerHTML = `<button class="btn ghost" type="button" aria-expanded="${open}">${open ? "Show fewer" : `View all experience (${real.length - limit} more)`}</button>`;
      $("button", more).onclick = () => {
        open = !open;
        draw();
      };
    } else more.innerHTML = "";
  };
  draw();
}

function itemCard(it, key, i) {
  return `<article class="card studs item rise" style="--i:${i % 4}">
    <div class="item-top"><span class="tag">${esc(it.type)}</span><span class="tag gold">${esc(it.start)} – ${esc(it.end)}</span></div>
    <div class="item-head">${logoTile(it)}<div><h4 class="ttl">${esc(it.org)}</h4><p class="role">${esc(it.role)}</p></div></div>
    <p class="clamp3">${esc(it.summary)}</p>
    <button class="btn sm ghost" data-open="${key}:${i}">View details</button>
  </article>`;
}

function listWithMore({ gridId, moreId, blockId, key, items, limit, noun }) {
  const grid = $("#" + gridId),
    more = $("#" + moreId),
    block = $("#" + blockId);
  if (!items.length) {
    block.hidden = true;
    return;
  }
  let open = false;
  const draw = () => {
    const shown = open ? items : items.slice(0, limit);
    grid.innerHTML = shown.map((it, i) => itemCard(it, key, i)).join("");
    startPets(grid);
    reveal(grid);
    if (items.length > limit) {
      more.innerHTML = `<button class="btn ghost" type="button" aria-expanded="${open}">${open ? "Show fewer" : `View all ${noun} (${items.length - limit} more)`}</button>`;
      $("button", more).onclick = () => {
        open = !open;
        draw();
      };
    } else more.innerHTML = "";
  };
  draw();
}
listWithMore({
  gridId: "orgGrid",
  moreId: "orgMore",
  blockId: "orgBlock",
  key: "org",
  items: ORGANIZATIONS,
  limit: 4,
  noun: "organizations",
});
renderExperience();

(function certs() {
  const block = $("#certBlock");
  if (!CERTIFICATIONS.length) {
    block.hidden = true;
    return;
  }
  const ICO_VIEW =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square" aria-hidden="true"><path d="M4 12h16M13 5l7 7-7 7"/></svg>';
  const grid = $("#certGrid"),
    more = $("#certMore"),
    limit = 3;
  let open = false;
  const cardHtml = (c, i) => `
    <article class="card studs cert rise" style="--i:${i % 3}">
      <div class="cert-img">
        <span class="year">${esc(c.year)}</span>
        ${c.image ? `<img src="${esc(c.image)}" alt="Certificate: ${esc(c.title)}" loading="lazy">` : '<svg aria-hidden="true"><use href="#medal"/></svg>'}
      </div>
      <div>
        <h4 class="ttl">${esc(c.title)}</h4>
        <p class="role">${esc(c.issuer)}</p>
      </div>
      <div class="cert-foot">
        <span class="cert-id">${c.credentialId ? "ID: " + esc(c.credentialId) : ""}</span>
        <button class="btn sm ghost" data-open="cert:${i}">Details${ICO_VIEW}</button>
      </div>
    </article>`;
  const draw = () => {
    const shown = open ? CERTIFICATIONS : CERTIFICATIONS.slice(0, limit);
    grid.innerHTML = shown.map((c, i) => cardHtml(c, i)).join("");
    reveal(grid);
    if (CERTIFICATIONS.length > limit) {
      more.innerHTML = `<button class="btn ghost" type="button" aria-expanded="${open}">${open ? "Show fewer" : `View all certificates (${CERTIFICATIONS.length - limit} more)`}</button>`;
      $("button", more).onclick = () => {
        open = !open;
        draw();
      };
    } else more.innerHTML = "";
  };
  draw();
})();

/* =========================================================
   5. SKILLS
   ========================================================= */
(function skills() {
  if (!SKILLS.length) {
    $("#skillBlock").hidden = true;
    return;
  }
  const cats = ["All", ...new Set(SKILLS.map((s) => s.category))];
  const LIMIT = 8;
  // logo file = assets/skills/<name-as-slug>.svg (falls back to .png, then to the monogram)
  const slug = (n) =>
    n
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  const skillIcon = (s) => {
    const src = s.logo || `assets/skills/${slug(s.name)}.svg`;
    return `<span class="mono has-logo t-${esc(s.tone)}" aria-hidden="true"><img src="${esc(src)}" alt="" width="40" height="40" loading="lazy" data-abbr="${esc(s.abbr)}"></span>`;
  };
  $("#skillGrid").addEventListener(
    "error",
    (e) => {
      const img = e.target;
      if (img.tagName !== "IMG") return;
      if (img.src.endsWith(".svg") && !img.dataset.png) {
        img.dataset.png = "1";
        img.src = img.src.replace(/\.svg$/, ".png");
      } else {
        const box = img.parentElement;
        box.classList.remove("has-logo");
        box.textContent = img.dataset.abbr;
      }
    },
    true
  );
  let cat = "All",
    open = false;
  const tabs = $("#skillTabs"),
    grid = $("#skillGrid"),
    more = $("#skillMore");
  const drawTabs = () => {
    tabs.innerHTML = cats
      .map(
        (c) =>
          `<button class="tab" type="button" aria-pressed="${c === cat}" data-c="${esc(c)}">${esc(c)}</button>`
      )
      .join("");
    $$(".tab", tabs).forEach(
      (b) =>
        (b.onclick = () => {
          cat = b.dataset.c;
          open = false;
          drawTabs();
          draw(true);
        })
    );
  };
  const draw = (animate) => {
    const list = SKILLS.filter((s) => cat === "All" || s.category === cat);
    const shown = open ? list : list.slice(0, LIMIT);
    grid.innerHTML = shown
      .map(
        (s, i) => `
      <div class="card studs skill ${animate ? "pop" : "rise"}" style="--i:${i % 8}">
        ${skillIcon(s)}
        <div><b>${esc(s.name)}</b><span class="tag gold">${esc(s.label)}</span></div>
      </div>`
      )
      .join("");
    if (!animate) reveal(grid);
    if (list.length > LIMIT) {
      more.innerHTML = `<button class="btn ghost" type="button" aria-expanded="${open}">${open ? "Show fewer" : `View all skills (${list.length - LIMIT} more)`}</button>`;
      $("button", more).onclick = () => {
        open = !open;
        draw(false);
      };
    } else more.innerHTML = "";
  };
  drawTabs();
  draw(false);
})();

/* =========================================================
   6. PROJECTS
   ========================================================= */
/* newest first: sorts by the "year" text ("may 2026", "2025"). same date = the one listed later wins. */
(function sortprojects() {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const when = (p) => {
    const text = String(p.year || "").trim();
    const y = /\d{4}/.exec(text);
    const m = months.indexOf(text.slice(0, 3).toLowerCase());
    return (y ? +y[0] : 0) * 12 + (m < 0 ? 0 : m);
  };
  const sorted = PROJECTS.map((p, i) => ({ p, i }))
    .sort((a, b) => when(b.p) - when(a.p) || b.i - a.i)
    .map((x) => x.p);
  PROJECTS.splice(0, PROJECTS.length, ...sorted); // in place, so data.proj stays in sync
})();

(function projects() {
  const sec = $("#projects");
  if (!PROJECTS.length) {
    sec.hidden = true;
    $('[data-nav="projects"]').closest("li").hidden = true;
    return;
  }
  const cats = ["All", ...new Set(PROJECTS.map((p) => p.category))].sort((a, b) =>
    a === "Other" ? 1 : b === "Other" ? -1 : 0
  );
  const cls = (c) =>
    ({
      "UI/UX Design": "c-ux",
      Mobile: "c-mobile",
      "Machine Learning": "c-ml",
      IoT: "c-iot",
      "Game Dev": "c-game",
      Other: "c-other",
    })[c] || "";
  let cat = "All";
  const ICO_VIEW =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square" aria-hidden="true"><path d="M4 12h16M13 5l7 7-7 7"/></svg>';
  const tabs = $("#projTabs"),
    grid = $("#projGrid");
  const drawTabs = () => {
    tabs.innerHTML = cats
      .map(
        (c) =>
          `<button class="tab" type="button" aria-pressed="${c === cat}" data-c="${esc(c)}">${esc(c)}</button>`
      )
      .join("");
    $$(".tab", tabs).forEach(
      (b) =>
        (b.onclick = () => {
          cat = b.dataset.c;
          drawTabs();
          draw(true);
        })
    );
  };
  const draw = (animate) => {
    const list = PROJECTS.map((p, idx) => ({ p, idx })).filter(
      ({ p }) => cat === "All" || p.category === cat
    );
    if (!list.length) {
      grid.innerHTML = `<div class="card empty"><h4 class="ttl">No projects in this category yet</h4><p>Pick another filter to see the rest of the work.</p></div>`;
      return;
    }
    grid.innerHTML = list
      .map(
        ({ p, idx }, i) => `
      <article class="card studs proj ${animate ? "pop" : "rise"}" style="--i:${i % 3}">
        <div class="cover ${p.cover ? "" : "ph"}">
          <span class="badge ${cls(p.category)}">${esc(p.category)}</span><span class="year">${esc(p.year)}</span>
          ${p.cover ? `<img src="${esc(p.cover)}" alt="Screenshot of ${esc(p.title)}" loading="lazy">` : '<svg aria-hidden="true"><use href="#brick"/></svg>'}
        </div>
        <div class="proj-body">
          <h4 class="ttl">${esc(p.title)}</h4>
          <p class="clamp2 muted">${esc(p.summary)}</p>
          <div class="proj-tags">${p.stack
            .slice(0, 3)
            .map((t) => `<span class="tag">${esc(t)}</span>`)
            .join(
              ""
            )}${p.stack.length > 3 ? `<span class="tag gold">+${p.stack.length - 3}</span>` : ""}</div>
          <div class="proj-actions">
            <button class="btn sm ghost" data-open="proj:${idx}">Details${ICO_VIEW}</button>
          </div>
        </div>
      </article>`
      )
      .join("");
    if (!animate) reveal(grid);
  };
  drawTabs();
  draw(false);
})();

/* =========================================================
   7. MODAL
   ========================================================= */
const modal = $("#modal");
function bullets(arr) {
  return arr && arr.length ? `<ul>${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
}
function buildModal(kind, it) {
  if (kind === "exp" || kind === "org" || kind === "edu") {
    const title = kind === "edu" ? it.school : it.org;
    const sub = kind === "edu" ? it.degree : it.role;
    return {
      title,
      html: `
      <div class="m-meta">${it.type ? `<span class="tag">${esc(it.type)}</span>` : ""}<span class="tag gold">${esc(it.start)} – ${esc(it.end)}</span></div>
      <div><p class="m-label">${esc(sub)}</p><p>${esc(it.summary)}</p></div>
      ${bullets(it.details)}
      ${it.images && it.images.length ? `<p class="m-label">gallery</p><div class="m-shots">${imgs(shuffle(it.images))}</div>` : ""}`,
    };
  }
  if (kind === "cert") {
    return {
      title: it.title,
      html: `
      <div class="m-meta"><span class="tag">${esc(it.issuer)}</span><span class="tag gold">${esc(it.year)}</span>${it.credentialId ? `<span class="tag">ID: ${esc(it.credentialId)}</span>` : ""}</div>
      ${it.image ? `<img class="m-hero" src="${esc(it.image)}" alt="Certificate: ${esc(it.title)}">` : ""}
      <p>${esc(it.description)}</p>
      ${it.credentialUrl ? `<div class="m-links"><a class="btn sm" href="${esc(it.credentialUrl)}" target="_blank" rel="noopener">Verify credential</a></div>` : ""}`,
    };
  }
  if (kind === "proj") {
    return {
      title: it.title,
      html: `
      <div class="m-meta"><span class="tag deep">${esc(it.category)}</span><span class="tag gold">${esc(it.year)}</span></div>
      ${it.cover ? `<img class="m-hero" src="${esc(it.cover)}" alt="Screenshot of ${esc(it.title)}">` : ""}
      <p>${esc(it.description || it.summary)}</p>
      ${it.features && it.features.length ? `<div><p class="m-label">Features</p>${bullets(it.features)}</div>` : ""}
      ${it.stack && it.stack.length ? `<div><p class="m-label">Built with</p><div class="m-meta">${it.stack.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div></div>` : ""}
      ${it.screenshots && it.screenshots.length ? `<div class="m-shots">${imgs(it.screenshots)}</div>` : ""}
      ${it.liveUrl || it.repoUrl ? `<div class="m-links">${it.liveUrl ? `<a class="btn sm" href="${esc(it.liveUrl)}" target="_blank" rel="noopener">Live site</a>` : ""}${it.repoUrl ? `<a class="btn sm gold" href="${esc(it.repoUrl)}" target="_blank" rel="noopener">Source on GitHub</a>` : ""}</div>` : ""}`,
    };
  }
}
let lastFocus = null;
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-open]");
  if (!b) return;
  const [kind, i] = b.dataset.open.split(":");
  const it = DATA[kind] && DATA[kind][+i];
  if (!it) return;
  if (kind === "edu" || kind === "proj") {
    lastFocus = b;
    openShowcase(kind, it);
    return;
  }
  const m = buildModal(kind, it);
  $("#mTitle").textContent = m.title;
  $("#mBody").innerHTML = m.html;
  revealShots();
  lastFocus = b;
  modal.showModal();
  document.documentElement.style.overflow = "hidden";
  $("#mBody").scrollTop = 0;
});
$("#mClose").onclick = () => modal.close();
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});
modal.addEventListener("close", () => {
  if (!imgView.open) document.documentElement.style.overflow = "";
  if (lastFocus) lastFocus.focus();
});

/* ---- Showcase modal (education): photo gallery on the left, details on the right ---- */
const showcase = $("#showcase");
const SC_PIN =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
const SC_CHECK =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.8 2.8L16 9.5"/></svg>';
let scSlides = [],
  scIdx = 0,
  scAlt = "";

function scDraw() {
  const s = scSlides[scIdx],
    n = scSlides.length;
  $("#scFrame").innerHTML = s.src
    ? `<img class="sc-slide pop" src="${esc(s.src)}" alt="${esc(s.caption)}, photo ${scIdx + 1} of ${n}">`
    : `<div class="sc-slide sc-ph pop"><svg aria-hidden="true"><use href="#brick"/></svg><b>Sample photo ${s.ph}</b><span>Add yours in assets/education/</span></div>`;
  $("#scCount").textContent = `${scIdx + 1} / ${n}`;
  $("#scShort").textContent = s.caption;
  $("#scDots").innerHTML = scSlides
    .map(
      (_, i) =>
        `<button type="button" class="sc-dot${i === scIdx ? " on" : ""}" data-i="${i}" aria-label="Show photo ${i + 1}"${i === scIdx ? ' aria-current="true"' : ""}></button>`
    )
    .join("");
}
const scGo = (d) => {
  scIdx = (scIdx + d + scSlides.length) % scSlides.length;
  scDraw();
};

const SC_TERM =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square" aria-hidden="true"><rect x="3" y="3" width="18" height="18"/><path d="m7 11 2-2-2-2M11 13h4"/></svg>';
const SC_EXT =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="square" aria-hidden="true"><path d="M15 3h6v6M10 14 21 3M18 13v6H5V6h6"/></svg>';
const SC_DL =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="square" aria-hidden="true"><path d="M12 3v11m0 0-4-4m4 4 4-4M5 21h14"/></svg>';

function projectDetail(it) {
  const block = (h, t) =>
    t
      ? `<section class="pd-sec"><h4 class="pd-h">${h}</h4><p class="pd-p">${esc(t)}</p></section>`
      : "";
  const hl = it.highlights || [];
  return `<div class="pd">
    <div class="pd-head">
      <span class="pd-year">${esc(it.year)}</span>
      <h3 class="sc-title pd-title" id="scTitle">${esc(it.title)}</h3>
      <p class="pd-cat">${esc(it.category)}</p>
    </div>
    ${it.summary ? `<blockquote class="pd-lede">${esc(it.summary)}</blockquote>` : ""}
    ${block("Problem context:", it.problem)}
    ${block("Engineered solution:", it.solution)}
    ${hl.length ? `<section class="pd-sec"><h4 class="pd-h">${SC_CHECK}Key highlights &amp; details:</h4><ul class="pd-list">${hl.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></section>` : ""}
    ${it.stack && it.stack.length ? `<section class="pd-sec pd-rule"><h4 class="pd-h">${SC_TERM}Technologies &amp; arsenal:</h4><div class="pd-tags">${it.stack.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div></section>` : ""}
    ${it.liveUrl || it.repoUrl ? `<div class="pd-links">${it.repoUrl ? `<a class="btn dark" href="${esc(it.repoUrl)}" target="_blank" rel="noopener">GitHub repo${SC_EXT}</a>` : ""}${it.liveUrl ? `<a class="btn" href="${esc(it.liveUrl)}" target="_blank" rel="noopener">Live site${SC_EXT}</a>` : ""}</div>` : ""}
  </div>`;
}

function openShowcase(kind, it) {
  const isProj = kind === "proj";
  const rawImages = isProj
    ? it.screenshots && it.screenshots.length
      ? it.screenshots
      : it.cover
        ? [it.cover]
        : []
    : it.images || [];
  const real = rawImages.filter(Boolean);
  const fallbackCaption = isProj ? it.title : it.shortTitle || it.school;
  scSlides = real.length
    ? real.map((img) =>
        typeof img === "string"
          ? { src: img, caption: fallbackCaption }
          : { src: img.src, caption: img.caption || fallbackCaption }
      )
    : [1, 2, 3].map((ph) => ({ ph, caption: fallbackCaption }));
  scIdx = 0;
  scAlt = fallbackCaption;
  const isApk = !!(it.liveUrl && /\.apk(\?|$)/i.test(it.liveUrl));
  const multi = scSlides.length > 1;
  $("#scPrev").disabled = !multi;
  $("#scNext").disabled = !multi;
  $("#scDots").classList.toggle("off", !multi);
  $("#scDetails").innerHTML = isProj
    ? `
    <span class="sc-date">${esc(it.year)}</span>
    <div>
      <h3 class="sc-title" id="scTitle">${esc(it.title)}</h3>
      <p class="sc-sub"><b>${esc(it.category)}</b>${it.location ? `<span class="sc-loc">${SC_PIN}${esc(it.location)}</span>` : ""}</p>
    </div>
    <div class="sc-note"><p>${esc(it.summary)}</p></div>
    ${it.problem ? `<div><h4 class="sc-h">Problem context</h4><p>${esc(it.problem)}</p></div>` : ""}
    ${it.solution ? `<div><h4 class="sc-h">Engineered solution</h4><p>${esc(it.solution)}</p></div>` : ""}
    ${it.highlights && it.highlights.length ? `<div><h4 class="sc-h">Key highlights &amp; details</h4><ul class="sc-list">${it.highlights.map((f) => `<li>${esc(f)}</li>`).join("")}</ul></div>` : ""}
    ${it.stack && it.stack.length ? `<div><h4 class="sc-h">Technologies used</h4><div class="m-meta">${it.stack.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div></div>` : ""}
    ${it.liveUrl || it.repoUrl ? `<hr class="sc-rule"><div class="m-links">${it.liveUrl ? `<a class="btn sm ${isApk ? "lime" : ""}" href="${esc(it.liveUrl)}" target="_blank" rel="noopener">${isApk ? "Get APK" : "Live site"}${isApk ? SC_DL : SC_EXT}</a>` : ""}${it.repoUrl ? `<a class="btn sm gold" href="${esc(it.repoUrl)}" target="_blank" rel="noopener">GitHub repo${SC_EXT}</a>` : ""}</div>` : ""}`
    : `
    <span class="sc-date">${esc(it.start)} – ${esc(it.end)}</span>
    <div>
      <h3 class="sc-title" id="scTitle">${esc(it.degree)}</h3>
      <p class="sc-sub"><b>${esc(it.school)}</b>${it.location ? `<span class="sc-loc">${SC_PIN}${esc(it.location)}</span>` : ""}</p>
    </div>
    <div class="sc-note"><p>${esc(it.summary)}</p></div>
    ${it.details && it.details.length ? `<div><h4 class="sc-h">Key highlights &amp; details</h4><ul class="sc-list">${it.details.map((d) => `<li>${esc(d)}</li>`).join("")}</ul></div>` : ""}`;
  scDraw();
  showcase.showModal();
  document.documentElement.style.overflow = "hidden";
  $("#scDetails").scrollTop = 0;
}
$("#scPrev").onclick = () => scGo(-1);
$("#scNext").onclick = () => scGo(1);
$("#scDots").onclick = (e) => {
  const d = e.target.closest(".sc-dot");
  if (d) {
    scIdx = +d.dataset.i;
    scDraw();
  }
};
showcase.addEventListener("keydown", (e) => {
  if (scSlides.length < 2) return;
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    scGo(-1);
  }
  if (e.key === "ArrowRight") {
    e.preventDefault();
    scGo(1);
  }
});
$("#scClose").onclick = () => showcase.close();
showcase.addEventListener("click", (e) => {
  if (e.target === showcase) showcase.close();
});
showcase.addEventListener("close", () => {
  if (!imgView.open) document.documentElement.style.overflow = "";
  if (lastFocus) lastFocus.focus();
});

const imgView = $("#imgView");
const ivPic = $("#ivPic");
document.addEventListener(
  "click",
  (e) => {
    const img = e.target.closest(".m-shots img");
    if (!img) return;
    e.preventDefault();
    e.stopPropagation();
    ivPic.src = img.src;
    ivPic.alt = img.alt || "";
    imgView.showModal();
    document.documentElement.style.overflow = "hidden";
  },
  true
);
$("#ivClose").onclick = () => imgView.close();
imgView.addEventListener("click", (e) => {
  if (e.target === imgView) imgView.close();
});
imgView.addEventListener("close", () => {
  ivPic.src = "";
  if (!modal.open && !showcase.open) document.documentElement.style.overflow = "";
});

/* =========================================================
   8. GITHUB CONTRIBUTIONS
   ========================================================= */
(function github() {
  const fmt = (d) =>
    new Date(d + "T00:00:00Z").toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });
  const snapDays = () => {
    const out = [];
    const t0 = Date.UTC(...GH_SNAPSHOT.start.split("-").map((n, i) => (i === 1 ? +n - 1 : +n)));
    for (let i = 0; i < GH_SNAPSHOT.levels.length; i++) {
      out.push({
        date: new Date(t0 + i * 86400000).toISOString().slice(0, 10),
        level: +GH_SNAPSHOT.levels[i],
        count: GH_SNAPSHOT.counts[i],
      });
    }
    return out;
  };
  function render(days, live) {
    const cal = $("#cal"),
      months = $("#months");
    const lead = new Date(days[0].date + "T00:00:00Z").getUTCDay(); // Sunday-first rows
    let html = '<i class="blank"></i>'.repeat(lead);
    html += days
      .map(
        (d) =>
          `<i class="lv${d.level}" title="${d.count} contribution${d.count === 1 ? "" : "s"} on ${fmt(d.date)}"></i>`
      )
      .join("");
    cal.innerHTML = html;

    const cols = Math.ceil((lead + days.length) / 7);
    let last = -1,
      lab = "";
    for (let c = 0; c < cols; c++) {
      const idx = c * 7 - lead;
      const d = days[Math.max(0, idx)];
      const m = new Date(d.date + "T00:00:00Z").getUTCMonth();
      if (m !== last && c < cols - 2) {
        lab += `<span style="grid-column:${c + 1}">${new Date(d.date + "T00:00:00Z").toLocaleDateString("en-US", { month: "short", timeZone: "UTC" })}</span>`;
        last = m;
      } else if (m !== last) last = m;
    }
    months.innerHTML = lab;

    const total = days.reduce((a, d) => a + d.count, 0);
    const active = days.filter((d) => d.count > 0).length;
    const best = days.reduce((a, d) => (d.count > a.count ? d : a), days[0]);
    $("#ghTotal").innerHTML = `<span>${total}</span> contributions in the last year`;
    $("#ghSrc").textContent = live
      ? "Live from GitHub"
      : "Last updated " + fmt(days[days.length - 1].date);
    $("#ghStats").innerHTML = [
      [total, "Total contributions"],
      [active, "Active days"],
      [best.count, best.count ? "Best day, " + fmt(best.date) : "Best day"],
    ]
      .map(
        ([n, l], i) =>
          `<div class="card studs stat rise" style="--i:${i}"><strong>${n}</strong><span>${esc(l)}</span></div>`
      )
      .join("");
    reveal($("#ghStats"));
    const sc = $(".cal-scroll");
    sc.scrollLeft = sc.scrollWidth;
  }
  render(snapDays(), false);

  // Try live data (works when hosted; falls back silently to the snapshot).
  try {
    fetch(
      "https://github-contributions-api.jogruber.de/v4/" +
        encodeURIComponent(CONFIG.githubUser) +
        "?y=last"
    )
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((j) => {
        const days = (j.contributions || [])
          .map((d) => ({ date: d.date, count: d.count, level: d.level }))
          .sort((a, b) => (a.date < b.date ? -1 : 1));
        if (days.length > 300) render(days, true);
      })
      .catch(() => {});
  } catch (_) {}
})();

/* =========================================================
   9. LANYARD (vanilla pendulum, drag to swing)
   ========================================================= */
(function lanyard() {
  const stage = $("#stage"),
    band = $("#band"),
    card = $("#idcard");
  const photo = $("#idPhoto");
  let W = 0,
    L = 190,
    cw = 232,
    ax = 0;
  let th = reduce ? 0 : 0.6,
    om = 0; // rope angle + angular velocity
  let ph = th,
    pom = 0; // card rotation (lags the rope for a natural wobble)
  let drag = false,
    running = false,
    visible = true,
    last = 0,
    moved = 0,
    sx = 0,
    sy = 0,
    prevTh = th;

  function setPhoto(src) {
    const svg = $("#idPlaceholder");
    if (svg) svg.remove();
    let img = $("img", photo);
    if (!img) {
      img = document.createElement("img");
      img.alt = "My photo on the ID card";
      photo.appendChild(img);
    }
    img.src = src;
  }
  if (CONFIG.photoSrc) setPhoto(CONFIG.photoSrc);

  function measure() {
    W = stage.clientWidth;
    ax = W / 2;
    cw = card.offsetWidth;
    const ch = card.offsetHeight;
    L = Math.max(90, Math.min(200, stage.clientHeight - ch - 40));
    band.style.height = L + "px";
    render();
  }
  function render() {
    const x = ax + L * Math.sin(th),
      y = L * Math.cos(th);
    band.style.transform = `translateX(-50%) rotate(${-th}rad)`;
    card.style.transform = `translate(${x - cw / 2}px, ${y}px) rotate(${-ph}rad)`;
  }
  function step(t) {
    if (!running) return;
    let dt = Math.min(0.033, (t - last) / 1000 || 0.016);
    last = t;
    if (drag) {
      om = ((th - prevTh) / dt) * 0.5 + om * 0.5;
      prevTh = th;
    } else {
      const g = 3000,
        c = 0.55;
      om += (-(g / L) * Math.sin(th) - c * om) * dt;
      th += om * dt;
    }
    pom += (-70 * (ph - th) - 6 * pom) * dt;
    ph += pom * dt;
    render();
    const calm =
      !drag &&
      Math.abs(om) < 0.004 &&
      Math.abs(th) < 0.002 &&
      Math.abs(pom) < 0.004 &&
      Math.abs(ph - th) < 0.002;
    if (calm) {
      th = ph = 0;
      om = pom = 0;
      render();
      running = false;
      return;
    }
    requestAnimationFrame(step);
  }
  function wake() {
    if (!running && visible) {
      running = true;
      last = performance.now();
      requestAnimationFrame(step);
    }
  }

  if (!reduce) {
    card.addEventListener("pointerdown", (e) => {
      drag = true;
      moved = 0;
      sx = e.clientX;
      sy = e.clientY;
      card.setPointerCapture(e.pointerId);
      card.classList.add("grabbing");
      prevTh = th;
      wake();
    });
    card.addEventListener("pointermove", (e) => {
      if (!drag) return;
      moved = Math.max(moved, Math.abs(e.clientX - sx) + Math.abs(e.clientY - sy));
      const r = stage.getBoundingClientRect();
      const px = e.clientX - r.left - ax,
        py = Math.max(30, e.clientY - r.top - 12);
      th = Math.max(-1.25, Math.min(1.25, Math.atan2(px, py)));
    });
    const end = (e) => {
      if (!drag) return;
      drag = false;
      card.classList.remove("grabbing");
      wake();
    };
    card.addEventListener("pointerup", end);
    card.addEventListener("pointercancel", end);
  } else {
    card.style.cursor = "default";
  }

  new IntersectionObserver((es) => {
    visible = es[0].isIntersecting;
    if (visible) wake();
    else running = false;
  }).observe(stage);
  addEventListener("resize", () => {
    measure();
    wake();
  });
  if (document.fonts && document.fonts.ready)
    document.fonts.ready.then(() => {
      measure();
      wake();
    });
  measure();
  wake();
})();

/* =========================================================
   10. NAV, TOP BUTTON
   ========================================================= */
(function nav() {
  const links = $$("[data-nav]");
  const ids = ["home", "about", "projects", "contact"];
  const secs = ids.map((id) => document.getElementById(id)).filter((s) => s && !s.hidden);
  const setActive = (id) =>
    links.forEach((a) => a.setAttribute("aria-current", a.dataset.nav === id ? "true" : "false"));
  setActive("home");
  const io = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  secs.forEach((s) => io.observe(s));

  const menuBtn = $("#menuBtn"),
    menu = $("#links");
  menuBtn.onclick = () => {
    const open = menu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      menu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  const top = $("#topBtn");
  const onScroll = () => top.classList.toggle("show", scrollY > 520);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  top.onclick = () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
})();

/* =========================================================
   11. CONTACT FORM
   ========================================================= */
(function form() {
  const f = $("#form"),
    status = $("#formStatus"),
    send = $("#send");
  const rules = {
    name: (v) => v.trim().length >= 2,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
    message: (v) => v.trim().length >= 10,
  };
  const mark = (k, ok) => $(`[data-f="${k}"]`).classList.toggle("bad", !ok);
  Object.keys(rules).forEach((k) =>
    f.elements[k].addEventListener("blur", () => mark(k, rules[k](f.elements[k].value)))
  );
  Object.keys(rules).forEach((k) =>
    f.elements[k].addEventListener("input", () => {
      if ($(`[data-f="${k}"]`).classList.contains("bad")) mark(k, rules[k](f.elements[k].value));
    })
  );

  f.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (f.elements.website.value) return; // honeypot
    status.className = "status-msg";
    status.textContent = "";
    const bad = Object.keys(rules).filter((k) => !rules[k](f.elements[k].value));
    Object.keys(rules).forEach((k) => mark(k, !bad.includes(k)));
    if (bad.length) {
      f.elements[bad[0]].focus();
      return;
    }

    const data = {
      name: f.elements.name.value.trim(),
      email: f.elements.email.value.trim(),
      message: f.elements.message.value.trim(),
    };
    if (!CONFIG.formEndpoint) {
      const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name} (${data.email})`);
      location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Portfolio message from " + data.name)}&body=${body}`;
      status.className = "status-msg ok";
      status.textContent = "Opening your email app with the message ready to send.";
      return;
    }
    send.disabled = true;
    status.textContent = "Sending...";
    try {
      const r = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error();
      f.reset();
      status.className = "status-msg ok";
      status.textContent = "Message sent. I will reply as soon as I can.";
    } catch (_) {
      status.className = "status-msg fail";
      status.textContent =
        "The message did not send. Check your connection and try again, or email " +
        CONFIG.email +
        ".";
    } finally {
      send.disabled = false;
    }
  });
})();

/* =========================================================
   12. ABOUT EXTRAS: location line + counting stat boxes
   ========================================================= */
(function aboutExtras() {
  const card = $("#aboutCard"),
    wrap = $("#eduWrap");

  // location line pinned to the bottom of the About card
  if (PROFILE.location) {
    card.insertAdjacentHTML(
      "beforeend",
      `<div class="about-loc"><div class="about-loc-line">${SC_PIN}<span>${esc(PROFILE.location)}</span></div></div>`
    );
  }

  // stat boxes under Education
  if (!PROFILE.stats || !PROFILE.stats.length) return;
  wrap.insertAdjacentHTML(
    "beforeend",
    `<div class="about-stats">${PROFILE.stats
      .map(
        (s, i) => `<div class="card studs kpi rise" style="--i:${i}" data-to="${+s.to}">
          <div class="kpi-num" aria-hidden="true"><span class="n">${+s.to}</span><span class="sx">${esc(s.suffix || "")}</span></div>
          <div class="kpi-lbl" aria-hidden="true">${esc(s.label)}</div>
          <span class="sr">${+s.to}${esc(s.suffix || "")} ${esc(s.label)}</span>
        </div>`
      )
      .join("")}</div>`
  );
  reveal(wrap);

  // hover (or tap on mobile): count from 0 up to the number, ease in and out
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  function count(box) {
    if (reduce || box._busy) return;
    const n = $(".n", box),
      to = +box.dataset.to,
      ms = 1500,
      t0 = performance.now();
    box._busy = true;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / ms);
      n.textContent = Math.round(to * ease(p));
      if (p < 1) requestAnimationFrame(tick);
      else box._busy = false;
    };
    requestAnimationFrame(tick);
  }
  $$(".kpi", wrap).forEach((b) => b.addEventListener("pointerenter", () => count(b)));
})();
