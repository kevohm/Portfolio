import thumbnail1 from "../assets/virtualbox.png";
import thumbnail2 from "../assets/googlesearch.png";

function AllArticles() {
  const articles = [
    {
      thumnail: thumbnail1,
      link: "https://medium.com/@kevinkbet/setting-up-virtualbox-in-windows-665b21207d31",
      title: "Setting Up VirtualBox in Windows",
      description:
        "The major problem when starting out with the Windows operating system, as a developer, is the number of precise settings you must change. Today, I will try and summarize one of the major settings that will be required mainly in the virtualization field.",
      pubDate: "Jun 20, 2023",
    },
    {
      thumnail: thumbnail2,
      link: "https://medium.com/@kevinkbet/what-happens-when-you-type-google-com-in-your-browser-and-press-enter-fd054f67d471",
      title:
        "what happens when you type google.com in your browser and press Enter.",
      description:
        "When the user first enters the keywords google.com, the browser i.e.(chrome, Firefox or safari) will visit the history and return an auto-completion or do a search from the cache to an index to previously accessed web pages that was stored locally on your machine. Furthermore, it can send search request to the default server in relation to the browser.",
      pubDate: "Oct 6, 2022",
    },
  ];

  return (
    <main className="flex-auto">
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  Web Dev Articles
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  Awesome Web Development articles to help you level up your
                  skills
                </p>
              </header>
              <div className="mt-16 sm:mt-20">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {articles.map((article, index) => (
                    <li
                      key={index}
                      className="group relative flex flex-col items-start"
                    >
                      {/* <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                        
                        
                        <img
                          alt=""
                          className="h-12 w-12 rounded-full object-cover"
                          src={article.thumbnail} // Use article image
                        />
                      </div> */}
                      <div className="h-[200px] w-full relative z-10 flex items-center justify-center bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                        <img
                          loading="lazy"
                          decoding="async"
                          data-nimg="1"
                          className="h-full w-full object-center object-cover"
                          alt={article.title}
                          src={article.thumnail}
                        />
                      </div>

                      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                        <a target="_blank" href={article.link}>
                          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                          <span className="relative z-10">{article.title}</span>
                        </a>
                      </h2>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        { article.description.length > 137 ? `${article.description.slice(0, 136)}...` : article.description} {/* Article description */}
                      </p>
                      <p className="relative z-10 mt-6 flex w-full justify-between text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                        <span>
                          {new Date(article.pubDate).toLocaleDateString()}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AllArticles;
