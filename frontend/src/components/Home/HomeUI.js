import React, { Component, Fragment } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";

class HomeUI extends Component {
    render() {
        return (
            <Jumbotron style={{ backgroundColor:'#fff' }}>
                <Container>
                    <Row>
                        <Col> <img
                            src="https://freedesignfile.com/upload/2016/01/Chef-with-pizza-vector-material.jpg" /></Col>
                        <Col>
                            <br /><br /><br /><br /><br /><br />
                            <h1 style={{ color:'#B60000',fontSize:'55px',fontWeight:'bold' }}>Users to Caterer Connect</h1>
                            <p> A one stop solution to connect freelancers to company projects. Userss can now choose and work for the projects listed by companys</p>
                            <p><Button style={{ backgroundColor:'#0B5F05' }} href='/login'>Signin</Button></p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default HomeUI;
