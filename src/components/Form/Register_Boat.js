import React, { useState } from 'react';
import { Form } from '@unform/web';
import '../../styles/pages/adm/register_trip.css';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Form/input';
import api from '../../services/api';

export default function Register_Owner() {
    
    const history = useHistory();
    
    async function handleSubmit(data) {
        console.log(data);
        
        const boat = {
            name: data.name,
            capacity: data.capacity,
            user_id: 1,
        }
        console.log(boat);
        try{
            await api.post('/boats', boat);   
            history.push('/adm_home')  
            alert('Cadastro feito com sucesso!');
        }catch(err){
            alert('Preencher todos os campos');
        }
        
    }

    const [name, setName] = useState('');
    const [capacity, setCapacity] = useState('');

    return (

        <div className="App">

            <Form onSubmit={handleSubmit}>
                <div id="form">
                    <div className="fields">
                        <div className="group1">
                        <Input value= {name} onChange={event => setName(event.target.value) } className="input-box" type="name" name="name" placeholder=" Nome da Embarcação"/><br></br>
                        </div>
                        <div>
                        <Input value= {capacity} onChange={event => setCapacity(event.target.value) } className="input-box" type="name" name="capacity" placeholder=" Capacidade"/><br></br>
                        </div>
                    </div>
                    <button className="login-button" type="submit">Cadastrar</button><br></br>

                </div>
            </Form>

        </div>
    );
}