import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import '../../styles/pages/login-registration-form.css';

import Input from '../../components/Form/input';

export default function Regisgtration() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (

        <div className="App">

        <Form onSubmit={handleSubmit}>
            <div id="form">
                <h1>Cadastro</h1><br></br>

                <Input className="input-box" type="email" name="email" placeholder="   E-mail"/><br></br>
                <Input className="input-box" type="name" name="name" placeholder="   Nome Completo"/><br></br>
                <Input className="input-box" type="password" name="password" placeholder="   Senha"/><br></br>
                <Input className="input-box" type="password" name="password" placeholder="   Confirmar Senha"/><br></br>
                <Input className="input-box" type="cpf" name="cpf" placeholder="   CPF"/><br></br>

                <button className="login-button" type="submit">Entrar</button><br></br>

            </div>
        </Form>

        </div>
    );
}