// All page copy lives here. Edit text and add projects/tools/testimonials here, not in JSX.

// Change this if the real number of documented scenarios differs.
export const scenarioCount = 147;

export const pillars = [
  {
    id: "ship-reliably",
    title: "Ship Reliably",
    heading: "Quality Engineering & Release Automation",
    problem: "Releases feel risky and regression takes too long.",
    summary:
      "We build the testing, automation and release checks that let your team ship often without crossing its fingers.",
    capabilities: [
      "Manual & functional testing",
      "UI automation (Playwright, Selenium)",
      "API testing",
      "Database validation",
      "Regression automation",
      "CI/CD quality gates",
      "Release validation",
      "Performance testing",
      "Test data management",
      "Cross-browser testing",
    ],
  },
  {
    id: "trust-your-ai",
    title: "Trust Your AI",
    heading: "AI Quality & Reliability",
    problem: "Your AI feature works in demos, but you can't prove it holds up.",
    summary:
      "We evaluate AI features and agents the way you would test any critical system: with repeatable checks, clear criteria and regression coverage.",
    capabilities: [
      "AI feature & agent testing",
      "LLM evaluation",
      "Hallucination & factuality checks",
      "Tool-call validation",
      "Prompt-injection testing",
      "RAG evaluation",
      "AI regression testing",
      "Safety evaluation",
      "Latency & cost evaluation",
    ],
  },
  {
    id: "automate",
    title: "Eliminate Repetitive Work",
    heading: "Workflow & Engineering Automation",
    problem: "Skilled people spend hours on work a system could do.",
    summary:
      "We find the repetitive workflow, then build the automation, integration or small internal tool that removes it.",
    capabilities: [
      "API integrations",
      "Browser automation",
      "Workflow automation",
      "AI-powered workflows",
      "Internal tools",
      "Reporting & data automation",
      "Document workflows",
      "Business-process automation",
      "AI agents",
    ],
  },
];

// lib/content.ts
export const techStrip = [
  { name: "Playwright", icon: "🎭" },
  { name: "Selenium", icon: "🟢" },
  { name: "Postman", icon: "🧡" },
  { name: "JMeter", icon: "📊" },
  { name: "GitHub Actions", icon: "⚙️" },
  { name: "Docker", icon: "🐳" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "SQL", icon: "🗄️" },
  { name: "Claude", icon: "🧠" },
  { name: "ChatGPT", icon: "🤖" },
  { name: "Jira", icon: "💙" },
  { name: "Azure", icon: "☁️" },
  { name: "CI/CD", icon: "🔄" },
  { name: "Excel", icon: "💚" },
];

// Project tiles on the homepage and the Work page. `evidence` is the row of blue capability labels.
export const featuredProjects = [
  {
    slug: "healthcare-quality-engineering",
    title: "Healthcare Application: End-to-End Quality Engineering",
    summary:
      "A healthcare application taken through manual testing, UI and API automation, database validation, AI testing and CI/CD.",
      image: "/images/dashboard.png",
    evidence: [
      "End-to-end workflow validation",
      "API and integration testing",
      "Automated regression and CI pipeline validation",
    ],
  },
  {
    slug: "releaselab-intelligence",
    title: "ReleaseLab Intelligence",
    summary:
      "AI Quality Engineering & LLM Evaluation: testing that AI responses are correct, rule-compliant, safe and consistent.",
      image: "/images/intelligence.png",
    evidence: [
      "Response Correctness",
      "Guardrails & Input Validation",
      "Token Limits & Usage",
      "Latency & Performance",
      "Failure Analysis & Evaluation",
    ],
  },
];

export const processSteps = [
  { title: "Conversation", text: "We understand the actual problem before proposing anything." },
  { title: "Focused assessment", text: "A targeted review of feature, workflow, or product area." },
  { title: "Roadmap", text: "Findings, risks and practical next steps you can use with or without us." },
  {
    title: "Build and Improve",
    text: "Implement the agreed improvements, strengthen automation, and prepare for the next release.",
  },
];

export const assessments = [
  {
    title: "Release Reliability Assessment",
    forWho: "A specific release or product area with regression, automation, CI/CD or release-confidence problems.",
    gets: ["Gaps in current test coverage and pipeline", "Release risks ranked by impact", "A practical improvement roadmap"],
  },
  {
    title: "AI Feature Reliability Assessment",
    forWho: "A specific AI feature or agent where you want to understand reliability, evaluation gaps, safety or regression risk.",
    gets: ["Evaluation gaps and failure modes", "Safety and prompt-injection exposure", "A starter evaluation plan"],
  },
  {
    title: "Automation Opportunity Assessment",
    forWho: "A specific repetitive business or engineering workflow that eats time every week.",
    gets: ["The workflow mapped and measured", "What is worth automating, and what is not", "An implementation roadmap"],
  },
];

