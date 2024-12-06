import React, { useEffect, useState } from 'react';
import {Button, Card, Col, Container, Modal, Row} from 'react-bootstrap';
import { deleteProject, fetchProjects } from '../../http/projectAPI';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then(data => setProjects(data));
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteProject(id);
            setProjects(projects.filter(project => project.id !== id));
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <Container className="mt-5"> {/* Добавляем отступ сверху */}
            <Row>
                {projects.map(project => (
                    <Col key={project.id} md={4} className="mb-4">
                        <Card style={{ zIndex: 1 }}> {/* Устанавливаем z-index для карточек */}
                            <Card.Img variant="top" src={`${process.env.REACT_APP_API_URL}${project.img}`} />
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Button variant="danger" onClick={() => handleDelete(project.id)}>
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProjectList;