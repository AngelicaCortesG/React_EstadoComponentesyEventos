import React from 'react'
import { useState } from 'react';
import Alert from './Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState(false)
    const [loginMessage, setLoginMessage] = useState('')
    const isForEmpty = !email || !contraseña;

    const handleEmailChange = (e) => {
        setEmail(e.target.value.trim());
    };

    const handleContraseñaChange = (e) => {
        setContraseña(e.target.value.trim());
    };
 
    const handleSunbmit = (e) => {
        e.preventDefault();
        if (email === 'a.cortes.godoy@gmail.com' && contraseña === '123456') {
            console.log('inicio de sesión exitoso');
            setLoginMessage('Inicio de Sesión Exitoso')
            setError(true)
            return

        } else {
            setContraseña('');
            setEmail('');
            setLoginMessage('Usuario y/o contraseña incorrectos')
            console.log('fallo');
            setError(false)
        }
        setError(true);
    }
    return (
        <Form className="formulario" onSubmit={handleSunbmit} >
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <h1>FORMULARIO DE VALIDACIÓN</h1>
                <Form.Label>Ingresa tu e-mail</Form.Label>
                <Form.Control type="email" placeholder="Email" name="email" onChange={handleEmailChange} value={email} />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Ingresa tu contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" name="contraseña" onChange={handleContraseñaChange} value={contraseña} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isForEmpty} >
                Iniciar Sesión
            </Button>
            <Alert mal={error && (
                <div className={loginMessage === 'Inicio de Sesión Exitoso' ? 'bien' : 'error'}>
                    {loginMessage}
                </div>
            )} />
        </Form>
    );
}

export default Login


