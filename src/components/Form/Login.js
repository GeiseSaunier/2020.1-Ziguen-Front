import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import '../../styles/pages/login-registration-form.css';

import Input from '../../components/Form/input';


export default function Login() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (

        <div className="App">

        <Form onSubmit={handleSubmit}>
            <div id="form">
                <h1>Login</h1><br></br>

                <Input className="input-box" type="email" name="email" placeholder="   E-mail"/><br></br>
                <Input className="input-box" type="password" name="password" placeholder="   Senha"/><br></br>

                <button className="login-button" type="submit">Entrar</button><br></br>

                <Link to="../Registration" className="cadastro-link">Ainda não possui cadastro?</Link><br></br>

                <button className="login-with-button" type="button">Entrar com Facebook</button><br></br>
                <button className="login-with-button" type="button">Entrar com Google</button>

            </div>
        </Form>

        </div>
    );
}
