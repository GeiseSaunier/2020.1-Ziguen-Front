import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import '../../styles/pages/login-registration-form.css';
import { useHistory } from 'react-router-dom';


import Input from '../../components/Form/input';
import api from '../../services/api';


export default function Login() {

    const history = useHistory();

    async function handleSubmit(data) {
        
        const travelerData = {
            email:data.email,
            password:data.password
        }

        console.log(travelerData)

        if(travelerData.email == "admin@gmail"){
            try{
                const response =  await api.post('/sessions', travelerData); 
                console.log(response)
                history.push('/adm_home')
                return  alert('Longin feito com sucesso');
            }catch(err){
               return  alert('Email ou senha incorretos.');
            }

        }
        
        try{
            const response =  await api.post('/sessions/trav', travelerData); 
            console.log(response)
            history.push('/home-cliente')
            alert('Longin feito com sucesso');
        }catch(err){
            alert('Email ou senha incorretos.');
        }

    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (

        <div className="App">

        <Form onSubmit={handleSubmit}>
            <div id="form">
                <h1>Login</h1><br></br>

                <Input className="input-box" type="email" value= {email} onChange={event => setEmail(event.target.value) }  name="email" placeholder="   E-mail"/><br></br>
                <Input className="input-box" type="password" value= {password} onChange={event => setPassword(event.target.value) }  name="password" placeholder="   Senha"/><br></br>

                <button className="login-button" type="submit">Entrar</button><br></br>

                <Link to="../Registration" className="cadastro-link">Ainda não possui cadastro?</Link><br></br>

                <button className="login-with-button" type="button">Entrar com Facebook</button><br></br>
                <button className="login-with-button" type="button">Entrar com Google</button>

            </div>
        </Form>

        </div>
    );
}
