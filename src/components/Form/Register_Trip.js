import React from 'react';
import { Form } from '@unform/web';
import '../../styles/pages/adm/register_trip.css';

import Input from '../../components/Form/input';

export default function Register_Trip() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (

        <div className="App">

        <Form onSubmit={handleSubmit}>
            <div id="form">

                <Input className="input-box" type="name" name="origem" placeholder=" Origem"/><br></br>
                <Input className="input-box" type="name" name="destino" placeholder=" Destino"/><br></br>
                <Input className="input-box" type="name" name="embarcacao" placeholder=" Número da Embarcação"/><br></br>
                <Input className="input-box" type="name" name="data" placeholder=" Data"/><br></br>
                <Input className="input-box" type="name" name="hora" placeholder=" Hora"/><br></br>
                <Input className="input-box" type="name" name="preco" placeholder=" Preço"/><br></br>

                <button className="login-button" type="submit">Cadastrar</button><br></br>

            </div>
        </Form>

        </div>
    );
}