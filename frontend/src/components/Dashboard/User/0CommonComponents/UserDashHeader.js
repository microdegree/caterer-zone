import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
const UserDashHeader = (props) => {
    return (
        <div>
        <Navbar style={{ backgroundColor:'#0B5F05' }}>
        <Row>
                    <Col>
                    <Link exact to="/userDashboard">  <Navbar.Brand href="#home" style={{ color:'#fff' }}>CatererZone</Navbar.Brand></Link>
            </Col>
            <Col style={{ marginLeft:'900px',color:'#fff' }}>
            <Nav className="mr-auto">
            <Link exact to="/userDashboard" ><Nav.Link href="#home" style={{ color:'#fff' }}>Home</Nav.Link></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/userDashboard/myOrders"> <Nav.Link href="#features" style={{ color: '#fff',width:'150px'}}>My Orders</Nav.Link></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button
                        onClick={() => {
                            auth.logout(() => {
                                props.logout.push("/");
                            });
                        }}
                    >
                        Logout
                    </Button> 
            </Nav>
            </Col>
                </Row>
        </Navbar>
    </div>
      
    )
}

export default UserDashHeader
