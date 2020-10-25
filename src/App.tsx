import React from 'react';
import { Form } from '@unform/web';
import './styles/pages/login.css';
import Input from './components/Form/input';


import Routes from './routes';

import './styles/global.css';

function App() {
  return (
    <Routes />
  );
}

function Login() {

  function handleSubmit() {
    console.log();
}

return (
    <div className="Login">

    <Form onSubmit={handleSubmit}>
        <Input type="email" name="email"/>
        <Input type="password" name = "password"/>

        <button type="submit">Enviar</button>

    </Form>

    </div>
  
  )
}

export default App;
