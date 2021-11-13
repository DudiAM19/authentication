import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Daftar = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState('');
    const [error, setError] = useState('');
    const url = 'https://stackfunapi.herokuapp.com/api/v1/register';

    const Register = () => {
        axios.post(url, {
            name,
            email,
            password
        })
        .then(result => {
            if(result){
                console.log(result);
                if(result.data){
                    setName('');
                    setEmail('');
                    setPassword('');
                    setAlert(result.statusText);
                    setTimeout(() =>{
                        setAlert('');
                    }, 3000)
                }
            }
        })
        .catch(e => {
            console.log(e.data.email);
        })
    }
    

    return (
        <Container>
            <Row className="justify-content-sm-center">
                <Col sm={7}>
                    <Card className="m-5" text="dark" bg="light">
                        <Card.Header className="text-center" >Register</Card.Header>
                        <Form className="mt-3 m-4" onSubmit={Register}>
                            {
                                alert && (
                                    <Alert variant="success">{alert}</Alert>
                                )
                            }
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Button variant="info text-white" onClick={Register}>
                                Daftar
                            </Button>
                            <Button variant="danger" className="m-2">
                                <Link to="/" className="text-light">Batal</Link>
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Daftar;