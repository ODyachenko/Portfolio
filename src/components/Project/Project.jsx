import { NavLink } from 'react-router-dom';

function Project({ id, title, skills, img }) {
  return (
    <li className="project">
      <NavLink to={`/project/${id}`}>
        <img src={img} alt="Project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  );
}

export default Project;
