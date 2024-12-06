import React from 'react';
import './style.css'
import {useNavigate} from 'react-router-dom'
import {PROJECT_ROUTE} from "../../utils/consts";

const ProjectItem = ({project}) => {
    const history = useNavigate()
    console.log(history)
    return (
        <div className="projects">
            <li className="project" onClick={() => history(PROJECT_ROUTE + '/' + project.id)}>
                <img src={process.env.REACT_APP_API_URL + project.img} alt={project.name} className="project__img" />
                <h3 className="project__title">{project.name} </h3>
            </li >
        </div>
    );
};

export default ProjectItem;