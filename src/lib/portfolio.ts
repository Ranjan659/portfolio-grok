export const profile = {
  name: "Ranjan Bhattarai",
  shortName: "RB",
  title: "Senior Backend / Full-Stack Engineer",
  location: "Bhaktapur, Nepal",
  phone: "+977-9862699155",
  phoneHref: "tel:+9779862699155",
  email: "ranjanbhattarai659@gmail.com",
  github: "https://github.com/Ranjan659",
  linkedin: "https://www.linkedin.com/in/ranjan-bhattarai/",
  availability: "Available immediately · Remote / hybrid / on-site",
  languages: [
    { name: "Nepali", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Japanese", level: "Basic" },
  ],
  education: {
    degree: "B.Sc. Computer Science & Information Technology",
    school: "Ambition College, Tribhuvan University",
    years: "2017 — 2021",
  },
  years: "5+",
  now: "IncidentLens · AI Workspace",
};

export const nav = [
  { href: "#work", label: "Work", id: "work", number: "01" },
  { href: "#research", label: "Research", id: "research", number: "02" },
  { href: "#experience", label: "Experience", id: "experience", number: "03" },
  { href: "#stack", label: "Stack", id: "stack", number: "04" },
  { href: "#about", label: "About", id: "about", number: "05" },
  { href: "#contact", label: "Contact", id: "contact", number: "06" },
] as const;

export const signals = [
  { label: "Experience", value: "5+ years" },
  { label: "Base", value: "Bhaktapur" },
  { label: "Remote from", value: "Tokyo · Unibird" },
  { label: "Now", value: "IncidentLens" },
];

export const skills = [
  {
    number: "01",
    title: "Backend & APIs",
    description:
      "Modular Node.js services with validation, idempotency, centralized errors, and a hard line between business logic and infrastructure.",
    items: ["Node.js", "TypeScript", "NestJS", "Express", "REST"],
  },
  {
    number: "02",
    title: "Distributed systems",
    description:
      "Kafka-backed workflows with consumer groups, retry topics, offset discipline, dead-letter queues, and compensating actions.",
    items: ["Kafka", "Microservices", "Idempotency", "DLQ"],
  },
  {
    number: "03",
    title: "Data & performance",
    description:
      "Relational models that survive production: indexing from EXPLAIN ANALYZE, N+1 elimination, pooling, and Redis with a real invalidation story.",
    items: ["PostgreSQL", "Redis", "Prisma", "Sequelize", "MongoDB"],
  },
  {
    number: "04",
    title: "Real-time systems",
    description:
      "Socket.io and WebSockets with JWT rooms, membership auth, and a split between durable truth, volatile state, and async work.",
    items: ["Socket.io", "WebSockets", "Redis", "Kafka"],
  },
  {
    number: "05",
    title: "Cloud infrastructure",
    description:
      "Production on AWS EC2, object storage on S3, and Lambda for work that should never sit in the Node process.",
    items: ["AWS", "EC2", "S3", "Lambda", "Docker"],
  },
  {
    number: "06",
    title: "AI products",
    description:
      "LLM applications with provider abstraction, streaming, structured outputs, and persistence that does not care which model answered.",
    items: ["OpenRouter", "Streaming", "Zod", "Prisma"],
  },
];

export const stackGroups = [
  {
    label: "Backend",
    items: ["Node.js", "TypeScript", "NestJS", "Express", "REST", "JWT", "OAuth 2.0"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Redis", "MongoDB", "Prisma", "Sequelize"],
  },
  {
    label: "Distributed",
    items: ["Kafka", "Socket.io", "WebSockets", "Event streaming"],
  },
  {
    label: "Cloud",
    items: ["AWS EC2", "S3", "Lambda", "Docker", "PM2", "Linux"],
  },
  {
    label: "Full-stack",
    items: ["Next.js", "React", "TanStack Query", "Zustand", "Server Actions"],
  },
  {
    label: "AI",
    items: ["LLM APIs", "OpenRouter", "Streaming", "Prompting"],
  },
];

export type Project = {
  number: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  tech: string[];
  href?: string;
  extraLinks?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "IncidentLens",
    category: "AI · Observability · Distributed systems",
    status: "In development",
    summary:
      "Evidence-first incident correlation. OpenTelemetry traces land in Kafka, get related in real time, and an AI layer is only allowed to speak from structured evidence — then it drafts the post-mortem.",
    tech: ["NestJS", "Next.js", "PostgreSQL", "Kafka", "OpenTelemetry", "OpenRouter", "Zod"],
    featured: true,
  },
  {
    number: "02",
    name: "AI Workspace",
    category: "AI · Infrastructure · Streaming",
    status: "In development",
    summary:
      "Multi-model LLM platform with a provider-abstraction layer, so swapping models does not rewrite the product. Streaming responses, conversation persistence, and a TypeScript App Router stack.",
    tech: ["Next.js", "TypeScript", "OpenRouter", "PostgreSQL", "Prisma", "Redis"],
  },
  {
    number: "03",
    name: "Skysales",
    category: "Commerce · Payments · Real-time",
    status: "Production",
    summary:
      "Commerce backend with Socket.io inventory sync and Stripe payments and subscriptions driven by verified webhooks, not polling.",
    tech: ["Node.js", "Socket.io", "PostgreSQL", "MongoDB", "AWS", "Stripe"],
    href: "https://skysales.jp/app",
  },
  {
    number: "04",
    name: "MBN Torihiki",
    category: "CRM · Real-time · Operations",
    status: "Production",
    summary:
      "Electronic billing, CRM, and operations platform. Owned CRM and real-time chat as independent Node.js/React services sitting beside a Laravel core.",
    tech: ["Node.js", "React 19", "PostgreSQL", "WebSockets"],
    href: "https://mbn-torihiki.com",
    extraLinks: [
      { label: "Chat", href: "https://chat.mbn-torihiki.com" },
      { label: "CRM", href: "https://crm.mbn-torihiki.com" },
    ],
  },
  {
    number: "05",
    name: "Mizulino",
    category: "Commerce · Pricing · Cloud",
    status: "Production",
    summary:
      "Interior design platform: dynamic pricing under messy business rules, and an S3 + Lambda pipeline so asset processing does not live in the request path.",
    tech: ["Node.js", "PostgreSQL", "AWS S3", "Lambda"],
  },
];

export const traceNodes = [
  { id: "ingest", label: "OpenTelemetry", detail: "Trace ingestion" },
  { id: "bus", label: "Kafka", detail: "Event backbone" },
  { id: "corr", label: "Correlation", detail: "Related spans" },
  { id: "ev", label: "Evidence", detail: "Structured context" },
  { id: "ai", label: "AI reasoning", detail: "Grounded only" },
  { id: "out", label: "Post-mortem", detail: "Drafted report" },
];

export const traceEvents = [
  { t: "00.000", node: 0, line: "span.received        checkout-api  ·  payment.confirm" },
  { t: "00.014", node: 1, line: "kafka.produce        topic=otel.traces  partition=3" },
  { t: "00.041", node: 1, line: "consumer.ok          lag=0  retry=0" },
  { t: "00.088", node: 2, line: "correlate            14 spans  ·  3 services  ·  1 user" },
  { t: "00.127", node: 3, line: "evidence             redis eviction + pg lock wait" },
  { t: "00.348", node: 4, line: "reason               cache memory pressure, not Stripe" },
  { t: "00.512", node: 5, line: "report.drafted       post-mortem ready for review" },
];

export type ExperienceRole = {
  company: string;
  location: string;
  role: string;
  period: string;
  summary: string;
  tech: string[];
  chapters: { title: string; points: string[] }[];
};

export const experience: ExperienceRole[] = [
  {
    company: "Unibird",
    location: "Tokyo, Japan · Remote",
    role: "Backend Developer",
    period: "Dec 2020 — Feb 2026",
    summary:
      "Designed production backends spanning event-driven architecture, Stripe payments, real-time chat, PostgreSQL performance, and AWS — and reviewed the work of the people building next to me.",
    tech: [
      "Node.js",
      "TypeScript",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "Socket.io",
      "Stripe",
      "AWS",
      "React",
      "Next.js",
    ],
    chapters: [
      {
        title: "Architecture",
        points: [
          "Modular Node.js/TypeScript services with business logic, API, and infrastructure kept apart on purpose.",
          "Kafka workflows with consumer groups, retry topics, offset management, and dead-letter queues.",
          "REST APIs with request validation, centralized errors, retries, and idempotent handling.",
          "Graceful shutdown and connection cleanup for databases and live sockets.",
        ],
      },
      {
        title: "Payments",
        points: [
          "Stripe PaymentIntents, Checkout subscriptions, invoices, refunds, and webhook-driven state.",
          "Webhook signature verification, payment updates, and downstream Kafka publication.",
          "Application-level and Stripe idempotency so retries cannot double-charge or double-order.",
          "Inventory fulfillment only after payment confirmation — not before.",
          "Compensating workflows: order rollback and asynchronous refunds when inventory processing failed.",
          "Moved payment status off synchronous API checks onto asynchronous webhooks.",
        ],
      },
      {
        title: "Data",
        points: [
          "Relational models for users, catalog, orders, carts, payments, conversations, and messages.",
          "Removed N+1 patterns in conversation/message/unread queries.",
          "Used EXPLAIN ANALYZE to catch sequential scans and added the indexes the planner actually wanted.",
          "Redis with TTL and invalidation for hot paths: OTPs, rate limits, unread state, shared idempotency keys.",
        ],
      },
      {
        title: "Real-time",
        points: [
          "JWT-authenticated Socket.io with conversation rooms and membership authorization.",
          "PostgreSQL as source of truth, Redis for volatile unread state, Kafka for asynchronous work.",
          "Delivery, read receipts, and unread tracking that stay consistent across tabs.",
          "Fixed a Node memory leak from stale sockets accumulating when users switched conversations.",
        ],
      },
      {
        title: "Cloud & full-stack",
        points: [
          "Operated Node services on AWS EC2; S3 uploads via Multer; Lambda for CPU-heavy image work off the request path.",
          "Shipped end-to-end features in React and Next.js (App Router, server/client components, server actions).",
          "Mentored junior engineers and ran reviews for architecture, correctness, and maintainability.",
        ],
      },
    ],
  },
  {
    company: "Defactori",
    location: "Kathmandu, Nepal",
    role: "Backend Developer Intern",
    period: "Apr 2020 — Nov 2020",
    summary:
      "First production seat: modular NestJS services, auth, and the discipline of an Agile team.",
    tech: ["NestJS", "Node.js", "REST", "JWT", "OAuth 2.0"],
    chapters: [
      {
        title: "Foundations",
        points: [
          "Built modular NestJS/Node.js services following SOLID and REST conventions.",
          "Implemented JWT and OAuth 2.0 authentication and third-party integrations.",
          "Worked in sprint planning, stand-ups, debugging, and code review.",
        ],
      },
    ],
  },
];

export const research = {
  name: "Cardamom Leaf Classifier",
  href: "https://github.com/Ranjan659/Cardamom-leaf-classifier",
  status: "Phase 3 complete",
  kicker: "Computer vision · Field conditions",
  thesis:
    "Cardamom farmers need a filter that works on messy field photos, not lab-cropped leaves. This pipeline starts with a hard pre-filter — leaf vs not-leaf — trained on real negatives.",
  metrics: [
    { label: "Test accuracy", value: "96.25%", hint: "77 / 80 held-out" },
    { label: "ROC-AUC", value: "0.988", hint: "Near-perfect split" },
    { label: "F1", value: "0.963", hint: "P 0.951 · R 0.975" },
    { label: "Errors", value: "3 / 80", hint: "2 FP · 1 FN" },
  ],
  phases: [
    {
      phase: "01",
      title: "Baseline",
      n: 60,
      result: "100% train",
      note: "Memorized. Useful only as a warning.",
    },
    {
      phase: "02",
      title: "Validation",
      n: 260,
      result: "97.4% val",
      note: "Augmentation, stratified splits, early stop.",
    },
    {
      phase: "03",
      title: "Held-out test",
      n: 522,
      result: "96.25% test",
      note: "The number that counts. ROC-AUC 0.988.",
    },
  ],
  chart: [
    { phase: "Phase 1", images: 60, score: 100, split: "train" },
    { phase: "Phase 2", images: 260, score: 97.4, split: "val" },
    { phase: "Phase 3", images: 522, score: 96.25, split: "test" },
  ],
  matrix: { tp: 39, fn: 1, fp: 2, tn: 38 },
  next: ["Healthy vs diseased", "Grad-CAM", "Field deployment"],
};

export const aboutPoints = [
  {
    title: "Evidence before narrative",
    body: "EXPLAIN ANALYZE, traces, webhook logs. IncidentLens is the same habit turned into a product: the model does not get to improvise past the evidence layer.",
  },
  {
    title: "The failure path is the product",
    body: "Retries, dead-letter queues, Stripe idempotency, compensating refunds. Happy-path demos are cheap. Production is the rest of the graph.",
  },
  {
    title: "Truth has a place",
    body: "Postgres for what must survive a restart. Redis for what is allowed to vanish. Kafka for work that should not sit in a request.",
  },
];

export const terminalHelp = [
  "help          commands",
  "whoami        role",
  "now           current work",
  "stack         core tools",
  "work          selected projects",
  "research      cardamom cv",
  "experience    employers",
  "contact       email / phone",
  "open github   | linkedin | research",
  "resume        path to résumé",
  "clear         wipe the buffer",
];
