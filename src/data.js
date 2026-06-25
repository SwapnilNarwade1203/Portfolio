// All content sourced from Swapnil Narwade's resumes (Data Analyst track + Developer/DevOps track)

export const PROFILE = {
  name: "Swapnil Narwade",
  location: "Pune, Maharashtra",
  email: "swapnilnarwade12@gmail.com",
  phone: "+91 8007584863",
  github: "https://github.com/SwapnilNarwade1203",
  linkedin: "https://linkedin.com/in/swapnilnarwade1203",
  resumeAnalyst: "/SwapnilNarwade_DataAnalysis.pdf",
  resumeDeveloper: "/SwapnilNarwade_Resume.pdf",
};

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Pimpri Chinchwad College of Engineering, Pune",
    meta: "Currently Pursuing · SEM-I SGPA 8.2",
    year: "2024 — Present",
  },
  {
    degree: "Bachelor of Business Administration (Computer Applications)",
    school: "Ness Wadia College of Commerce, Pune",
    meta: "CGPA 8.86",
    year: "2022 — 2025",
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    school: "Vidya Pratishthan College, Baramati",
    meta: "75.60%",
    year: "2020",
  },
  {
    degree: "Secondary School Certificate (10th)",
    school: "Ravindera High School, Bhoom, Maharashtra",
    meta: "88.60%",
    year: "2018",
  },
];

export const CERTS = [
  { label: "98.92 Percentile", detail: "MAHA MCA CET 2025" },
  { label: "SQL 50", detail: "LeetCode Badge" },
  { label: "Bluepineapple Campus Connect", detail: "2026" },
  { label: "Python (Basic)", detail: "HackerRank Certification" },
  { label: "GenAI Powered Data Analytics", detail: "Job Simulation" },
  { label: "Power BI Workshop", detail: "Office Master" },
];

