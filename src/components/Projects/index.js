import React, { useEffect,useState  } from 'react'
import './Projects.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import {useSelector} from 'react-redux';
import Fade from 'react-reveal/Fade';

function Projects() {
  const [projectData, setProjectData] = useState();
  const projects = useSelector(state => state.projects.projects);
  useEffect(() => {
    setProjectData(projects);
  },[projects])
  return (
    <div className='projects-wrapper'>
   <Fade left duration ={1150}>
       <div className="projects-container">
           {/* <h1 className="title">My projects</h1> */}
           <div className="project-list">
               {projectData?.map((project, idx) => {return (
                 <div key={idx} className="project-list__item">
                   <div className="project-item-wrapper">
                     <div className="item-img">
                       <img src={project.img} alt={project.title}/>
                     </div>
                     <h2 className="item-title">
                       <a href={project.linkDemo} target="__blank" rel="noopener noreferrer">{project.title}</a>
                     </h2>
                     <p className="item-tech">
                       Technologies: {project.technologies}
                     </p>
                     <div className="item-view">
                       <a href={project.linkDemo} target="__blank" rel="noopener noreferrer" className="watch-demo">
                           <LinkIcon fontSize='32px' sx={{ "&:hover": { color: "aqua" } }}/>
                       </a>
                       <a href={project.linkRespository} target="__blank" rel="noopener noreferrer" className="watch-respository">
                           <GitHubIcon sx={{ "&:hover": { color: "aqua" } }} fontSize='32px'/>
                       </a>
    
                     </div>
                   </div>
               </div>
               )})}
               
               
           </div>
       </div>
   </Fade>
     </div>
  )
}

export default Projects