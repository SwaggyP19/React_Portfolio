import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import './style.css'
import ProjectItem from "./ProjectItem";

const ProjectList = observer(() => {
    const {project} = useContext(Context);

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <div className="project1">
                    {project.projects.map(project =>
                        <ProjectItem key={project.id} project={project}/>
                    )}
                </div>
            </div>
        </main>
    );
})

export default ProjectList;