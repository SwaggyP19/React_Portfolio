import React, {useContext, useEffect} from 'react';
import Header from "../components/header/Header";
import Navbar from "../components/navbar/NavBar";
import ProjectList from "../components/project/ProjectList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchProjects} from "../http/projectAPI";



const Main = observer(() => {
    const {project} = useContext(Context);

    useEffect(() => {
        fetchProjects().then(data => project.setProjects(data));
    }, []);


    return (
        <>
            <Navbar/>
        <Header/>
        <div>
            <ProjectList/>
        </div>
        </>
    );
});

export default Main;