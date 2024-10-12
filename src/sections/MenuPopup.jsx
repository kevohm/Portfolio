import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../context/contextApi";

const SingleLink = ({ link, title, toggleMenu }) => {
  return (
    <li className="py-2">
      <a
        href={window.location.origin + link}
        onClick={toggleMenu}
        className="block text-sm hover:text-white transition"
      >
        {title}
      </a>
    </li>
  );
};

function MenuPopup() {
  const { isOpen, setIsOpen } = useAppContext();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const links = [
    {
      link: "/articles",
      title: "Articles",
    },
    {
      link: "/experience",
      title: "Experience",
    },
    {
      link: "/projects",
      title: "Projects",
    },
  ];

  return (
    <div
      className="fixed bg-[rgba(0,0,0,.6)] top-0 left-0 flex justify-center pt-8 h-full w-full"
      style={{
        zIndex: 2000,
      }}
    >
      <div className="bg-zinc-800 h-max text-white w-60 p-6 rounded-xl shadow-lg p-4">
        <header className="flex justify-between items-center text-sm font-semibold text-zinc-400">
          <p>Navigation</p>
          <button
            onClick={toggleMenu}
            className=" text-base text-white hover:text-zinc-400"
          >
            <FaTimes />
          </button>
        </header>
        <ul className="mt-2 flex flex-col space-y-2">
          {links.map((link, index) => {
            return (
              <>
                <SingleLink
                  key={link.title}
                  {...link}
                  toggleMenu={toggleMenu}
                />
                {/* {index !== links.length - 1 && (
                  <span className="block bg-[#909090] h-[1px] mt-2"> </span>
                )} */}
              </>
            );
          })}
        </ul>
        {/* Close Button */}
      </div>
    </div>
  );
}

export default MenuPopup;
