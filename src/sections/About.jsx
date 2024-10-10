
const About = () => {
  return <div className="flex w-full">
              <div className="fixed inset-0 flex justify-center sm:px-8">
                  <div className="flex w-full max-w-7xl lg:px-8">
                      <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
                  </div>
              </div>
              <div className="relative flex w-full flex-col">
                  {/* <header className="pointer-events-none relative z-50 flex flex-none flex-col" style="height:var(--header-height);margin-bottom:var(--header-mb)">
                      <div className="top-0 z-10 h-16 pt-6" style="position:var(--header-position)">
                          <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full" style="position:var(--header-inner-position)">
                              <div className="mx-auto w-full max-w-7xl lg:px-8">
                                  <div className="relative px-4 sm:px-8 lg:px-12">
                                      <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                          <div className="relative flex gap-4">
                                              <div className="flex flex-1">
                                                  <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                                                      <a aria-label="Home" className="pointer-events-auto" href="/">
                                                          <img alt="" fetchPriority="high" width="1024" height="1024" decoding="async" data-nimg="1" className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9" style="color:transparent" sizes="2.25rem" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=3840&amp;q=75"/>
                                                      </a>
                                                  </div>
                                              </div>
                                              <div className="flex flex-1 justify-end md:justify-center">
                                                  <div className="pointer-events-auto md:hidden" data-headlessui-state="">
                                                      <button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20" type="button" aria-expanded="false" data-headlessui-state="">
                                                          Menu
                                                          <svg viewBox="0 0 8 6" aria-hidden="true" className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
                                                              <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                          </svg>
                                                      </button>
                                                  </div>
                                                  <span hidden="" style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></span>
                                                  <nav className="pointer-events-auto hidden md:block">
                                                      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                                                          <li>
                                                              <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/courses">Courses</a>
                                                          </li>
                                                          <li>
                                                              <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/articles">Articles</a>
                                                          </li>
                                                          <li>
                                                              <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Projects</a>
                                                          </li>
                                                          <li>
                                                              <a className="relative block px-3 py-2 transition text-teal-500 dark:text-teal-400" href="/about">
                                                                  About<span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                                                              </a>
                                                          </li>
                                                      </ul>
                                                  </nav>
                                              </div>
                                              <div className="flex justify-end md:flex-1">
                                                  <div className="pointer-events-auto">
                                                      <button type="button" aria-label="Toggle theme" className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                                                          <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600">
                                                              <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                                                              <path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none"></path>
                                                          </svg>
                                                          <svg viewBox="0 0 24 24" aria-hidden="true" className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500">
                                                              <path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                          </svg>
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </header> */}
                  <main className="flex-auto">
                      <div className="sm:px-8 mt-16 sm:mt-32">
                          <div className="mx-auto w-full max-w-7xl lg:px-8">
                              <div className="relative px-4 sm:px-8 lg:px-12">
                                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                                          <div className="lg:pl-20">
                                              <div className="max-w-xs px-2.5 lg:max-w-none">
                                                  {/* <img alt="" loading="lazy" width="750" height="429" decoding="async" data-nimg="1" className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" style="color:transparent" sizes="(min-width: 1024px) 32rem, 20rem" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-away.6a680dba.png&amp;w=3840&amp;q=75"/> */}
                                              </div>
                                          </div>
                                          <div className="lg:order-first lg:row-span-2">
                                              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">I`m John Smilga, residing in Sarasota, FL, where I bring dynamic web projects to life</h1>
                                              <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                                                  <p>With a deep passion for coding, I spend most of my day experimenting with HTML, CSS, and JavaScript, diving into its vast array of frameworks and libraries such as React, TypeScript, and Next.js. The thrill of solving problems and learning something new each day keeps me motivated and engaged in this ever-evolving field.</p>
                                                  <p>Beyond my development work, I am an avid educator. I create and teach comprehensive courses on platforms like Udemy, aiming to empower aspiring developers with the skills they need to succeed. All of my courses are packed with interesting projects designed to provide hands-on experience and practical knowledge.</p>
                                                  <p>You can also find me on my YouTube channel, Coding Addict, where I share tutorials, coding tips, and insights into the world of web development. I`m always on the lookout for new technologies to broaden my expertise.</p>
                                              </div>
                                          </div>
                                          <div className="lg:pl-20">
                                              <ul role="list">
                                                  <li className="flex">
                                                      <a target="_blank " className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="https://www.youtube.com/@CodingAddict">
                                                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"></path>
                                                          </svg>
                                                          <span className="ml-4">Follow on YouTube</span>
                                                      </a>
                                                  </li>
                                                  <li className="mt-4 flex">
                                                      <a target="_blank " className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="https://github.com/john-smilga">
                                                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>
                                                          </svg>
                                                          <span className="ml-4">Follow on GitHub</span>
                                                      </a>
                                                  </li>
                                                  <li className="mt-4 flex">
                                                      <a target="_blank " className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="https://www.linkedin.com/in/john-smilga-659100177/">
                                                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                                          </svg>
                                                          <span className="ml-4">Follow on LinkedIn</span>
                                                      </a>
                                                  </li>
                                                  <li className="mt-4 flex">
                                                      <a target="_blank " className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="https://x.com/john_smilga">
                                                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path>
                                                          </svg>
                                                          <span className="ml-4">Follow on X</span>
                                                      </a>
                                                  </li>
                                                  <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                                                      <a target="_blank " className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="mailto:spencer@planetaria.tech">
                                                          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                                                              <path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path>
                                                          </svg>
                                                          <span className="ml-4">codingaddictnewsletter@gmail.com</span>
                                                      </a>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </main>
                  <footer className="mt-32 flex-none">
                      <div className="sm:px-8">
                          <div className="mx-auto w-full max-w-7xl lg:px-8">
                              <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
                                  <div className="relative px-4 sm:px-8 lg:px-12">
                                      <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                                              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                                  <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/courses">Courses</a>
                                                  <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/articles">Articles</a>
                                                  <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Projects</a>
                                                  <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/about">About</a>
                                              </div>
                                              <p className="text-sm text-zinc-400 dark:text-zinc-500">© 
                                              2024
                                              Coding Addict. All rights reserved.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </footer>
              </div>
          </div>

  
}

export default About