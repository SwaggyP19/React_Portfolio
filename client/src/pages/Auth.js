import React, {useContext} from 'react';
import {MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import '../styles/login.css'
import NavBarAuth from "../components/navbar/NavBarAuth";
import {login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button} from "react-bootstrap";
import {Navigate, useNavigate} from "react-router-dom";




const Auth = observer(() => {
    const {user} = useContext(Context);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();


    const signIn =  async () => {
        try {
            let data;
            data = await login(email, password)
            user.setUser(user)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    return (
        <>
            <NavBarAuth/>
        <main className="main">
            <form className="login-form js-login">
                <logo className="login-form__logo"><strong>Your</strong> portfolio</logo>
                <div className="login-form__login input">
                    <svg className="input__icon"   height="20" viewBox="0 0 20 20" fill="none">
                    </svg>
                    <input
                        className="input__field"
                        type="text"
                        name="login"
                        placeholder="EMAIL"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="login-form__password input">
                    <svg className="input__icon"  height="20" viewBox="0 0 20 20" fill="none">

                    </svg>
                    <input
                        className="input__field"
                        type="password"
                        name="password"
                        placeholder="PASSWORD"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <a href className="login-form__forgot">Forgot password?</a>
                <a href="#" className="login-form__submit" onClick={signIn}>Sign In</a>
                <span className="login-form__create">Not registered?
                    <a href={REGISTRATION_ROUTE}
                       className="login-form__createAccount">Create an account</a></span>
            </form>
        </main>
        </>
    );
});

export default Auth;