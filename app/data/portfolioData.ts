export const profile = {
  name: "Sakthi R",
  firstName: "Sakthi",
  lastName: "R",
  title: "Java Full Stack Developer",
  tagline: "Building enterprise-grade software with precision.",
  email: "sakthi.r@example.com",
  phone: "+91 98765 43210",
  location: "Chennai, Tamil Nadu, India",
  availability: "Open to opportunities",
  experience: "8+",
  github: "https://github.com/sakthir",
  linkedin: "https://linkedin.com/in/sakthir",
  twitter: "https://twitter.com/sakthir",
  website: "https://sakthir.dev",
  resumeUrl: "/resume-sakthi-r.pdf",
  avatar: "/avatar.jpg",
  bio: "Senior Java Full Stack Developer with 8+ years of experience architecting and delivering scalable, cloud-native enterprise applications. Specialized in microservices, Spring Boot, AWS cloud infrastructure, and modern React frontends. Passionate about clean code, system design, and developer experience.",
  shortBio: "8+ years crafting enterprise Java systems & cloud-native architectures.",
  roles: [
    "Java Full Stack Developer",
    "Cloud & DevOps Engineer",
    "Microservices Architect",
    "Spring Boot Expert",
    "AWS Solutions Builder",
    "React & Next.js Developer",
  ],
};

export const stats = [
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Enterprise Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

export const skills = {
  backend: [
    { name: "Java 17/21", level: 98, icon: "☕" },
    { name: "Spring Boot", level: 97, icon: "🍃" },
    { name: "Spring Cloud", level: 92, icon: "☁️" },
    { name: "Microservices", level: 95, icon: "🔧" },
    { name: "REST APIs", level: 98, icon: "🔗" },
    { name: "GraphQL", level: 82, icon: "⬡" },
    { name: "Hibernate / JPA", level: 93, icon: "🗄️" },
    { name: "Apache Kafka", level: 85, icon: "📨" },
    { name: "RabbitMQ", level: 80, icon: "🐇" },
    { name: "Redis", level: 84, icon: "⚡" },
  ],
  frontend: [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "Next.js", level: 88, icon: "▲" },
    { name: "TypeScript", level: 88, icon: "🔷" },
    { name: "Tailwind CSS", level: 92, icon: "🎨" },
    { name: "JavaScript ES6+", level: 90, icon: "🟨" },
    { name: "HTML5 / CSS3", level: 95, icon: "🌐" },
  ],
  cloud: [
    { name: "AWS (EC2, S3, RDS, Lambda)", level: 90, icon: "☁️" },
    { name: "Docker", level: 93, icon: "🐳" },
    { name: "Kubernetes", level: 87, icon: "⎈" },
    { name: "Terraform", level: 82, icon: "🏗️" },
    { name: "Jenkins", level: 88, icon: "⚙️" },
    { name: "GitHub Actions", level: 85, icon: "🔄" },
    { name: "Prometheus / Grafana", level: 80, icon: "📊" },
  ],
  databases: [
    { name: "PostgreSQL", level: 92, icon: "🐘" },
    { name: "MySQL", level: 90, icon: "🐬" },
    { name: "MongoDB", level: 83, icon: "🍃" },
    { name: "Oracle DB", level: 85, icon: "🔶" },
    { name: "Elasticsearch", level: 78, icon: "🔍" },
  ],
};

export const techIcons = [
  { name: "Java", icon: "☕", color: "#f89820" },
  { name: "Spring", icon: "🍃", color: "#6db33f" },
  { name: "AWS", icon: "☁️", color: "#ff9900" },
  { name: "Docker", icon: "🐳", color: "#2496ed" },
  { name: "K8s", icon: "⎈", color: "#326ce5" },
  { name: "React", icon: "⚛️", color: "#61dafb" },
  { name: "Next.js", icon: "▲", color: "#ffffff" },
  { name: "TypeScript", icon: "🔷", color: "#3178c6" },
  { name: "PostgreSQL", icon: "🐘", color: "#4169e1" },
  { name: "Terraform", icon: "🏗️", color: "#7b42bc" },
];

