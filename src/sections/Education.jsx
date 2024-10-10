import Footer from "./Footer";
import Header from "./Header";

const Education = () => {
  return (
    <div className="flex w-full">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header/>
        <main className="flex-auto">
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
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default Education;
