export const siteConfig = {
  name: "Bartosz Korec",
  title: "Software Engineer | CyberSec Enthusiast",
  description: "Portfolio website of Bartosz Korec",
  accentColor: "#3b82f6",
  social: {
    email: "bartoszkorec@gmail.com",
    linkedin: "https://linkedin.com/in/bartoszkorec",
    github: "https://github.com/bartosz-korec",
  },
  aboutMe:
    "Software Engineer transitioning into Cybersecurity, currently pursuing a Master's degree in Enterprise Cybersecurity. Experienced in Java, Spring Boot, and algorithmic optimization. Moving my focus toward identity management and application security, aiming to combine deep software engineering fundamentals with robust security practices to solve complex challenges.",
  skills: [
    "Java",
    "Spring Boot",
    "Application Security",
    "OAuth2 / JWT",
    "REST Assured",
    "Docker",
    "Git / GitLab",
    "Linux Ecosystem",
    "Self-hosting",
  ],
  projects: [
    {
      name: "Intelligent Warehouse Management System",
      description:
        "Full-stack system (Java 21, Spring Boot 3, Angular, PostgreSQL) built as a BSc Thesis. Implemented and benchmarked four algorithms to solve the Traveling Salesman Problem (TSP) for employee route optimization (Held-Karp, 2-opt, Google OR-Tools). Secured the application using robust JWT authentication flows.",
      link: "https://github.com/bartosz-korec/warehouse-management",
      skills: [
        "Java 21",
        "Spring Boot 3",
        "PostgreSQL",
        "Google OR-Tools",
        "JWT",
      ],
    },
    {
      name: "Banking Swift Service",
      description:
        "Spring Boot REST API designed for managing and retrieving bank records with a PostgreSQL database. Implemented core CRUD functionalities, country-based record filtering, and containerized the application using Docker.",
      link: "https://github.com/bartosz-korec/banking-swift-api",
      skills: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Unit Testing"],
    },
  ],
  experience: [
    {
      company: "Comarch",
      title: "Junior Test Automation Engineer",
      dateRange: "Oct 2025 - Present",
      bullets: [
        "Automating API integration tests for Comarch Loyalty Management using Java Spring and Rest Assured.",
        "Verifying backend authentication and authorization flows using OAuth2 and JWT standards.",
        "Maintaining automated end-to-end and integration test suites for enterprise software.",
      ],
    },
    {
      company: "Comarch",
      title: "Software Developer Intern",
      dateRange: "Jul 2025 - Sep 2025",
      bullets: [
        "Developed a loyalty system prototype for calculating user points and tiers within a Agile team.",
        "Implemented secure REST API endpoints and dynamic Angular components.",
        "Containerized the application with Docker and managed source code deployment on GitLab via peer reviews.",
      ],
    },
    {
      company: "Brown Brothers Harriman",
      title: "Software Developer Intern",
      dateRange: "May 2025 - Jun 2025",
      bullets: [
        "Developed and maintained corporate Java-based applications applying development best practices.",
        "Verified system features, conducted integration testing, and managed version control workflows.",
        "Prepared technical project documentation and actively participated in daily Scrum progress reporting.",
      ],
    },
  ],
  education: [
    {
      school: "DSW Ideis University Cracow (formerly WSEI)",
      degree: "Master of Science in Applied Computer Science",
      dateRange: "2026 - Present",
      achievements: [
        "Specialization: Enterprise Cybersecurity",
        "Focus on system hardening, threat modeling, and defensive architecture.",
      ],
    },
    {
      school: "Cracow University of Technology",
      degree: "Bachelor of Science in Applied Computer Science",
      dateRange: "2022 - 2026",
      achievements: [
        "Thesis: Intelligent Warehouse Management System with route optimization.",
        "Deep focus on data structures, graph theory, and database systems orchestration.",
      ],
    },
  ],
};
