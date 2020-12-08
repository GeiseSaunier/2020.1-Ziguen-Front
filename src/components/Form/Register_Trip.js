import React, { useState } from 'react';
import { Form } from '@unform/web';
import '../../styles/pages/adm/register_trip.css';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Form/input';
import api from '../../services/api';

export default function Register_Trip() {
    
    const history = useHistory();
    
    async function handleSubmit(data) {
        console.log(data);
        
        const trip = {
            origin: data.origin,
            destiny: data.destiny,
            hour: data.hour,
            date: data.date,
            user_id: 1,
            price: data.price,
            boat_id: data.boat_id,
        }
        console.log(trip);
        try{
            await api.post('/trips', trip);   
            history.push('/listed_trips')  
            alert('Cadastro feito com sucesso!');
        }catch(err){
            alert('Preencher todos os campos');
        }
        
    }

    const [origin, setOrigin] = useState('');
    const [destiny, setDestiny] = useState('');
    const [boat_id, setBoat_ID] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [price, setPrice] = useState('');

    return (

        <div className="App">

        <Form onSubmit={handleSubmit}>
            <div id="form">
                <div className="fields">
                    <div className="group1">
                    <Input value= {origin} onChange={event => setOrigin(event.target.value) } className="input-box" type="name" name="origem" placeholder=" Origem"/><br></br>
                    <Input value= {destiny} onChange={event => setDestiny(event.target.value) } className="input-box" type="name" name="destino" placeholder=" Destino"/><br></br>
                    <Input value= {boat_id} onChange={event => setBoat_ID(event.target.value) } className="input-box" type="name" name="embarcacao" placeholder=" ID da Embarcação"/><br></br>
                    </div>
                    <div>
                    <Input value= {date} onChange={event => setDate(event.target.value) } className="input-box" type="name" name="data" placeholder=" Data"/><br></br>
                    <Input value= {hour} onChange={event => setHour(event.target.value) } className="input-box" type="name" name="hora" placeholder=" Hora"/><br></br>
                    <Input value= {price} onChange={event => setPrice(event.target.value) } className="input-box" type="name" name="preco" placeholder=" Preço"/><br></br>
                    </div>
                </div>
                <button className="login-button" type="submit">Cadastrar</button><br></br>

            </div>
        </Form>

        </div>
    );
}