import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./sections/About";
import Courses from "./sections/Courses";
import Projects from "./sections/Projects";
import Education from "./sections/Education";

function App() {
  return (
    <div className="flex h-full bg-zinc-50 dark:bg-black ">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/articles" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
