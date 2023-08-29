import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";

export default function Header() {
  return (
    <HashRouter>
      <div className="Header">
        <nav>
          <ul>
            <li className="NameText">
              <NavLink to="/" end>
                Mark Soro
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <details role="list" dir="rtl">
                <summary aria-haspopup="listbox" role="link">
                  Menu
                </summary>
                <ul role="listbox">
                  <li>
                    <NavLink to="/projects">Projects</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/resume">Resume</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact strict path="/" element={<Home />} />
          <Route exact strict path="/projects" element={<Projects />} />
          <Route exact strict path="/about" element={<About />} />
          <Route exact strict path="/resume" element={<Resume />} />
          <Route exact strict path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