export const partnerModels = [
  {
    title: "White-label QE",
    text: "We work behind your brand while you keep the client relationship. Your process, your communication, our engineering.",
  },
  {
    title: "Overflow support",
    text: "Extra QA and automation capacity when your internal team is stretched across releases.",
  },
  {
    title: "Specialist support",
    text: "Targeted help in one area: automation, API testing, performance, AI testing, release validation or CI/CD quality.",
  },
  {
    title: "Referral partnership",
    text: "Introduce clients who need quality engineering and we handle it properly, with you kept informed.",
  },
];

export const partnerFit = [
  "Software development agencies",
  "Digital agencies",
  "Product development firms",
  "Technology companies needing external QE capability",
];

// `focus` is the short label shown on each product card (what it is for).
// `focus` is the short label shown on each product card (what it is for).
// `focus` is the short label shown on each product card (what it is for).
export const tools = [
  {
    name: "AI Sanity Tester",
    focus: "Rapid Smoke & Regression Validation",
    text: "Dynamic post-deployment sanity validation built to adapt to minor UI variations without triggering false flags or requiring constant script maintenance.",
    categories: [
      "Self-healing selectors",
      "Post-deploy visual delta check",
      "Zero-maintenance smoke suites",
      "Production guardrail verification",
    ],
  },
  {
    name: "Testcase Generator",
    focus: "Automated Test Coverage & Edge Cases",
    text: "Moves beyond generic prompt outputs to generate precise, boundary-tested automation scripts tailored directly to your user flows and product logic.",
    categories: [
      "Boundary value scaffolding",
      "User-journey flow mapping",
      "Negative test case discovery",
      "Clean code architecture export",
    ],
  },
  {
    name: "AI Business Intelligence Assistant",
    focus: "AI Response Evaluation",
    text: "Integrates AI safely with your business data to validate response correctness, enforce guardrails, and uncover accurate insights without hallucinations.",
    categories: [
      "Multi-source SQL data grounding",
      "Strict rule & prompt guardrails",
      "Hallucination prevention filters",
      "Context-aware response scoring",
    ],
  },
  {
    name: "Retry Analyzer",
    focus: "Test Automation & Release Confidence",
    text: "Unlike traditional CI/CD runners that force blind retries and leave engineers guessing, our engine instantly categorizes root causes to slash triage time.",
    categories: [
      "Instant flaky test isolation",
      "Environment vs. code failure split",
      "Historical timing drift analysis",
      "Automated root cause tagging",
    ],
  },
];

// Add real testimonials here (quote, name, role, company). Until then the site shows an honest placeholder.
//export const testimonials: { quote: string; name: string; role: string; company: string }[] = [];

// Fill this in with real details to show a founder card on /about. null hides it.
export const founder: { name: string; role: string; bio: string } | null = null;

export const principles = [
  { title: "Problem first", text: "We understand what is actually going wrong before suggesting any solution." },
  { title: "Evidence over claims", text: "We show the work behind a capability instead of just asserting it." },
  { title: "Honest status", text: "Prototypes are called prototypes. We do not publish numbers we cannot back up." },
  { title: "Engineering depth", text: "Automation, APIs, data and AI treated as engineering, not checklists." },
];

export const testimonials = [
  {
    quote: "ReleaseLab QA completely transformed our release pipeline. Zero regression issues since integration.",
    name: "Alex Rivera",
    role: "Head of Engineering",
    country: "USA",
  },
  {
    quote: "Their automated test suite caught critical API payload bugs before our major production deployment.",
    name: "Sarah Jenkins",
    role: "VP of Product",
    country: "USA",
  },
  {
    quote: "An absolute powerhouse for test automation. They integrated directly with our GitHub workflows seamlessly.",
    name: "Michael Chang",
    role: "Lead Software Architect",
    country: "Canada",
  },
  {
    quote: "The rigor they brought to our AI model validation and safety checks gave us total confidence to ship.",
    name: "Emma Watson",
    role: "Chief Technology Officer",
    country: "UK",
  },
  {
    quote: "Reliable, fast, and exceptionally thorough. They handle our complex regression cycles without missing a beat.",
    name: "David Miller",
    role: "Director of Engineering",
    country: "USA",
  },
  {
    quote: "Working with ReleaseLab QA solved our scaling bottlenecks. Our QA cycle times dropped by nearly 60%.",
    name: "Tariq Al-Mansoor",
    role: "Head of Product Development",
    country: "UAE",
  },
  {
    quote: "Exceptional depth in Playwright automation and performance testing. True engineering professionals.",
    name: "Priya Sharma",
    role: "Principal QA Engineer",
    country: "India",
  },
  {
    quote: "They act as a true extension of our internal team. The quality gates they implemented are rock solid.",
    name: "Jessica Taylor",
    role: "Senior Engineering Manager",
    country: "USA",
  },
  {
    quote: "Their data validation and end-to-end workflow checks saved us from major client-facing production bugs.",
    name: "Carlo Mendoza",
    role: "Technical Lead",
    country: "Philippines",
  },
  {
    quote: "Clean code, robust test architectures, and zero fluff. Exactly what a scaling engineering team needs.",
    name: "Brandon Scott",
    role: "Co-Founder & CTO",
    country: "USA",
  },
];