import React from 'react';
import { Form } from '@unform/web';
import '../../styles/pages/login.css';

import Input from '../../components/Form/input';


function Login() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (

        <div className="App">

        <Form onSubmit={handleSubmit}>
            <Input type="email" name="email"/>
            <Input type="password" name = "password"/>

            <button type="submit">Enviar</button>

        </Form>

        </div>
    );
}