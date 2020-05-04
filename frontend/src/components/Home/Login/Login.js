import React from 'react'
import { useForm } from 'react-hook-form';
import auth from '../CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
const Login = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log('signup data ', data);
        loginUserAtServer(data)

    }
    console.log(errors);

    return (
        <div>
            <center>
            <Row>
    <Col >
      <Image src="https://cdn.pixabay.com/photo/2018/05/21/12/37/restaurant-3418134_960_720.png" style={{ width: '550px', height: '#550px',marginLeft:'300px' }} />
    </Col>
    <Col>
                <Card style={{ width: '18rem', backgroundColor: '#0B5F05',marginLeft:'-400px' }}>   <br />
                    <Card.Img variant="top" src="https://icons-for-free.com/iconfiles/png/512/group+people+team+users+icon-1320196240876938595.png" style={{ width: '5rem', }} />
                    <Card.Body>

                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group controlId="formBasicEmail" >
                                <Form.Label >Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" ref={register({ required: true, pattern: { value: /^\S+@\S+$/i, message: "invalid email address" } })} />
                                <Form.Text className="text-muted">
                                    Please enter your registered email id
                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
            </Button>
                        </Form>

                    </Card.Body>
                </Card>
                </Col>
                </Row>
            </center>
        </div>
    )

    function loginUserAtServer(requestObject) {

        auth.userEmail = requestObject.email;
        let responseObj

        console.log('email entered ', requestObject.email)
        fetch('/api/authenticate/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    props.history.push("/");
                }
                console.log(data[0].role)
                responseObj = data[0];
                if ('cateringUserRole' === data[0].role) {
                    auth.authenticated = true;
                    props.routeHistory.push("/userDashboard");
                } else if ('catererRole' === data[0].role) {
                    auth.authenticated = true;
                    props.routeHistory.push("/catererDashboard");
                } else if ('superadmin' === data[0].role) {
                    auth.authenticated = true;
                    props.routeHistory.push("/superAdminDashboard");
                } else {
                    props.routeHistory.push("/");
                }
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default Login
