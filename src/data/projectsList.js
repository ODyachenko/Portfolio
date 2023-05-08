import { nanoid } from 'nanoid';

import project01 from '../img/projects/01.jpg';
import project02 from '../img/projects/02.jpg';
import project03 from '../img/projects/03.jpg';
import project04 from '../img/projects/04.jpg';
import project05 from '../img/projects/05.jpg';
import project06 from '../img/projects/06.jpg';

const projectList = [
  {
    id: nanoid(),
    title: 'Gaming streaming portal',
    skills: 'React, Node.js, MongoDB',
    img: project01,
  },
  {
    id: nanoid(),
    title: 'Video service',
    skills: 'React, Node.js, MongoDB',
    img: project02,
  },
  {
    id: nanoid(),
    title: 'Video portal',
    skills: 'React, Node.js, MongoDB',
    img: project03,
  },
  {
    id: nanoid(),
    title: 'Dating app',
    skills: 'React, Node.js, MongoDB',
    img: project04,
  },
  {
    id: nanoid(),
    title: 'Landing',
    skills: 'React, Node.js, MongoDB',
    img: project05,
  },
  {
    id: nanoid(),
    title: 'Gaming community',
    skills: 'React, Node.js, MongoDB',
    img: project06,
  },
];
export default projectList;
