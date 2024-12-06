import React, {useState} from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import {createProject} from "../../http/projectAPI";


const CreateProject = ({ show, onHide }) => {

    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    }
    const changeInfo = (key,value, number) => {
        setInfo(info.map (i=> i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const addProject = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('img', file)
        formData.append('info', JSON.stringify(info));
        createProject(formData).then(data => onHide())
    }

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add project
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Type project name"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr />
                    <Button variant="outline-dark" onClick={addInfo}>
                        Add new characteristic
                    </Button>
                    {info.map (i =>
                    <Row className="mt-4" key={i.number}>
                        <Col md={4}>
                            <Form.Control
                                value={i.title}
                                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                placeholder="Type characteristic name"
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                value={i.description}
                                onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                placeholder="Type characteristic description"
                            />
                        </Col>
                        <Col md={4}>
                            <Button variant="outline-danger" onClick={() => removeInfo(i.number)}>
                                Delete
                            </Button>
                        </Col>
                    </Row>
                        )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-d" onClick={onHide}>
                    Close
                </Button>
                <Button variant="outline-success" onClick={addProject}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateProject;