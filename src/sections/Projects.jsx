import clearlink from "../assets/clearlink.png";
import dukatrack from "../assets/dukatrack.png";
import nawiricms from "../assets/nawiricms.png";
import quotes from "../assets/quote.png";
import stayvacation from "../assets/stayvacation.png";
import Footer from "./Footer";
import Header from "./Header";

const Projects = () => {
  const projects = [
    {
      title: "Stay Vacation",
      url: "https://stay-vacation.vercel.app/",
      img: stayvacation,
      description:
        "Stay vacation a web application that offers beautiful and unique vacation spots, aimed at promoting staycations and travel within Kenya",
    },
    {
      title: "Nawiri CMS",
      url: "https://nawiricms.co.ke/",
      img: nawiricms,
      description: "A credit management system focused on finance companies.",
    },
    {
      title: "Clear Link",
      url: "https://clearlink-iota.vercel.app/",
      img: clearlink,
      description:
        "Clear link is a website that offers a better video conferencing experience at a given price.",
    },
    {
      title: "Quotes",
      url: "https://quotes-kevohm.vercel.app/",
      img: quotes,
      description:
        "Quotes is a web application that offers a way for movie and series lovers all over the Kenya to relive their previous watching experince through looking at quotes made in the movies.",
    },
    {
      title: "Duka Track",
      url: "https://liquourlogic.co.ke/",
      img: dukatrack,
      description:
        "Dukatrack is a pos that focuses on streamlined operations by giving detailed reports and notifications that enable both inventory and payment tracking",
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
        <main className="flex-auto">
          <div className="sm:px-8 mt-16 sm:mt-32">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <header className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                      Here are some projects that I have worked on.
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                      I &#x27;ve worked on numerous projects over the years, and
                      these are my most recent ones. If something piques your
                      interest, feel free to check out the
                      <a
                        className="text-green-500 px-1 hover:text-green-600 active:text-green-600 no-underline"
                        target="_blank"
                        href="https://github/com/kevohm"
                      >
                        code
                      </a>
                      and suggest any improvements.
                    </p>
                  </header>
                  <div className="mt-16 sm:mt-20">
                    <ul
                      role="list"
                      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                    >
                      {projects.map((project) => {
                        return (
                          <li
                            key={project.title}
                            className="group relative flex flex-col items-start"
                          >
                            <div className="h-18 w-18 relative z-10 flex items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                              <img
                                alt={project.title}
                                loading="lazy"
                                width="400"
                                height="225"
                                decoding="async"
                                data-nimg="1"
                                src={project.img}
                              />
                            </div>
                            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                              <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                              <a target="_blank" href={project.url}>
                                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                <span className="relative z-10">
                                  {project.title}
                                </span>
                              </a>
                            </h2>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              {project.description}
                            </p>
                            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                              <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="h-6 w-6 flex-none"
                              >
                                <path
                                  d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              <span className="ml-2">{project.url}</span>
                            </p>
                          </li>
                        );
                      })}
                    </ul>
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

export default Projects;
