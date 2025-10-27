import caffee from "./assets/caffee.png";
import clearlink from "./assets/clearlink.png";
import dukatrack from "./assets/dukatrack.png";
import greenbin from "./assets/greenbin.png";
import nawiricms from "./assets/nawiricms.png";
import quotes from "./assets/quote.png";
import stayvacation from "./assets/stayvacation.png";
import streamweb from "./assets/streamweb.png";

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
  {
    id: "clear-link",
    title: "Clear Link",
    url: "https://clearlink-iota.vercel.app/",
    img: clearlink,
    description:
      "A frontend video conferencing UI prototype demonstrating scheduling and responsive design.",
    features: [
      "Video call scheduling UI",
      "Responsive and clean interface",
      "Basic pricing page layout",
      "Performance and accessibility optimized",
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: [],
      tools: ["git", "GitHub", "Vercel"],
    },
    demo: "https://clearlink-iota.vercel.app/",
    repo: "https://github.com/kevohm/clearlink",
    challenges: [
      {
        challenge: "Initial instability with real-time design assumptions.",
        solution:
          "Focused on UI only and left Socket.IO logic for future backend integration.",
      },
      {
        challenge: "Improving perceived performance.",
        solution: "Added optimized images and layout animations.",
      },
    ],
  },
  {
    id: "quotes",
    title: "Quotes",
    url: "https://quotes-kevohm.vercel.app/",
    img: quotes,
    description:
      "A quote discovery platform for fans of Kenyan film and TV content.",
    features: [
      "Browse and search famous quotes",
      "Categorized by movie and genre",
      "Clean and simple UI",
      "Mobile-first responsive layout",
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["External API"],
      tools: ["git", "GitHub", "Vercel"],
    },
    demo: "https://quotes-kevohm.vercel.app/",
    repo: "https://github.com/kevohm/quotes",
    challenges: [
      {
        challenge: "Organizing quote data using MongoDB.",
        solution: "Used document references and aggregation queries.",
      },
      {
        challenge: "Search experience was laggy and inaccurate.",
        solution: "Added debounced search and basic fuzzy matching.",
      },
    ],
  },
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
  {
    id: "caffee",
    title: "Caffee",
    url: "https://caffee-beta.vercel.app/",
    img: caffee,
    description:
      "A modern landing page for a coffee shop, showcasing menu, location, and contact features.",
    features: [
      "Responsive design for all screen sizes",
      "Visual menu with images and descriptions",
      "Location map integration",
      "Contact form with inquiry routing",
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS", "website"],
      backend: [],
      tools: ["git", "GitHub", "Vercel", "Figma"],
    },
    demo: "https://caffee-beta.vercel.app/",
    repo: "https://github.com/kevohm/caffee",
    challenges: [
      {
        challenge: "Ensuring pixel-perfect design match.",
        solution: "Implemented based on Figma specs with Tailwind utilities.",
      },
      {
        challenge: "Cross-device responsiveness.",
        solution:
          "Tested across breakpoints using utility-first layout structure.",
      },
    ],
  },
  {
    id: "greenbin",
    title: "GreenBin Foundation",
    url: "https://greenbin-jade.vercel.app/",
    img: greenbin,
    description:
      "A non-profit platform promoting environmental awareness and sustainability initiatives.",
    features: [
      "Mission and education sections",
      "Join and support program calls to action",
      "Research and innovation highlights",
      "Accessible and mobile-first design",
      "Donation and volunteer contact options",
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: [],
      tools: ["git", "GitHub", "Vercel", "Figma"],
    },
    demo: "https://greenbin-jade.vercel.app/",
    repo: "https://github.com/kevohm/greenbin",
    challenges: [
      {
        challenge: "Conveying the non-profit's message clearly.",
        solution: "Used structured layout and hierarchy with Figma planning.",
      },
      {
        challenge: "Ensuring inclusivity and responsiveness.",
        solution: "Applied ARIA roles and tested mobile-first accessibility.",
      },
    ],
  },
  {
    id: "streamweb",
    title: "StreamWeb",
    url: "https://streamweb.vercel.app/",
    img: streamweb,
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
];
