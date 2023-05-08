import { useParams } from 'react-router-dom';
import projectsList from '../data/projectsList';

import gitHub from '../img/icons/gitHub-black.svg';

function Project() {
  const { id } = useParams();
  const project = projectsList.filter((project) => {
    return project.id === id;
  });

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project[0].title}</h1>

          <img src={project[0].img} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: {project[0].skills}</p>
          </div>

          <a href="#!" className="btn-outline">
            <img src={gitHub} alt="" />
            GitHub repo
          </a>
        </div>
      </div>
    </main>
  );
}

export default Project;
