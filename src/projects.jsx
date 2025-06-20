import clearlink from "./assets/clearlink.png";
import dukatrack from "./assets/dukatrack.png";
import nawiricms from "./assets/nawiricms.png";
import quotes from "./assets/quote.png";
import stayvacation from "./assets/stayvacation.png";

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
      frontend: ["React", "React Router", "Context API", "Axios", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Bcrypt", "M-Pesa API"],
      tools: ["Git", "GitHub", "Postman", "Render"],
    },
    demo: "https://stay-vacation.vercel.app/",
    repo: "https://github.com/kevohm/stay_vacation",
    challenges: [
      {
        challenge: "Integrating M-Pesa required working around limited sandbox capabilities and handling delayed callbacks from Safaricom's API.",
        solution: "Created robust error-handling flows and fallback payment states to handle edge cases and test scenarios.",
      },
      {
        challenge: "Syncing booking availability in real time.",
        solution: "Used database transactions and atomic updates with Mongoose to ensure data consistency.",
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
      frontend: ["React", "Bootstrap"],
      backend: ["Node.js", "Express", "MongoDB"],
      tools: ["Git", "GitHub", "Heroku"],
    },
    demo: "https://nawiricms.co.ke/",
    challenges: [
      {
        challenge: "Handling complex loan calculations and repayment schedules required careful logic and testing.",
        solution: "Created modular financial utility functions with Jest unit tests to verify calculations.",
      },
      {
        challenge: "Needed a scalable dashboard for large datasets.",
        solution: "Integrated pagination and filtering on both backend and frontend using server-side parameters.",
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
      frontend: ["React", "Next.js", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Socket.IO"],
      tools: ["Git", "GitHub", "Vercel"],
    },
    demo: "https://clearlink-iota.vercel.app/",
    challenges: [
      {
        challenge: "Socket.IO integration for real-time features was initially unstable.",
        solution: "Implemented connection fallbacks, reconnection logic, and server load balancing strategies.",
      },
      {
        challenge: "User experience on slower networks needed improvement.",
        solution: "Added progressive loading and performance-optimized components with Next.js image handling.",
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
      backend: ["Node.js", "Express", "MongoDB"],
      tools: ["Git", "GitHub", "Vercel"],
    },
    demo: "https://quotes-kevohm.vercel.app/",
    challenges: [
      {
        challenge: "Organizing quotes with relational context was challenging using a document-based DB.",
        solution: "Implemented referencing within MongoDB and efficient aggregation queries.",
      },
      {
        challenge: "User search experience was initially slow and cluttered.",
        solution: "Added debounced search and simple fuzzy matching with regex.",
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
      frontend: ["React", "Bootstrap"],
      backend: ["Node.js", "Express", "MongoDB"],
      tools: ["Git", "GitHub", "Netlify"],
    },
    demo: "https://liquourlogic.co.ke/",
    challenges: [
      {
        challenge: "Syncing inventory updates across multiple users caused conflicts.",
        solution: "Added optimistic UI updates with backend validation and conflict resolution.",
      },
      {
        challenge: "Visualizing financial data for non-technical users was tricky.",
        solution: "Integrated chart libraries (e.g., Chart.js) with simplified labels and filter toggles.",
      },
    ],
  },
];