export const TRACKS = {
  analyst: {
    key: "analyst",
    label: "Data Analyst",
    target: "analyst.build",
    tagline: "Aspiring Data Analyst",
    summary:
      "MCA student with hands-on experience in Python, SQL, Power BI, Excel, and data analytics. Skilled in data cleaning, exploratory data analysis, statistical analysis, dashboarding, and customer segmentation through end-to-end analytics projects. Seeking a Data Analyst role to apply analytical and problem-solving skills in business decision-making.",
    skillGroups: [
      {
        group: "Programming & Querying",
        skills: ["Python", "SQL"],
      },
      {
        group: "Data Analysis Libraries",
        skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      },
      {
        group: "Visualization Tools",
        skills: ["Power BI", "Advanced Excel"],
      },
      {
        group: "Database",
        skills: ["MySQL", "PostgreSQL"],
      },
      {
        group: "Analytics Concepts",
        skills: [
          "Data Cleaning",
          "EDA",
          "Dashboarding",
          "Statistical Analysis",
          "Hypothesis Testing",
          "RFM Segmentation",
        ],
      },
    ],
    projects: [
      {
        title: "E-Commerce Sales & Customer Analytics Dashboard",
        stack: ["Python", "SQL", "Power BI"],
        points: [
          "Cleaned and transformed a retail sales dataset — handled duplicates, missing values, datatype corrections, and feature engineering.",
          "Performed exploratory data analysis to uncover sales trends, top-performing products, and regional performance.",
          "Applied RFM segmentation to classify customers into loyal, high-value, and at-risk segments.",
          "Ran correlation analysis and ANOVA hypothesis testing for business insight generation.",
          "Built an interactive Power BI dashboard for KPI tracking, sales trends, customer segmentation, and shipping performance.",
        ],
      },
      {
        title: "Real-Time Sales Analytics Pipeline",
        stack: ["SQL", "Python", "Power BI"],
        points: [
          "Designed an automated sales data workflow integrating SQL extraction, Python preprocessing, and dashboard reporting.",
          "Processed transactional sales data for KPI monitoring and trend analysis.",
          "Developed Power BI dashboards for sales performance and operational metrics.",
        ],
      },
      {
        title: "Healthcare Data Analysis Dashboard",
        stack: ["Power BI"],
        points: [
          "Analyzed healthcare operational datasets to identify trends and performance indicators.",
          "Performed data cleaning and transformation for dashboard-ready data.",
          "Designed interactive dashboards with KPI cards, slicers, and drill-down reporting.",
        ],
      },
    ],
  },

  developer: {
    key: "developer",
    label: "Python / DevOps Engineer",
    target: "developer.build",
    tagline: "Aspiring Python Developer & DevOps Engineer",
    summary:
      "Detail-oriented MCA student with strong expertise in Python, Django, SQL, and modern DevOps practices including Docker, Git, GitHub Actions, and cloud deployment on Render. Experienced in building and deploying scalable full-stack web applications and data-driven dashboards. Passionate about automating workflows, containerizing applications, and applying CI/CD best practices.",
    skillGroups: [
      {
        group: "Programming Languages",
        skills: ["Python", "SQL", "JavaScript", "Core Java"],
      },
      {
        group: "Web Frameworks",
        skills: ["Django (REST APIs, ORM, Auth, RBAC)"],
      },
      {
        group: "DevOps & Tools",
        skills: [
          "Docker",
          "Docker Compose",
          "Git",
          "GitHub Actions (CI/CD)",
          "Render",
          "Linux",
        ],
      },
      {
        group: "Databases",
        skills: ["MySQL", "PostgreSQL", "SQLite"],
      },
      {
        group: "Data & Analytics",
        skills: ["Power BI", "Advanced Excel", "Pandas", "EDA"],
      },
      {
        group: "Concepts",
        skills: [
          "REST APIs",
          "Containerization",
          "CI/CD Pipelines",
          "MVC Architecture",
          "Database Design",
        ],
      },
    ],
    projects: [
      {
        title: "Dockerized Django App Deployment with CI/CD",
        link: "https://github.com/SwapnilNarwade1203/django-docker-cicd2026",
        stack: ["Python", "Django", "Docker", "Docker Compose", "GitHub Actions", "Render"],
        points: [
          "Containerized a Django web application using Docker and Docker Compose for consistent environments across dev and production.",
          "Built a CI/CD pipeline with GitHub Actions to run tests, build Docker images, and deploy to Render on every push to main.",
          "Configured environment variables, static file handling, and PostgreSQL integration within containers.",
          "Reduced deployment time by 60% through automated workflows, eliminating manual deployment errors.",
          "Monitored deployment health via Render's dashboard and implemented rollback strategies for failed builds.",
        ],
      },
      {
        title: "AI Resume Analyzer & Skill Gap Analyzer",
        link: "https://github.com/SwapnilNarwade1203/ai-resume-analyzer",
        stack: ["Python", "Django", "NLP", "SQLite", "Docker", "Render"],
        points: [
          "Built a full-stack Django app that analyzes resumes using NLP to extract skills and match candidates against job roles.",
          "Implemented a scoring algorithm to evaluate candidate readiness and generate personalized skill-gap recommendations.",
          "Containerized the app with Docker and deployed to Render via an automated Git-based pipeline.",
          "Visualized insights through interactive dashboards built with Chart.js.",
        ],
      },
      {
        title: "Placement Cell Management System",
        link: "https://github.com/SwapnilNarwade1203/placement-cell-website",
        stack: ["HTML", "CSS", "JavaScript", "Django", "MySQL", "Docker"],
        points: [
          "Built a full-stack placement portal with secure authentication and role-based access control (Student, Admin, Recruiter).",
          "Developed RESTful backend APIs and optimized MySQL models to manage student records and job postings.",
          "Containerized the application with Docker; maintained version control via branching strategies and PR reviews.",
          "Deployed to Render with environment-based configuration for production readiness.",
        ],
      },
      {
        title: "Real-Time Sales Analytics Pipeline",
        link: "https://github.com/SwapnilNarwade1203/sales-analytics-pipeline",
        stack: ["SQL", "Python (Pandas)", "Power BI"],
        points: [
          "Designed an end-to-end pipeline to collect, clean, and transform sales data from multiple CSV sources.",
          "Built interactive Power BI dashboards to visualize KPIs, revenue trends, and regional performance.",
          "Automated preprocessing scripts with Pandas, scheduled via cron, version-controlled on GitHub.",
        ],
      },
    ],
  },
};
