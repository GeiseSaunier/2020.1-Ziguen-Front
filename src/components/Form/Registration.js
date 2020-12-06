import React, { useState, FormEvent }  from 'react';
import { Form } from '@unform/web';
import '../../styles/pages/login-registration-form.css';
import { useHistory } from 'react-router-dom';


import Input from './input';
import api from '../../services/api';


export default function Registration() {

    const history = useHistory();

  
    async function handleSubmit(data) {

        const traveler ={
            name: data.name, 
            cpf: data.cpf,
            email: data.email,
            telephone: data.telephone,
            password: data.password,
            password1: data.password1
        }

        if(password1 != password){
            alert('As senhas informadas são incopativeis');
            return  history.push('/Registration') 
        }

        try{
            const travelerReturn = await api.post('/travelers', traveler);   
            history.push('/Login')  
            alert('Cadastro feito com sucesso!');
            console.log(travelerReturn)
        }catch(err){
            alert('Preencher todos os campos');
        }
       
    }

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');

    return (

        <div className="App">

        <Form onSubmit={handleSubmit}>
            <div id="form">
                <h1>Cadastro</h1><br></br>

                <Input className="input-box" type="name" value= {name} onChange={event => setName(event.target.value) } name="name" placeholder="   Nome Completo"/><br></br>
                <Input className="input-box" type="cpf" value= {cpf} onChange={event => setCpf(event.target.value) } name="cpf" placeholder="   CPF"/><br></br>
                <Input className="input-box" type="telephone" value= {telephone} onChange={event => setTelephone(event.target.value) }  name="telephone" placeholder=" Telephone"/><br></br>
                <Input className="input-box" type="email" value= {email} onChange={event => setEmail(event.target.value) }  name="email" placeholder="   E-mail"/><br></br>
                <Input className="input-box" type="password" value= {password} onChange={event => setPassword(event.target.value) }  name="password" placeholder="   Senha"/><br></br>
                <Input className="input-box" type="password" value= {password1} onChange={event => setPassword1(event.target.value) } name="password1" placeholder="   Confirmar Senha"/><br></br>
               
                <button className="login-button" type="submit">Entrar</button><br></br>
 
            </div>
        </Form> 

        </div>
    );
}