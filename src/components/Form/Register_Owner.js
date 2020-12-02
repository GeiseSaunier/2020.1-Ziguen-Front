import React from 'react';
import { Form } from '@unform/web';
import '../../styles/pages/adm/register_trip.css';

import Input from '../../components/Form/input';

export default function Register_Owner() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (

        <div className="App">

        <Form onSubmit={handleSubmit}>
            <div id="form">
                <div className="fields">
                    <div className="group1">
                    <Input className="input-box" type="name" name="nome" placeholder=" Nome"/><br></br>
                    <Input className="input-box" type="name" name="cpf" placeholder=" CPF"/><br></br>
                    </div>
                    <div>
                    <Input className="input-box" type="name" name="email" placeholder=" E-mail"/><br></br>
                    <Input className="input-box" type="name" name="senha" placeholder=" Senha"/><br></br>
                    </div>
                </div>
                <button className="login-button" type="submit">Cadastrar</button><br></br>

            </div>
        </Form>

        </div>
    );
}