import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import '../../styles/pages/login-form.css';

import Input from '../../components/Form/input';


export default function Login() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (

        <div className="App">

        <Form onSubmit={handleSubmit}>
            <h1>Login</h1>

            <Input type="email" name="email" placeholder="email"/>
            <Input type="password" name="password" placeholder="email"/>

            <button type="submit">Entrar</button>

            <Link to="../" className="ajuda-link">Ainda não possui cadastro?</Link>

            <button type="button">Entrar com Facebook</button>
            <button type="button">Entrar com Google</button>

        </Form>

        </div>
    );
}
