const NavBar = () => {
  return (
    <header className="pointer-events-none relative z-50 flex flex-none flex-col">
      <div className="order-last "></div>
      <div className="sm:px-8 top-0 order-last -mb-3 pt-3">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className=" w-full">
                <div className="relative">
                  <div className="absolute left-0 top-3 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"></div>
                  <a
                    aria-label="Home"
                    className="block h-16 w-16 origin-left pointer-events-auto"
                    href="/"
                  >
                    {/* <img
                    alt=""
                    fetchPriority="high"
                    width="1024"
                    height="1024"
                    decoding="async"
                    data-nimg="1"
                    className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                    style="color:transparent"
                    sizes="4rem"
                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=3840&amp;q=75 3840w"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.cf041298.webp&amp;w=3840&amp;q=75"
                  /> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-0 z-10 h-16 pt-6">
        <div className="sm:px-8 w-full">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex flex-1"></div>
                  <div className="flex flex-1 justify-end md:justify-center">
                    <div
                      className="pointer-events-auto md:hidden"
                      data-headlessui-state=""
                    >
                      <button
                        className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state=""
                      >
                        Menu
                        <svg
                          viewBox="0 0 8 6"
                          aria-hidden="true"
                          className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                        >
                          <path
                            d="M1.75 1.75 4 4.25l2.25-2.5"
                            fill="none"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    {/* <span
                    hidden
                    style="position:fixed;
                    top:1px;
                    left:1px;
                    width:1px;
                    height:0;
                    padding:0;
                    margin:-1px;
                    overflow:hidden;
                    clip:rect(0, 0, 0, 0);
                    white-space:nowrap;
                    border-width:0;
                    display:none"
                  ></span> */}
                    <nav className="pointer-events-auto hidden md:block">
                      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        <li>
                          <a
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/courses"
                          >
                            Courses
                          </a>
                        </li>
                        <li>
                          <a
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/articles"
                          >
                            Articles
                          </a>
                        </li>
                        <li>
                          <a
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/projects"
                          >
                            Projects
                          </a>
                        </li>
                        <li>
                          <a
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/about"
                          >
                            About
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="flex justify-end md:flex-1">
                    <div className="pointer-events-auto">
                      <button
                        type="button"
                        aria-label="Toggle theme"
                        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
                        >
                          <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                          <path
                            d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                            fill="none"
                          ></path>
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
                        >
                          <path
                            d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
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
    </header>
  );
};

export default NavBar;
