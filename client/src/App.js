import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import ScrollToTop from './utils/ScrollToTop';
import { observer } from 'mobx-react-lite';
import { check } from './http/userAPI';
import { Context } from './index';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
    const { user } = useContext(Context);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        check()
            .then(data => {
                user.setUser(user);
                user.setIsAuth(true);
            })
            .finally(() => setLoading(false));
    }, [user]);

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }



    return (
        <BrowserRouter>
            <ScrollToTop />
            <AppRouter />
            <Footer />
        </BrowserRouter>
    );
});

export default App;