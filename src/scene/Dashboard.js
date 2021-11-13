import { Container } from 'react-bootstrap'
import NavbarHead from "../component/Navbar";
import { Navigate } from 'react-router';
// import { useState, useEffect } from 'react';
// import * as axios from 'axios';

const Dashboard = () => {

    const token = localStorage.getItem('access token');
    // console.log('token ', token);

    if(!token) {
        return <Navigate to='/' />
    }

    return (
        <div>
            <NavbarHead />
            <Container>
                <h1 className="m-2">Welcome</h1>
            </Container>
        </div>
    )
}

export default Dashboard;