import caffee from "./assets/caffee.png";
import clearlink from "./assets/clearlink.png";
import dukatrack from "./assets/dukatrack.png";
import greenbin from "./assets/greenbin.png";
import nawiricms from "./assets/nawiricms.png";
import quotes from "./assets/quote.png";
import stayvacation from "./assets/stayvacation.png";
import streamweb from "./assets/streamweb.png";
import eazyhunt from "./assets/eazyhunt.png";
import handylink from "./assets/handylink.png"
import moneyplus from "./assets/moneyplus.png";
import betterepl from "./assets/better_repl.png";
import wisetech from "./assets/wisetech.png";

const COMPLETION_STATUS = {
  COMPLETED: "completed",
  MAINTAINANCE:"undergoing maintainance",
  PENDING: "in progress",
  STARTED:"recently started"
};

export const projects = [
  {
    id: "stay-vacation",
    title: "Stay Vacation",
    url: "https://stay-vacation.vercel.app/",
    img: stayvacation,
    description:
      "A full-stack MERN vacation rental platform with M-Pesa integration, enabling seamless booking and mobile payments.",
    features: [
      "Mobile money payments via M-Pesa (Daraja API)",
      "JWT-based authentication with encrypted passwords",
      "Property search by price, location, and features",
      "Booking history with reservation management",
      "Mobile-first responsive design",
      "Admin dashboard to manage listings and users",
    ],
    techStack: {
      frontend: [
        "React",
        "React Router",
        "Context API",
        "Axios",
        "Tailwind CSS",
      ],
      backend: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Bcrypt",
        "M-Pesa API",
      ],
      tools: ["git", "GitHub", "Postman", "Render", "Vercel"],
    },
    demo: "https://stay-vacation.vercel.app/",
    repo: "https://github.com/kevohm/stay_vacation",
    challenges: [
      {
        challenge:
          "Limited sandbox capabilities and delayed API callbacks from Safaricom.",
        solution:
          "Implemented fallback states and error handling to ensure smooth payments.",
      },
      {
        challenge: "Maintaining booking consistency in real-time.",
        solution:
          "Used database transactions and atomic updates with Mongoose.",
      },
    ],
  },
  // {
  //   id: "nawiri-cms",
  //   title: "Nawiri CMS",
  //   url: "https://nawiricms.co.ke/",
  //   img: nawiricms,
  //   description:
  //     "A credit management platform for finance companies to manage loans, clients, and repayments.",
  //   features: [
  //     "Client onboarding and loan registration",
  //     "Repayment tracking with history",
  //     "Loan approval workflows",
  //     "Financial dashboard for performance insights",
  //   ],
  //   techStack: {
  //     frontend: ["React", "Redux", "Tailwind CSS", "Axios", "Material UI"],
  //     backend: ["Node.js", "Express", "Prisma", "MySQL"],
  //     tools: ["git", "GitHub", "Firebase", "Postman", "Figma", "Linode", "PM2"],
  //   },
  //   demo: "https://nawiricms.co.ke/",
  //   repo: "https://github.com/kevohm/M-Loan",
  //   challenges: [
  //     {
  //       challenge: "Complex loan calculations and payment schedules.",
  //       solution: "Created tested financial utilities with Jest.",
  //     },
  //     {
  //       challenge: "Scalable dashboard with large data sets.",
  //       solution: "Integrated pagination and server-side filtering.",
  //     },
  //   ],
  // },
  // {
  //   id: "clear-link",
  //   title: "Clear Link",
  //   url: "https://clearlink-iota.vercel.app/",
  //   img: clearlink,
  //   description:
  //     "A frontend video conferencing UI prototype demonstrating scheduling and responsive design.",
  //   features: [
  //     "Video call scheduling UI",
  //     "Responsive and clean interface",
  //     "Basic pricing page layout",
  //     "Performance and accessibility optimized",
  //   ],
  //   techStack: {
  //     frontend: ["React", "Tailwind CSS"],
  //     backend: [],
  //     tools: ["git", "GitHub", "Vercel"],
  //   },
  //   demo: "https://clearlink-iota.vercel.app/",
  //   repo: "https://github.com/kevohm/clearlink",
  //   challenges: [
  //     {
  //       challenge: "Initial instability with real-time design assumptions.",
  //       solution:
  //         "Focused on UI only and left Socket.IO logic for future backend integration.",
  //     },
  //     {
  //       challenge: "Improving perceived performance.",
  //       solution: "Added optimized images and layout animations.",
  //     },
  //   ],
  // },
  // {
  //   id: "quotes",
  //   title: "Quotes",
  //   url: "https://quotes-kevohm.vercel.app/",
  //   img: quotes,
  //   description:
  //     "A quote discovery platform for fans of Kenyan film and TV content.",
  //   features: [
  //     "Browse and search famous quotes",
  //     "Categorized by movie and genre",
  //     "Clean and simple UI",
  //     "Mobile-first responsive layout",
  //   ],
  //   techStack: {
  //     frontend: ["React", "Tailwind CSS"],
  //     backend: ["External API"],
  //     tools: ["git", "GitHub", "Vercel"],
  //   },
  //   demo: "https://quotes-kevohm.vercel.app/",
  //   repo: "https://github.com/kevohm/quotes",
  //   challenges: [
  //     {
  //       challenge: "Organizing quote data using MongoDB.",
  //       solution: "Used document references and aggregation queries.",
  //     },
  //     {
  //       challenge: "Search experience was laggy and inaccurate.",
  //       solution: "Added debounced search and basic fuzzy matching.",
  //     },
  //   ],
  // },
  // {
  //   id: "duka-track",
  //   title: "Duka Track",
  //   url: "https://liquourlogic.co.ke/",
  //   img: dukatrack,
  //   description:
  //     "A POS system for real-time inventory, payments, and analytics for retail stores.",
  //   features: [
  //     "Inventory tracking and stock alerts",
  //     "Payment recording with financial reports",
  //     "Live sales analytics dashboard",
  //     "Intuitive, responsive UI",
  //   ],
  //   techStack: {
  //     frontend: ["React", "React Query", "Tailwind CSS", "Axios", "Material UI"],
  //     backend: ["Node.js", "Express", "Prisma", "MySQL"],
  //     tools: ["git", "GitHub", "Firebase", "Postman", "Figma", "Linode", "PM2"],
  //   },
  //   demo: "https://liquourlogic.co.ke/",
  //   repo: "https://github.com/kevohm/local-pos",
  //   challenges: [
  //     {
  //       challenge: "Inventory conflicts from multiple concurrent users.",
  //       solution: "Implemented optimistic UI and backend validation.",
  //     },
  //     {
  //       challenge: "Simplifying data visualizations for non-tech users.",
  //       solution: "Used Chart.js with labeled filters and toggles.",
  //     },
  //   ],
  // },
  // {
  //   id: "caffee",
  //   title: "Caffee",
  //   url: "https://caffee-beta.vercel.app/",
  //   img: caffee,
  //   description:
  //     "A modern landing page for a coffee shop, showcasing menu, location, and contact features.",
  //   features: [
  //     "Responsive design for all screen sizes",
  //     "Visual menu with images and descriptions",
  //     "Location map integration",
  //     "Contact form with inquiry routing",
  //   ],
  //   techStack: {
  //     frontend: ["React", "Tailwind CSS", "website"],
  //     backend: [],
  //     tools: ["git", "GitHub", "Vercel", "Figma"],
  //   },
  //   demo: "https://caffee-beta.vercel.app/",
  //   repo: "https://github.com/kevohm/caffee",
  //   challenges: [
  //     {
  //       challenge: "Ensuring pixel-perfect design match.",
  //       solution: "Implemented based on Figma specs with Tailwind utilities.",
  //     },
  //     {
  //       challenge: "Cross-device responsiveness.",
  //       solution:
  //         "Tested across breakpoints using utility-first layout structure.",
  //     },
  //   ],
  // },
  // {
  //   id: "greenbin",
  //   title: "GreenBin Foundation",
  //   url: "https://greenbin-jade.vercel.app/",
  //   img: greenbin,
  //   description:
  //     "A non-profit platform promoting environmental awareness and sustainability initiatives.",
  //   features: [
  //     "Mission and education sections",
  //     "Join and support program calls to action",
  //     "Research and innovation highlights",
  //     "Accessible and mobile-first design",
  //     "Donation and volunteer contact options",
  //   ],
  //   techStack: {
  //     frontend: ["React", "Tailwind CSS"],
  //     backend: [],
  //     tools: ["git", "GitHub", "Vercel", "Figma"],
  //   },
  //   demo: "https://greenbin-jade.vercel.app/",
  //   repo: "https://github.com/kevohm/greenbin",
  //   challenges: [
  //     {
  //       challenge: "Conveying the non-profit's message clearly.",
  //       solution: "Used structured layout and hierarchy with Figma planning.",
  //     },
  //     {
  //       challenge: "Ensuring inclusivity and responsiveness.",
  //       solution: "Applied ARIA roles and tested mobile-first accessibility.",
  //     },
  //   ],
  // },
  {
    id: "streamweb",
    title: "StreamWeb",
    url: "https://streamweb.vercel.app/",
    img: streamweb,
    status: COMPLETION_STATUS.MAINTAINANCE,
    description:
      "A Netflix-style movie streaming platform using Angular and NestJS with TMDB, IMDb, and YouTube integration.",
    features: [
      "Angular UI with responsive Netflix layout",
      "TMDB for movie/TV metadata",
      "YouTube trailers embedded",
      "IMDb ratings and summaries",
      "Search by title, genre, or rating",
      "Modal previews and trailer playback",
    ],
    techStack: {
      frontend: ["Angular", "RxJS", "Tailwind CSS"],
      backend: ["NestJS", "Node.js", "Express"],
      tools: [
        "git",
        "GitHub",
        "Vercel",
        "TMDB API",
        "YouTube Data API",
        "IMDb API",
        "Postman",
      ],
    },
    repo: "https://github.com/kevohm/streamweb",
    demo: "https://streamweb.vercel.app/",
    challenges: [
      {
        challenge: "Managing inconsistent data across third-party APIs.",
        solution: "Normalized responses with a NestJS service layer.",
      },
      {
        challenge: "Replicating Netflix’s interactive UI.",
        solution: "Used Angular animations and modular Tailwind components.",
      },
      {
        challenge: "API quota limits and missing data.",
        solution: "Cached API responses and handled fallback scenarios.",
      },
    ],
  },
  {
    id: "eazyhunt",
    title: "EazyHunt",
    url: "https://eazyhunt.co.ke",
    img: eazyhunt,
    status: COMPLETION_STATUS.MAINTAINANCE,
    description:
      "A real estate management platform that connects property owners, managers, and tenants with advanced analytics and booking tools.",
    features: [
      "Apartment and room listings with media galleries",
      "Real-time booking and tenant management",
      "Automated payment tracking and reporting",
      "Role-based dashboards for admins, agents, and users",
    ],
    techStack: {
      frontend: ["React", "Remix", "Tailwind CSS", "Zod", "React Query"],
      backend: ["Node.js", "Express", "Prisma", "MySQL"],
      tools: ["GitHub", "Digital Ocean", "Postman", "Figma", "Vercel", "PM2"],
    },
    demo: "https://eazyhunt.co.ke/",
    repo: "https://github.com/kevohm/eazy-hub ", // update if repo name differs
    challenges: [
      {
        challenge:
          "Maintaining form validation and data consistency across multi-step onboarding.",
        solution:
          "Used Zod for schema validation and the Context API for shared state management.",
      },
      {
        challenge: "Handling image uploads, optimization, and secure delivery.",
        solution:
          "Developed an Nginx-based CDN to handle caching and optimize image delivery based on client requirements.",
      },
      {
        challenge: "Reducing page load times.",
        solution:
          "Utilized Cloudinary as a CDN for site images and implemented responsive image transformations based on screen size.",
      },
      {
        challenge:
          "Enhancing user experience for property managers and tenants.",
        solution:
          "Built dynamic dashboards with real-time analytics, booking insights, and responsive layouts for seamless navigation.",
      },
    ],
  },
  {
    id: "betterepl",
    title: "BetterRepl",
    url: "https://betterepl.kibet.top",
    img: betterepl,
    status: COMPLETION_STATUS.MAINTAINANCE,
    description:
      "A secure, interactive MySQL playground that allows developers to write, execute, and analyze SQL queries in real time with built-in validation, error handling, and performance metrics.",
    features: [
      "Interactive SQL editor with syntax highlighting and auto-completion",
      "Real-time query execution with instant results and feedback",
      "Comprehensive SQL validation and structured error handling",
      "Query execution timeout controls to prevent long-running operations",
      "Support for parameterized queries to improve security",
      "Execution metrics including runtime, rows affected, and query statistics",
      "Web and CLI-based REPL interfaces",
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MySQL"],
      tools: ["GitHub", "Docker", "Nginx", "DigitalOcean", "Postman", "PM2"],
    },
    demo: "https://betterepl.kibet.top",
    repo: "https://github.com/kevohm/betterepl", // update if repo differs
    challenges: [
      {
        challenge:
          "Safely executing arbitrary SQL queries while preventing malicious or long-running operations.",
        solution:
          "Implemented query validation, execution timeouts, and parameterized queries to control execution and enhance security.",
      },
      {
        challenge:
          "Providing real-time feedback without blocking the server during heavy query execution.",
        solution:
          "Used asynchronous execution and controlled connection pooling to ensure responsiveness under load.",
      },
      {
        challenge:
          "Delivering a developer-friendly SQL editing experience in the browser.",
        solution:
          "Integrated Monaco Editor with syntax highlighting, auto-completion, and inline error feedback.",
      },
      {
        challenge: "Exposing meaningful performance insights to users.",
        solution:
          "Captured execution metrics such as runtime, rows affected, and query statistics and displayed them in real time.",
      },
    ],
  },

  {
    id: "handylink",
    title: "Handylink",
    url: "https://handylink.kibet.top/",
    img: handylink, // replace with your imported logo/image
    status: COMPLETION_STATUS.PENDING,
    description:
      "A platform that connects clients with trusted cleaning taskers for quick tidy-ups or deep cleaning services, with real-time task management and service recommendations.",
    features: [
      "Instant service request matching to skilled Taskers",
      "Tasker profiles with skills, pricing, and ratings",
      "Direct communication and booking with Taskers",
      "Streamlined workflow for both clients and Taskers",
    ],
    techStack: {
      frontend: ["React", "Next.js", "Tailwind CSS", "React Query", "Zod"],
      backend: ["Node.js", "Express", "Prisma", "MongoDB"],
      tools: ["GitHub", "Vercel", "Postman", "Figma", "PM2"],
    },
    demo: "https://handylink.kibet.top/",
    repo: "https://github.com/kevohm/handylink", // update if repo name differs
    challenges: [
      {
        challenge:
          "Ensuring smooth tasker-client matching and instant service suggestions.",
        solution:
          "Implemented a dynamic recommendation engine that analyzes user input and suggests the best-matched Taskers in real-time.",
      },
      {
        challenge:
          "Displaying detailed Tasker profiles with ratings, skills, and pricing efficiently.",
        solution:
          "Built reusable profile components with optimized queries and caching via React Query to ensure fast and accurate data retrieval.",
      },
      {
        challenge:
          "Maintaining secure and seamless booking and communication between clients and Taskers.",
        solution:
          "Implemented role-based dashboards and secure APIs for messaging, booking management, and task updates.",
      },
      {
        challenge: "Providing a responsive and intuitive UI for all users.",
        solution:
          "Used Tailwind CSS and responsive layouts to deliver a mobile-first, seamless experience across devices.",
      },
    ],
  },

  {
    id: "moneyplus",
    title: "MonyTrack+",
    url: "https://moneyplus.kibet.top/",
    img: moneyplus, // replace with your imported logo/image
    status: COMPLETION_STATUS.MAINTAINANCE,
    description:
      "A simple and private personal finance tracker that lets users record income, expenses, and savings without handling real money, providing insightful analytics and financial clarity.",
    features: [
      "Manual tracking of income, expenses, and savings",
      "Clear charts and reports for spending and earnings trends",
      "Private and secure – data stays with the user",
      "User-friendly dashboard with insights for smarter financial decisions",
    ],
    techStack: {
      frontend: ["React", "Next.js", "Tailwind CSS", "React Query", "Zod"],
      backend: ["Node.js", "Express", "Prisma", "MongoDB"],
      tools: ["GitHub", "Vercel", "Postman", "Figma", "PM2"],
    },
    demo: "https://moneyplus.kibet.top/",
    repo: "https://github.com/kevohm/moneyplus", // update if repo name differs
    challenges: [
      {
        challenge:
          "Tracking financial transactions manually while keeping UI intuitive.",
        solution:
          "Built a streamlined form and dashboard system allowing users to quickly input transactions and view summaries without clutter.",
      },
      {
        challenge:
          "Visualizing financial data in meaningful, easy-to-understand charts.",
        solution:
          "Implemented charting libraries to display income, expenses, and savings trends over time with interactive graphs.",
      },
      {
        challenge: "Maintaining user privacy while providing analytics.",
        solution:
          "Ensured all data remains private in user accounts with no external storage of financial data, and applied secure authentication practices.",
      },
      {
        challenge:
          "Providing an experience that scales as users track more transactions.",
        solution:
          "Optimized data fetching and caching with React Query to handle large volumes of transactions efficiently.",
      },
    ],
  },

  {
    id: "wisetech-training-institute",
    title: "Wisetech Training Institute",
    url: "https://wisetech.kibet.top/",
    img: wisetech,
    status: COMPLETION_STATUS.COMPLETED,
    description:
      "A modern, conversion-focused institutional website for Wisetech Training Institute, designed to showcase training programs, professional certifications, and Pearson VUE exam booking information.",
    features: [
      "Clear multi-page layout including Home, About, Courses, Certifications, and Contact pages",
      "Certification showcase with global relevance indicators (UK, Canada, Germany, AWS, CISSP, PMP, CEH)",
      "Step-by-step Pearson VUE exam booking guide to simplify user onboarding",
      "Responsive course listings with duration, delivery mode, and descriptions",
      "Call-to-action driven design to increase inquiries and exam bookings",
      "Mobile-first responsive design optimized for all screen sizes",
      "SEO-friendly structure for improved search visibility",
    ],
    techStack: {
      frontend: ["NextJS", "Tailwind CSS", "Typescript"],
      backend: [],
      tools: ["GitHub", "Figma", "Vercel", "Netlify"],
    },
    demo: "https://wisetech.kibet.top/",
    repo: "https://github.com/kevohm/Wisetech-Training-Institute",
    challenges: [
      {
        challenge:
          "Presenting a large volume of courses and certifications without overwhelming users.",
        solution:
          "Organized content into clear sections with reusable card components and visual hierarchy for easy scanning.",
      },
      {
        challenge:
          "Ensuring the website converts visitors into inquiries and exam bookings.",
        solution:
          "Implemented prominent call-to-action buttons and structured booking steps to guide users through the decision process.",
      },
      {
        challenge:
          "Making the website accessible and usable across mobile, tablet, and desktop devices.",
        solution:
          "Adopted a mobile-first approach and responsive layouts to ensure consistent user experience on all devices.",
      },
      {
        challenge: "Communicating institutional credibility and trust.",
        solution:
          "Highlighted Pearson VUE test center status, strategic partnerships, certifications, and clear contact information.",
      },
    ],
  },
];
