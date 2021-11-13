import { Form, Button, Container, Card, Row, Col, Alert } from 'react-bootstrap';
import { useState, Fragment } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './Dashboard';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [alert, setAlert] = useState('');

    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const SubmitLogin = () => {
        const data = {
            email,
            password
        }
        axios.post('https://stackfunapi.herokuapp.com/api/v1/login', data)
            .then(result => {
                if (result) {
                    localStorage.setItem('access token', result.data.access_token);
                    // localStorage.setItem('id ', result.data.id);
                    setRedirect(true);
                }
            })
            .catch(err => {
                setAlert(err.response.data.message);
                setEmail('');
                setPassword('');
                setTimeout(() => {
                    setAlert('');
                }, 3000)
            })
    }

    return (
        <Fragment>
            {
                redirect && (
                    <Navigate to='/dashboard' />
                )
            }
            <Container>
                <Row className="justify-content-md-center" text="dark">
                    <Col sm={7}>
                        <Card className="m-5" bg="light" >
                            <Card.Header className="text-center">Login</Card.Header>
                            <Form className="mt-3 m-4">
                                {
                                    alert && (
                                        <Alert variant="danger">{alert}</Alert>
                                    )
                                }
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={onChangeEmail} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={onChangePassword} />
                                </Form.Group>
                                <Button variant="info text-light" onClick={SubmitLogin}>
                                    Submit
                                </Button>
                                <Link to='/daftar' className="m-4">Halaman Daftar</Link>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Login;

