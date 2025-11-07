import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../projects";
import Footer from "./Footer";
import Header from "./Header";
import * as Dialog from "@radix-ui/react-dialog";
import { ExternalLink, Github } from "lucide-react";

const MAX_VISIBLE_TAGS = 3;

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Utility to flatten all techStack tags into a single array
  const extractTags = (projects) =>
    projects.flatMap((project) =>
      project.techStack
        ? Object.values(project.techStack).flatMap((stack) =>
            Array.isArray(stack) ? stack : [stack]
          )
        : []
    );

  const allTags = useMemo(() => {
    const tagFrequency = {};

    extractTags(projects).forEach((tag) => {
      tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
    });

    return Object.entries(tagFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([tag]) => tag);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") return projects;

    return projects.filter((project) => {
      const tags = project.techStack
        ? Object.values(project.techStack).flatMap((stack) =>
            Array.isArray(stack) ? stack : [stack]
          )
        : [];

      return tags.includes(selectedFilter);
    });
  }, [projects, selectedFilter]);

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
                      I've worked on numerous projects over the years, and these
                      are my most recent ones. If something piques your
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

                  {/* Filter Buttons */}
                  <div className="mt-12 sm:mt-16">
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedFilter("All")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          selectedFilter === "All"
                            ? "bg-green-500 text-white"
                            : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                        }`}
                      >
                        All
                      </button>
                      {allTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSelectedFilter(tag)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedFilter === tag
                              ? "bg-green-500 text-white"
                              : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-16 sm:mt-20">
                    <div
                      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                    >
                      {filteredProjects.map((project, index) => {
                        const tags = [
                          ...project?.techStack?.backend,
                          ...project?.techStack?.frontend,
                          ...project?.techStack?.tools,
                        ];
                        return (
                          <div
                            key={project.title}
                            className="group relative flex flex-col items-start"
                          >
                            <Link to={`/projects/${project.id}`} className="">
                              <div className="h-18 w-18 relative z-10 flex items-center justify-center rounded-xl overflow-hidden bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <img
                                  alt={project.title}
                                  loading="lazy"
                                  className="w-full h-full object-cover object-center"
                                  decoding="async"
                                  data-nimg="1"
                                  src={project.img}
                                />
                              </div>
                              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>

                                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                <span className="relative z-10">
                                  {project.title}
                                </span>
                              </h2>
                              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                {project.description}
                              </p>
                            </Link>
                            {/* Project Tags */}
                            <div className="my-3 z-20">
                              {tags && tags.length > 0 && (
                                <div className="relative z-10 flex flex-wrap gap-1">
                                  {tags
                                    .slice(0, MAX_VISIBLE_TAGS)
                                    .map((tag) => (
                                      <span
                                        key={tag}
                                        className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-md dark:bg-green-900/30 dark:text-green-400"
                                      >
                                        {tag}
                                      </span>
                                    ))}

                                  {tags.length > MAX_VISIBLE_TAGS && (
                                    <Dialog.Root>
                                      <Dialog.Trigger asChild>
                                        <button className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-500/5 rounded-md dark:bg-gray-500/5 dark:text-gray-300">
                                          +{tags.length - MAX_VISIBLE_TAGS} more
                                        </button>
                                      </Dialog.Trigger>

                                      <Dialog.Portal>
                                        <Dialog.Overlay className="w-full h-full !z-[200] fixed inset-0 bg-black/50 backdrop-blur-sm" />
                                        <Dialog.Content className="!z-[2000] fixed top-1/2 left-1/2 w-96 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white dark:bg-slate-900 p-4 shadow-lg">
                                          <Dialog.Title className="font-semibold text-lg mb-3 text-white">
                                            All Tags
                                          </Dialog.Title>

                                          <div className="flex flex-wrap gap-2">
                                            {tags.map((tag) => (
                                              <span
                                                key={tag}
                                                className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-md dark:bg-green-900/30 dark:text-green-400"
                                              >
                                                {tag}
                                              </span>
                                            ))}
                                          </div>

                                          <Dialog.Close asChild>
                                            <button className="mt-4 w-full py-2 text-sm rounded-md bg-green-600 text-white dark:bg-green-700">
                                              Close
                                            </button>
                                          </Dialog.Close>
                                        </Dialog.Content>
                                      </Dialog.Portal>
                                    </Dialog.Root>
                                  )}
                                </div>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-4">
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group !z-[2000] flex items-center p-3 py-2 text-sm font-medium text-blue-500 bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900 dark:ring-white/10 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-800/10 hover:ring-zinc-900/10 hover:scale-[1.02] hover:-translate-y-0.5 dark:hover:bg-zinc-700/90 dark:hover:ring-white/20 dark:hover:shadow-2xl dark:hover:shadow-black/25 active:scale-[0.98] active:translate-y-0"
                              >
                                <ExternalLink className="h-4 w-4 transition-transform duration-300 " />
                              </a>
                              <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group !z-[2000] flex items-center p-3 py-2 text-sm font-medium text-teal-500 bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900 dark:ring-white/10 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-800/10 hover:ring-zinc-900/10 hover:scale-[1.02] hover:-translate-y-0.5 dark:hover:bg-zinc-700/90 dark:hover:ring-white/20 dark:hover:shadow-2xl dark:hover:shadow-black/25 active:scale-[0.98] active:translate-y-0"
                              >
                                <Github className="h-4 w-4 transition-transform duration-300" />
                              </a>
                            </div>
                          </div>
                        );
                      })}
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

export default Projects;
