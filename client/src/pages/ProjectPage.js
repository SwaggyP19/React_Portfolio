import React, { useEffect, useState } from 'react';
import NavBar from '../components/navbar/NavBar';
import '../styles/main.css';
import { useParams } from 'react-router-dom';
import { fetchOneProject } from '../http/projectAPI';

const ProjectPage = () => {
    const [project, setProject] = useState(null); // Инициализируем состояние как null
    const [loading, setLoading] = useState(true); // Добавляем состояние загрузки
    const [error, setError] = useState(null); // Добавляем состояние ошибки
    const { id } = useParams();

    useEffect(() => {
        setLoading(true); // Устанавливаем состояние загрузки в true
        setError(null); // Сбрасываем состояние ошибки
        fetchOneProject(id)
            .then(data => {
                setProject(data);
                setLoading(false); // Устанавливаем состояние загрузки в false после успешной загрузки
            })
            .catch(error => {
                setError(error); // Устанавливаем состояние ошибки
                setLoading(false); // Устанавливаем состояние загрузки в false
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>; // Отображаем загрузочный индикатор
    }

    if (error) {
        return <div>Error loading project: {error.message}</div>; // Отображаем сообщение об ошибке
    }

    return (
        <>
            <NavBar />
            <main className="section">
                <div className="container">
                    <div className="project-details">
                        <h1 className="title-1">{project.name}</h1>
                        <img
                            src={`${process.env.REACT_APP_API_URL}${project.img}`}
                            alt={project.title}
                            className="project-details__cover"
                        />
                    </div>
                    <div className="project-details">
                        <div className="project-details__desc">
                            {project.info && project.info.length > 0 ? (
                                project.info.map(info => (
                                    <p key={info.id}>{info.title}: {info.description}</p>
                                ))
                            ) : (
                                <p>No information available</p>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProjectPage;