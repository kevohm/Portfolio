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
      "StayVacation is a full-stack MERN vacation rental platform with M-Pesa mobile money integration, designed to streamline bookings and payments for users in regions where mobile money is widely adopted.",
    features: [
      "M-Pesa Integration via Safaricom Daraja API",
      "JWT-based authentication with password encryption",
      "Property search by price, location, and amenities",
      "Booking history and reservation management",
      "Responsive mobile-first design",
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
      tools: ["Git", "GitHub", "Postman", "Render", "Vercel"],
    },
    demo: "https://stay-vacation.vercel.app/",
    repo: "https://github.com/kevohm/stay_vacation",
    challenges: [
      {
        challenge:
          "Integrating M-Pesa required working around limited sandbox capabilities and handling delayed callbacks from Safaricom's API.",
        solution:
          "Created robust error-handling flows and fallback payment states to handle edge cases and test scenarios.",
      },
      {
        challenge: "Syncing booking availability in real time.",
        solution:
          "Used database transactions and atomic updates with Mongoose to ensure data consistency.",
      },
    ],
  },
  {
    id: "nawiri-cms",
    title: "Nawiri CMS",
    url: "https://nawiricms.co.ke/",
    img: nawiricms,
    description:
      "Nawiri CMS is a credit management system built for finance companies to manage loans, clients, and repayments effectively.",
    features: [
      "Client onboarding and loan registration",
      "Repayment tracking and history",
      "Loan approval workflows",
      "Dashboard for financial performance insights",
    ],
    techStack: {
      frontend: ["React", "Redux", "Tailwind CSS", "Axios", "Material UI"],
      backend: ["Node.js", "Express", "Prisma", "MySQL"],
      tools: ["Git", "GitHub", "firebase", "Postman", "Figma", "Linode", "PM2"],
    },
    demo: "https://nawiricms.co.ke/",
    challenges: [
      {
        challenge:
          "Handling complex loan calculations and repayment schedules required careful logic and testing.",
        solution:
          "Created modular financial utility functions with Jest unit tests to verify calculations.",
      },
      {
        challenge: "Needed a scalable dashboard for large datasets.",
        solution:
          "Integrated pagination and filtering on both backend and frontend using server-side parameters.",
      },
    ],
  },
  {
    id: "clear-link",
    title: "Clear Link",
    url: "https://clearlink-iota.vercel.app/",
    img: clearlink,
    description:
      "Clear Link is a modern video conferencing platform offering seamless and affordable virtual meeting experiences.",
    features: [
      "Video call scheduling and hosting",
      "Responsive user interface with clean design",
      "Basic pricing model integration",
      "Optimized for performance and accessibility",
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: [],
      tools: ["Git", "GitHub", "Vercel"],
    },
    demo: "https://clearlink-iota.vercel.app/",
    challenges: [
      {
        challenge:
          "Socket.IO integration for real-time features was initially unstable.",
        solution:
          "Implemented connection fallbacks, reconnection logic, and server load balancing strategies.",
      },
      {
        challenge: "User experience on slower networks needed improvement.",
        solution:
          "Added progressive loading and performance-optimized components with Next.js image handling.",
      },
    ],
  },
  {
    id: "quotes",
    title: "Quotes",
    url: "https://quotes-kevohm.vercel.app/",
    img: quotes,
    description:
      "Quotes is a web app showcasing memorable quotes from movies and TV series for Kenyan entertainment fans.",
    features: [
      "Browse and search famous quotes",
      "Categorized by movie and genre",
      "Clean UI for content consumption",
      "Mobile-friendly layout",
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["External API"],
      tools: ["Git", "GitHub", "Vercel"],
    },
    demo: "https://quotes-kevohm.vercel.app/",
    challenges: [
      {
        challenge:
          "Organizing quotes with relational context was challenging using a document-based DB.",
        solution:
          "Implemented referencing within MongoDB and efficient aggregation queries.",
      },
      {
        challenge: "User search experience was initially slow and cluttered.",
        solution:
          "Added debounced search and simple fuzzy matching with regex.",
      },
    ],
  },
  {
    id: "duka-track",
    title: "Duka Track",
    url: "https://liquourlogic.co.ke/",
    img: dukatrack,
    description:
      "Duka Track is a POS system that simplifies inventory and sales management for retail businesses through real-time data and alerts.",
    features: [
      "Inventory management and stock alerts",
      "Payment tracking with detailed reports",
      "Real-time sales analytics",
      "Responsive and intuitive dashboard",
    ],
    techStack: {
      frontend: ["React", "React Query", "Tailwind CSS", "Axios", "Material UI"],
      backend: ["Node.js", "Express", "Prisma", "MySQL"],
      tools: ["Git", "GitHub", "firebase", "Postman", "Figma", "Linode", "PM2"],
    },
    demo: "https://liquourlogic.co.ke/",
    challenges: [
      {
        challenge:
          "Syncing inventory updates across multiple users caused conflicts.",
        solution:
          "Added optimistic UI updates with backend validation and conflict resolution.",
      },
      {
        challenge:
          "Visualizing financial data for non-technical users was tricky.",
        solution:
          "Integrated chart libraries (e.g., Chart.js) with simplified labels and filter toggles.",
      },
    ],
  },
  {
    id: "caffee",
    title: "Caffee",
    url: "https://caffee-beta.vercel.app/",
    img: caffee,
    description:
      "Caffee is a modern coffee shop website that showcases the menu, location, and contact information with a clean and responsive design.",
    features: [
      "Responsive design for mobile and desktop",
      "Menu display with images and descriptions",
      "Location map integration",
      "Contact form for inquiries",
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: [],
      tools: ["Git", "GitHub", "Vercel", "Figma"],
    },
    demo: "https://caffee-beta.vercel.app/",
    challenges: [
      {
        challenge:
          "Ensuring responsive design across various devices was challenging.",
        solution:
          "Utilized Tailwind CSS for utility-first responsive design and tested on multiple screen sizes.",
      },
      {
        challenge: "Implementing pixel perfect UI as per the design",
        solution:
          "Used Figma for design handoff and implemented components with precise CSS styling.",
      },
    ],
  },
  {
    id: "greenbin",
    title: "GreenBin Foundation",
    url: "https://greenbin-jade.vercel.app/",
    img: greenbin,
    description:
      "GreenBin Foundation is a non-profit organization dedicated to promoting environmental responsibility through innovative solutions, including research, education, and sustainable practices. The website provides an engaging platform for users to learn, join initiatives, and support sustainability efforts.",
    features: [
      "Mission and vision section to educate the public",
      "Call-to-action to join environmental programs",
      "Informative sections on research, education, and innovation",
      "Responsive layout optimized for accessibility",
      "Contact and support section for donations or volunteering",
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: [],
      tools: ["Git", "GitHub", "Vercel", "Figma"],
    },
    demo: "https://greenbin-jade.vercel.app/",
    challenges: [
      {
        challenge:
          "Designing an engaging layout to communicate a non-profit mission effectively.",
        solution:
          "Collaborated using Figma for clear visual hierarchy and applied Tailwind CSS to build an accessible, clean UI.",
      },
      {
        challenge: "Making the site inclusive and responsive across devices.",
        solution:
          "Applied mobile-first development and ARIA attributes for accessibility compliance.",
      },
    ],
  },
  {
    id: "streamweb",
    title: "StreamWeb",
    url: "https://streamweb.vercel.app/",
    img: streamweb, // import streamweb from "./assets/streamweb.png";
    description:
      "StreamWeb is a Netflix-style streaming platform built with Angular and NestJS. It aggregates movie and TV show data from TMDB, IMDb, and YouTube APIs, providing users with an immersive interface to explore, search, and preview trending content.",
    features: [
      "Angular-based responsive UI with Netflix-style layout",
      "TMDB integration for movie/series metadata and images",
      "YouTube Data API for embedded trailers",
      "IMDb ratings and reviews",
      "Search by title, genre, or rating",
      "Modal-based previews and trailer playback",
    ],
    techStack: {
      frontend: ["Angular", "RxJS", "Tailwind CSS"],
      backend: ["NestJS", "Node.js", "Express"],
      tools: [
        "Git",
        "GitHub",
        "Vercel",
        "TMDB API",
        "YouTube Data API",
        "IMDb API",
        "Postman",
      ],
    },
    demo: "https://streamweb.vercel.app/",
    challenges: [
      {
        challenge:
          "Integrating multiple third-party APIs (TMDB, YouTube, IMDb) while maintaining a unified data structure.",
        solution:
          "Built a NestJS service layer that normalized external API responses before sending to the frontend, simplifying component data binding.",
      },
      {
        challenge:
          "Creating a Netflix-like interface with hover effects, trailers, and modals in Angular.",
        solution:
          "Used Angular animations and modular components with Tailwind CSS utilities to achieve smooth interactivity and responsive layouts.",
      },
      {
        challenge:
          "Avoiding API quota limits and handling inconsistencies in data (e.g., missing trailers or ratings).",
        solution:
          "Implemented caching strategies and graceful fallbacks for missing or incomplete API data, along with error-bound UI components.",
      },
    ],
  },
];
