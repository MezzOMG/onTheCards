import React, { useState } from 'react';
import Form from 'react-bootstrap';
import Button from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled.div`

`

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    function handleSubmit(event){
        event.preventDefault();
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId='loginForm.email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type='email' 
                        placeholder='name@example.com' 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                </Form.Group>
                <Form.Group controlId='login'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type='password' 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                </Form.Group>
                <Button block size='lg' type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    )
}

export default Login;