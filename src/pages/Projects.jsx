import Project from '../components/Project/Project';
import projectsList from '../data/projectsList';

function Projects() {
  const projects = projectsList.map((project) => (
    <Project key={project.id} {...project} />
  ));

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">{projects}</ul>
      </div>
    </main>
  );
}

export default Projects;
