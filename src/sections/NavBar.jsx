import { NavLink, useLocation } from "react-router-dom";
import { useAppContext } from "../context/contextApi";

const SingleLink = ({ title, path }) => {
  const { pathname } = useLocation();
  return (
    <li>
      <NavLink
        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
        to={path}
      >
        {title}
        {pathname === path && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
        )}
      </NavLink>
    </li>
  );
};

const NavBar = () => {
  const {isOpen, setIsOpen} = useAppContext()
  const links = [
    {
      path: "/experience",
      title: "Experience",
    },
    {
      path: "/articles",
      title: "Articles",
    },
    {
      path: "/projects",
      title: "Projects",
    },
  ];

  return (
    <div className="flex flex-1 justify-end md:justify-center">
      <div className="pointer-events-auto md:hidden" data-headlessui-state="">
        <button
          className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
          type="button"
          aria-expanded="false"
          data-headlessui-state=""
          onClick={()=>setIsOpen(true)}
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
      {/* <span hidden="" style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></span> */}
      <nav className="pointer-events-auto hidden md:block">
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          {links.map((link) => (
            <SingleLink key={link.title} {...link} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
