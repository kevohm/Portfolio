import {
  AlertTriangle,
  ArrowLeft,
  Code,
  Database,
  ExternalLink,
  Github,
  Monitor,
  Users,
  Wrench,
} from "lucide-react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../projects";
import Footer from "./Footer";
import Header from "./Header";

const SingleProject = () => {
  const { projectId } = useParams();

  const projectData = useMemo(() => {
    return projects.find((p) => p.id === projectId) || null;
  }, [projectId]);

  if (!projectData)
    return (
      <div className="w-full flex items-center justify-center min-h-screen bg-white dark:bg-zinc-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The project you are looking for does not exist.
          </p>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </button>
        </div>
      </div>
    );
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
              {/* Hero Section */}
              <div className="relative overflow-hidden bg-white dark:bg-zinc-900 shadow-xl">
                <div className="relative max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Project Info */}
                    <div>
                      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {projectData.title}
                      </h1>
                      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        {projectData.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={projectData.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center p-3 py-2 text-sm font-medium text-blue-500 bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-800/10 hover:ring-zinc-900/10 hover:scale-[1.02] hover:-translate-y-0.5 dark:hover:bg-zinc-700/90 dark:hover:ring-white/20 dark:hover:shadow-2xl dark:hover:shadow-black/25 active:scale-[0.98] active:translate-y-0"
                          >
                          <ExternalLink className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                          Live Demo 
                          
                        </a>
                        <a
                          href={projectData.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center p-3 py-2 text-sm font-medium text-teal-500 bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-800/10 hover:ring-zinc-900/10 hover:scale-[1.02] hover:-translate-y-0.5 dark:hover:bg-zinc-700/90 dark:hover:ring-white/20 dark:hover:shadow-2xl dark:hover:shadow-black/25 active:scale-[0.98] active:translate-y-0"
                        >
                          <Github className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                          View Code
                        </a>
                      </div>
                    </div>

                    {/* Project Image */}
                    <div className="relative">
                      <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                        <img
                          src={projectData.img}
                          alt={projectData.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Features and Challenges */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Features */}
                    <div className="rounded-2xl  p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                          <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Key Features
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {projectData.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-zinc-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                          >
                            <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Challenges & Solutions */}
                    {projectData.challenges &&
                      projectData.challenges.length > 0 && (
                        <div className=" p-8">
                          <div className="flex items-center mb-6">
                            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg mr-4">
                              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                              Challenges & Solutions
                            </h2>
                          </div>

                          <div className="space-y-6">
                            {projectData.challenges.map((item, index) => (
                              <div
                                key={index}
                                className="p-6 bg-gray-50 dark:bg-zinc-700/50 rounded-lg border-l-4 border-amber-500 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                              >
                                <div className="mb-4">
                                  <h4 className="text-sm font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-2">
                                    Challenge
                                  </h4>
                                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {item.challenge}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide mb-2">
                                    Solution
                                  </h4>
                                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {item.solution}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="border border-gray-500/5 dark:border-white/5 rounded-lg p-8 sticky top-8">
                      <div className="flex items-center mb-6">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                          <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Tech Stack
                        </h2>
                      </div>

                      {/* Frontend */}
                      {projectData?.techStack?.frontend?.length > 0 && (
                        <div className="mb-8">
                          <div className="flex items-center mb-4">
                            <Monitor className="h-5 w-5 text-blue-500 mr-2" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Frontend
                            </h3>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {projectData.techStack.frontend.map(
                              (tech, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full"
                                >
                                  {tech}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {/* Backend */}
                      {projectData?.techStack?.backend?.length > 0 && (
                        <div className="mb-8">
                          <div className="flex items-center mb-4">
                            <Database className="h-5 w-5 text-green-500 mr-2" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Backend
                            </h3>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {projectData.techStack.backend.map(
                              (tech, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium rounded-full"
                                >
                                  {tech}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {/* Tools */}
                      {projectData?.techStack?.tools?.length > 0 && (
                        <div>
                          <div className="flex items-center mb-4">
                            <Wrench className="h-5 w-5 text-orange-500 mr-2" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Tools
                            </h3>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {projectData.techStack.tools.map((tool, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-sm font-medium rounded-full"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
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

export default SingleProject;
