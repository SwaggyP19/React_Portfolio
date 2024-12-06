import React from 'react';
import NavBar from "../components/navbar/NavBar";

const Skills = () => {
    return (
        <>
            <NavBar />
        <main className="section">
            <div className="container">
                <h1 className="title-1">Skills</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>
                            ReactJS, HTML, CSS, Axios, React-router-dom, MobX
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>NodeJS, PostgreSQL, Express, Sequalize</p>
                    </li>
                </ul>
            </div>
        </main>
        </>
    );
};

export default Skills;