export const experiences = [
  {
    id: 1,
    role: "Senior Java Full Stack Developer",
    company: "TechCorp Solutions",
    location: "Chennai, India",
    type: "Full-time",
    period: "Jan 2022 – Present",
    duration: "3 years",
    description:
      "Leading a team of 8 engineers to design and deliver cloud-native microservices platform serving 2M+ daily active users. Architected event-driven system with Kafka reducing latency by 40%.",
    achievements: [
      "Architected microservices platform with 99.99% uptime SLA",
      "Reduced API response time by 65% through Redis caching & DB optimization",
      "Migrated monolith to 22 microservices — zero downtime deployment",
      "Led team of 8, conducted 200+ code reviews quarterly",
      "Implemented CI/CD pipeline reducing deployment time from 2hrs to 8 mins",
    ],
    tech: ["Java 21", "Spring Boot", "Kafka", "AWS", "Docker", "K8s", "React", "PostgreSQL"],
    color: "#6366f1",
  },
  {
    id: 2,
    role: "Java Full Stack Developer",
    company: "InnovateTech Pvt Ltd",
    location: "Bengaluru, India",
    type: "Full-time",
    period: "Jun 2019 – Dec 2021",
    duration: "2.5 years",
    description:
      "Developed and maintained enterprise banking application serving 500K+ users. Built real-time transaction processing engine and integrated 10+ third-party payment gateways.",
    achievements: [
      "Built real-time payment processing with 99.9% reliability",
      "Developed React dashboards improving user engagement by 35%",
      "Implemented OAuth 2.0 / JWT authentication for 500K+ users",
      "Optimized SQL queries resulting in 50% faster report generation",
    ],
    tech: ["Java 11", "Spring MVC", "React", "Oracle DB", "RabbitMQ", "Docker", "Jenkins"],
    color: "#8b5cf6",
  },
  {
    id: 3,
    role: "Java Backend Developer",
    company: "Digital Dynamics",
    location: "Hyderabad, India",
    type: "Full-time",
    period: "Aug 2017 – May 2019",
    duration: "1.9 years",
    description:
      "Developed RESTful APIs and backend services for an e-commerce platform handling 10K+ daily orders. Contributed to transition from monolith to service-oriented architecture.",
    achievements: [
      "Built 30+ RESTful APIs consumed by mobile and web apps",
      "Improved application performance by 45% through query optimization",
      "Implemented caching layer reducing DB load by 60%",
      "Mentored 3 junior developers",
    ],
    tech: ["Java 8", "Spring Boot", "MySQL", "Redis", "Hibernate", "Maven"],
    color: "#06b6d4",
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  category: string;
  featured?: boolean;
  metrics: Record<string, string>;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CloudBank Microservices Platform",
    description:
      "Enterprise-grade banking microservices platform with 22 services, event-driven architecture, real-time fraud detection, and multi-region AWS deployment serving 2M+ users.",
    longDescription:
      "A complete cloud-native banking platform built from the ground up using microservices architecture. Features include real-time transaction processing, AI-powered fraud detection, multi-currency support, and a modern React dashboard.",
    image: "/projects/cloudbank.jpg",
    tech: ["Java 21", "Spring Cloud", "Kafka", "AWS EKS", "Docker", "React", "PostgreSQL", "Redis"],
    github: "https://github.com/sakthir/cloudbank",
    live: "https://cloudbank-demo.sakthir.dev",
    category: "Enterprise",
    featured: true,
    metrics: { users: "2M+", uptime: "99.99%", services: "22" },
    color: "#6366f1",
  },
  {
    id: 2,
    title: "DevOps Automation Suite",
    description:
      "End-to-end CI/CD platform with Kubernetes orchestration, Terraform IaC, auto-scaling, and real-time monitoring dashboards. Reduced deployment time by 85%.",
    longDescription:
      "A comprehensive DevOps automation toolkit that integrates Jenkins, Kubernetes, Terraform, and Prometheus to create a fully automated software delivery pipeline.",
    image: "/projects/devops.jpg",
    tech: ["Kubernetes", "Terraform", "Jenkins", "Docker", "Prometheus", "Grafana", "AWS", "Helm"],
    github: "https://github.com/sakthir/devops-suite",
    live: "https://devops.sakthir.dev",
    category: "DevOps",
    featured: true,
    metrics: { deployTime: "-85%", coverage: "100%", clusters: "12" },
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "E-Commerce Microservices",
    description:
      "Scalable e-commerce backend with product catalog, inventory management, order processing, payment integration, and real-time notifications handling 50K orders/day.",
    longDescription:
      "A full-featured e-commerce microservices backend with event-driven order processing, Stripe payment integration, Elasticsearch product search, and React storefront.",
    image: "/projects/ecommerce.jpg",
    tech: ["Java", "Spring Boot", "React", "MySQL", "RabbitMQ", "Elasticsearch", "Docker", "Stripe"],
    github: "https://github.com/sakthir/ecommerce-ms",
    live: "https://shop.sakthir.dev",
    category: "Full Stack",
    featured: true,
    metrics: { orders: "50K/day", uptime: "99.9%", apis: "45+" },
    color: "#06b6d4",
  },
  {
    id: 4,
    title: "Real-Time Chat System",
    description:
      "WebSocket-powered chat application with rooms, direct messages, file sharing, and message encryption. Built with Spring WebSocket and React.",
    image: "/projects/chat.jpg",
    tech: ["Spring WebSocket", "React", "Redis Pub/Sub", "MongoDB", "JWT", "Docker"],
    github: "https://github.com/sakthir/realtime-chat",
    live: "https://chat.sakthir.dev",
    category: "Full Stack",
    featured: false,
    metrics: { messages: "1M+", latency: "<50ms", rooms: "10K+" },
    color: "#f59e0b",
  },
  {
    id: 5,
    title: "API Gateway & Auth Service",
    description:
      "Centralized API gateway with JWT/OAuth2 authentication, rate limiting, request routing, and comprehensive monitoring for microservices.",
    image: "/projects/gateway.jpg",
    tech: ["Spring Cloud Gateway", "Keycloak", "Redis", "Prometheus", "Docker", "Kubernetes"],
    github: "https://github.com/sakthir/api-gateway",
    live: "https://gateway.sakthir.dev",
    category: "Backend",
    featured: false,
    metrics: { rps: "100K+", latency: "<5ms", services: "22" },
    color: "#10b981",
  },
  {
    id: 6,
    title: "Admin Analytics Dashboard",
    description:
      "Next.js analytics dashboard with real-time charts, data visualization, export functionality, and dark/light theme.",
    image: "/projects/dashboard.jpg",
    tech: ["Next.js", "TypeScript", "Recharts", "Tailwind", "React Query", "Framer Motion"],
    github: "https://github.com/sakthir/analytics-dashboard",
    live: "https://analytics.sakthir.dev",
    category: "Frontend",
    featured: false,
    metrics: { widgets: "50+", speed: "98 Lighthouse", themes: "2" },
    color: "#ec4899",
  },
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    expires: "2026",
    credentialId: "AWS-SAP-2023-XXXXX",
    icon: "☁️",
    color: "#ff9900",
    verified: true,
  },
  {
    id: 2,
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "2022",
    expires: "2025",
    credentialId: "AWS-DVA-2022-XXXXX",
    icon: "⚙️",
    color: "#ff9900",
    verified: true,
  },
  {
    id: 3,
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    expires: "2025",
    credentialId: "CKA-2022-XXXXX",
    icon: "⎈",
    color: "#326ce5",
    verified: true,
  },
  {
    id: 4,
    name: "Spring Professional Certification",
    issuer: "VMware / Broadcom",
    date: "2021",
    expires: "N/A",
    credentialId: "SPRING-2021-XXXXX",
    icon: "🍃",
    color: "#6db33f",
    verified: true,
  },
  {
    id: 5,
    name: "Oracle Certified Professional: Java SE 11",
    issuer: "Oracle Corporation",
    date: "2020",
    expires: "N/A",
    credentialId: "OCP-JAVA11-XXXXX",
    icon: "☕",
    color: "#f89820",
    verified: true,
  },
  {
    id: 6,
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "2023",
    expires: "2026",
    credentialId: "TERRAFORM-2023-XXXXX",
    icon: "🏗️",
    color: "#7b42bc",
    verified: true,
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering – Computer Science",
    institution: "Anna University",
    location: "Chennai, Tamil Nadu",
    period: "2013 – 2017",
    grade: "8.7 CGPA",
    icon: "🎓",
    description:
      "Specialized in software engineering, data structures, algorithms, and distributed systems. Final year project on 'Distributed Load Balancer using Consistent Hashing'.",
    achievements: ["University Rank Holder – Top 5%", "Best Final Year Project Award"],
  },
];

export const navLinks = [
  { label: "Home",           href: "#hero" },
  { label: "About",          href: "#about" },
  { label: "Skills",         href: "#skills" },
  { label: "Experience",     href: "#experience" },
  { label: "Projects",       href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact",        href: "#contact" },
];
