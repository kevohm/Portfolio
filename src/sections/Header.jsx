import NavBar from "./NavBar";
import profileImage from "../assets/profile.png"

import { FaDownload } from 'react-icons/fa'; // Make sure to install react-icons if you haven't
import cv from "../assets/kevin_kipkemboi_cv.pdf"
const DownloadCVButton = () => {
  return (
    <div className=" flex justify-center">
    <a
      href={cv} // Replace with the actual path to your CV
      download="kevin_kipkemboi_cv.pdf"
      className="flex items-center p-3 py-2 text-sm font-medium text-teal-500  bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 rounded-lg transition-colors duration-300"
      title="Download Resume"
    >
      {/* Icon */}
      <FaDownload className="text-sm" />
      
      {/* Text (hidden on small screens) */}
      <span className="ml-2 hidden sm:inline">Resume</span>
    </a>
  </div>
  );
};



const Header = () => {
  return (
    <header
      className="pointer-events-none relative z-50 flex flex-none flex-col"
    //   style="height:var(--header-height);margin-bottom:var(--header-mb)"
        style={{
            height:"var(--header-height)",
            marginBottom:"var(--header-mb)"
        }}
    >
      <div
        className="top-0 z-10 h-16 pt-6"
        style={{
            position:"var(--header-position)"
        }}
        // style="position:var(--header-position)"
        >
        <div
          className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
          style={{
              position:"var(--header-inner-position)"
          }}
        //   style="position:var(--header-inner-position)"
        >
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex flex-1">
                    <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                      <a
                        aria-label="Home"
                        className="pointer-events-auto"
                        href="/"
                      >
                        <img alt="" fetchPriority="high" width="1024" height="1024" decoding="async" data-nimg="1" 
                        className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9" 
                        style={{color:"transparent"}} 
                        sizes="2.25rem" 
                        src={profileImage}
                        />
                      </a>
                    </div>
                  </div>
                  <NavBar/>
                  <div className="pointer-events-auto flex justify-end md:flex-1">
                    <DownloadCVButton/>
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

export default Header;
