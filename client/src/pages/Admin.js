import React from 'react';
import HeaderAdmin from '../components/header/HeaderAdmin';
import NavBar from '../components/navbar/NavBar';
import { Container, Button } from 'react-bootstrap';
import CreateProject from '../components/modals/CreateProject';
import DeleteProject from "../components/modals/DeleteProject";

const Admin = () => {
    const [projectVisible, setProjectVisible] = React.useState(false);

    return (
        <>
            <NavBar />
            <HeaderAdmin />
            <Container className="mt-5 d-flex flex-column">
                <h2 className="title-1">Actions</h2>

                <Button
                    variant="outline-dark"
                    className="p-5 mt-2 mb-5 text-bg-dark fs-4"
                    onClick={() => setProjectVisible(true)}
                >
                    Add project
                </Button>
                <DeleteProject />
                <CreateProject
                    show={projectVisible}
                    onHide={() => setProjectVisible(false)}
                />
            </Container>

        </>
    );
};

export default Admin;