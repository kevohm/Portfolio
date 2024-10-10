import Footer from "./Footer";
import Header from "./Header";

const Courses = () => {
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
                      Web Dev Courses
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                      Awesome Web Development courses to help you level up your
                      skills
                    </p>
                  </header>
                  <div className="mt-16 sm:mt-20">
                    <ul
                      role="list"
                      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                    >
                      <li className="group relative flex flex-col items-start">
                        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          {/* <img alt="" loading="lazy" width="1280" height="731" decoding="async" data-nimg="1" className="h-12 w-12 rounded-full object-cover" style="color:transparent" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flifetime-membership.eca7612e.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flifetime-membership.eca7612e.png&amp;w=3840&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flifetime-membership.eca7612e.png&amp;w=3840&amp;q=75"/> */}
                        </div>
                        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                          <a
                            target="_blank"
                            href="https://www.codingaddict.io/p/lifetime-membership"
                          >
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">
                              Lifetime Membership
                            </span>
                          </a>
                        </h2>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          Enjoy unlimited access to all courses with a single
                          purchase, including future courses.
                        </p>
                        <p className="relative z-10 mt-6 flex w-full justify-between text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                          <span>200+ hours</span>
                          <span>$ 50</span>
                        </p>
                      </li>
                    </ul>
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

export default Courses;
