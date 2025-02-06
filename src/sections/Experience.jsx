
import Footer from "./Footer";
import Header from "./Header";

const Experience = () => {
  const experiences = [
    {
      duration: "May 2024 – Present",
      title: "Frontend Engineer at Tugrow",
      roles: [
        "Designed mock-ups for a resume application",
        "Developed UI components using NextJS together with Redux for state management",
        "Came up with branding strategies and even a cool company name",
      ],
    },
    {
      duration: "June 2024 – Present",
      title: "Junior Software Engineer at Alpha Nex Softwares",
      roles: [
        "Developed and deployed responsive web and mobile applications, including a POS system, and an API for a logistics tracker, using Nginx, PM2, and Linode, ensuring 98% uptime.",
        "Translated wireframes and design mockups into functional UI components using React.js and Tailwind CSS.",
        "Collaborated with developers to seamlessly integrate APIs into the front end.",
        "Developed algorithms to improve user authentication and authorization, including integration with external services for authentication and service provisioning.",
        "Developed a Node.js wrapper to simplify file upload integration, reducing development time by 1 days.",
        "Optimized the front end using React Developer Tools and enhanced state management and data fetching by replacing Context API with Redux and Axios with TanStack Query.",
        "Conducted research on Job Scheduling and Background tasks for creation of a email notification system using Nunjucks, redis and bullMQ"
      ],
    },
    {
      duration: "Feb 2024 – June 2024",
      title: "Software Engineering Internship at Alpha Nex Softwares",
      roles: [
        "Designed and developed a credit management system using Node.js, MySQL, and React.js to showcase my skill set.",
        "Earned a promotion through exceptional performance in RESTful API and user interface development.",
        "Enhanced SEO for a WordPress website to boost web traffic and improve search engine rankings.",
        "Mentored a group of attaches, teaching them about authentication and authorization.",
      ],
    },
    {
      duration: "Sep 2019 – June 2024",
      title: "Bachelor of Science in Mathematics and Computer Science - JKUAT",
      roles: [
        "Graduated with Second Class Honors (Upper)",
        "Participated in the Google Student Developer Club",
        "Developed the 'Intelligent Parking Assistant' for my research project.",
      ],
    },
  ];
  return (
    <div className="flex w-full">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        {/* <main className="flex-auto">
          <div className="sm:px-8 mt-16 sm:mt-32">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <header className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                      Education
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    A timeline of my academic journey, highlighting key subjects, languages, and frameworks learned along the way.
                   
                    </p>
                  </header>
                  <div className="mt-16 sm:mt-20">
                    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                      <div className="flex max-w-3xl flex-col space-y-16">
                        <article className="md:grid md:grid-cols-4 md:items-baseline">
                          <div className="md:col-span-3 group relative flex flex-col items-start">
                            <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                              <a href="/articles/2024/08/23">
                                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                <span className="relative z-10">
                                  __dirname Makes a Comeback in Node.js ES
                                  Modules
                                </span>
                              </a>
                            </h2>
                            <time
                              className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                              dateTime="2024-08-23"
                            >
                              <span
                                className="absolute inset-y-0 left-0 flex items-center"
                                aria-hidden="true"
                              >
                                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                              </span>
                              August 23, 2024
                            </time>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              This article walks you through my experience
                              transitioning from CommonJS to ES Modules in
                              Node.js, with a focus on the challenges of
                              accessing the current module directory and file
                              paths. It covers the frustrations I encountered
                              with the old, cumbersome workaround and the relief
                              brought by the introduction of import.meta.dirname
                              and import.meta.filename. These improvements have
                              significantly streamlined my coding process, and I
                              am eager to share how they can simplify your
                              JavaScript development as well.
                            </p>
                            <div
                              aria-hidden="true"
                              className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                            >
                              Read article
                              <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                aria-hidden="true"
                                className="ml-1 h-4 w-4 stroke-current"
                              >
                                <path
                                  d="M6.75 5.75 9.25 8l-2.5 2.25"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <time
                            className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                            dateTime="2024-08-23"
                          >
                            August 23, 2024
                          </time>
                        </article>
                        <article className="md:grid md:grid-cols-4 md:items-baseline">
                          <div className="md:col-span-3 group relative flex flex-col items-start">
                            <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                              <a href="/articles/2024/07/17">
                                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                <span className="relative z-10">
                                  Warp Terminal: Setting a Custom Starting
                                  Directory for New Sessions
                                </span>
                              </a>
                            </h2>
                            <time
                              className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                              dateTime="2024-07-17"
                            >
                              <span
                                className="absolute inset-y-0 left-0 flex items-center"
                                aria-hidden="true"
                              >
                                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                              </span>
                              July 17, 2024
                            </time>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Learn how to set your preferred directory as the
                              default starting point for your terminal sessions
                              in Warp. Follow these simple steps to configure
                              your terminal to always open in your chosen
                              directory, making your workflow more efficient and
                              personalized.
                            </p>
                            <div
                              aria-hidden="true"
                              className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                            >
                              Read article
                              <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                aria-hidden="true"
                                className="ml-1 h-4 w-4 stroke-current"
                              >
                                <path
                                  d="M6.75 5.75 9.25 8l-2.5 2.25"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <time
                            className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                            dateTime="2024-07-17"
                          >
                            July 17, 2024
                          </time>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main> */}

        <main className="flex-auto">
          <div className="sm:px-8 mt-16 sm:mt-32">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <header className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                      My Journey
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                      A timeline of my professional and educational experiences,
                      highlighting key projects, languages, and frameworks
                      I&apos;ve worked with.
                    </p>
                  </header>
                  <div className="mt-16 sm:mt-20">
                    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                      <div className="flex max-w-3xl flex-col space-y-16">
                        {experiences.map((experience, index) => (
                          <article
                            key={index}
                            className="md:grid md:grid-cols-4 md:items-baseline"
                          >
                            <div className="md:col-span-3 group relative flex flex-col items-start">
                              <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                <a href="/experience/tugrow-frontend-engineer">
                                  <span className="relative z-10">
                                    {experience.title}
                                  </span>
                                </a>
                              </h2>
                              <time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                                {experience.duration}
                              </time>
                              <ul className="text-sm text-zinc-400 dark:text-zinc-500 list-disc flex flex-col space-y-3">
                                {experience.roles.map((role, index) => (
                                  <li
                                    key={index}
                                    className="flex items-center space-x-2"
                                  >
                                    {role}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <time className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
                              May 2024 – Present
                            </time>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Experience;
