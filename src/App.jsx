
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./sections/About";
import Articles from "./sections/Articles";
import Experience from "./sections/Experience";
import MenuPopup from "./sections/MenuPopup";
import Projects from "./sections/Projects";
import { useAppContext } from "./context/contextApi";
import SingleProject from "./sections/SingleProject";

function App() {
  const {isOpen} = useAppContext()
  return (
    <div className="flex h-full bg-zinc-50 dark:bg-black ">
      {isOpen && <MenuPopup />}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<SingleProject/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
