import { ProjectData } from "./ProjectData.jsx";
import { register } from "swiper/element/bundle";
register();

export default function Projects() {
  return (
    <div className="Projects">
      <h2>Projects</h2>

      <div className="ProjectContainer">
        {ProjectData.map((project) => (
          <article className="ProjectCard" key={project.id}>
            <header>{project.header}</header>
            <div className="ProjectBody">
              <swiper-container
                slides-per-view="1"
                loop="true"
                css-mode="true"
                navigation="true"
                pagination="true"
              >
                <swiper-slide>
                  <img src={project.body.image} alt="" />
                </swiper-slide>
                <swiper-slide>
                  <img src={project.body.image} alt="" />
                </swiper-slide>
                <swiper-slide>
                  <img src={project.body.image} alt="" />
                </swiper-slide>
              </swiper-container>

              <div className="ProjectDetails">
                <p>{project.body.info}</p>
              </div>
            </div>
            <footer className="StackBox">
              <div className="RepoInfoDiv">{project.footer}</div>

              <button className="outline">Repo Link</button>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
