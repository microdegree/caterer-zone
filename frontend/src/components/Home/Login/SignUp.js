import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
const SignUp = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log('signup data ', data);
        updateSignupInfoInServer(data)

    }
    console.log(errors);

    return (
        <div>
                  <Row>
    <Col >
      <Image src="https://cdn.pixabay.com/photo/2018/05/21/12/37/restaurant-3418134_960_720.png" style={{ width: '550px', height: '#550px',marginLeft:'300px' }} />
    </Col>
    <Col>
            <center>
                <Card style={{ width: '28rem', backgroundColor: '#0B5F05',marginLeft:'-400px' }}>   <br />
                    <Card.Img variant="top" src="https://icons-for-free.com/iconfiles/png/512/group+people+team+users+icon-1320196240876938595.png" style={{ width: '5rem', }} />
                    <Card.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group controlId="formBasicSignupFullName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Full Name" name="name" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>
                            <Form.Group controlId="formBasicSignupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" ref={register({ required: true, pattern: { value: /^\S+@\S+$/i, message: "invalid email address" } })} />
                            </Form.Group>
                            {errors.email && errors.email.message}
                            <Form.Group controlId="formBasicSignupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>
                            <select name="role" ref={register({ required: true })}>
                                <option value="cateringUserRole">Users</option>
                                <option value="catererRole">Caterer</option>
                                <option value="superadmin">SuperAdmin</option>
                            </select>
                            <br /> <br /> <br />
                            <Button variant="primary" type="submit">
                                Submit
              </Button>
                        </Form>
                    </Card.Body>
                </Card>
               
            </center>
            </Col>
                </Row>
        </div>
    )


    function updateSignupInfoInServer(requestObject) {

        auth.userEmail = requestObject.email;

        console.log('email entered ', requestObject.email)
        fetch('/api/authenticate/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {

                if ('cateringUserRole' === requestObject.role) {
                    auth.authenticated = true;
                    console.log('in patient flow signup')
                    props.routeHistory.push("/userDashboard");
                } else if ('catererRole' === requestObject.role) {
                    auth.authenticated = true;
                    props.routeHistory.push("/catererDashboard");
                } else if ('superadmin' === requestObject.role) {
                    auth.authenticated = true;
                    props.routeHistory.push("/superAdminDashboard");
                }
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }

}

export default SignUp
