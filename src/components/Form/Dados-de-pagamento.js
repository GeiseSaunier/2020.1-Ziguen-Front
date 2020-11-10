import React from 'react';
import { Form } from '@unform/web';
import '../../styles/pages/login-registration-form.css';

import Input from '../../components/Form/input';


export default function PaymentData() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (

        <div className="dados-pagamento">

        <Form onSubmit={handleSubmit}>
            <div id="form">
                <h1>Dados de Pagamento</h1><br></br>
                
                <p>CEP:</p>
                <Input className="input-box" type="text" name="cep" placeholder="   XXXXX-XXXX"/><br></br>
                <p>Número do Cartão:</p>
                <Input className="input-box" type="text" name="card-number" placeholder="   XXXX.XXXX.XXXX"/><br></br>
                <p>Nome do Titular:</p>
                <Input className="input-box" type="text" name="card-holder" placeholder="   Titular do Cartão"/><br></br>
                <p>CPF:</p>
                <Input className="input-box" type="text" name="cpf" placeholder="   XXX.XXX.XXX-XX"/><br></br>
                <p>Data de Validade:</p>
                <Input className="input-box" type="month" name="mes-de-validade" placeholder="   Validade do Cartão"/><br></br>
                <p>CVV:</p>
                <Input className="input-box" type="text" name="cvv" placeholder="     XXX"/><br></br>

                <button className="dados-button" type="submit">Finalizar Cadastro de Dados</button><br></br>

            </div>
        </Form>

        </div>
    );
}
