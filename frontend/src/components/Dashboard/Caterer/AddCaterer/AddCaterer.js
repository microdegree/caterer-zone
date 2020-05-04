import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../../../Home/CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const AddCaterer = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        callServerToAddInfo(data)

        props.history.push('./catererDashboard')
    }
    console.log(errors);

    return (
        <div>
            <center>
                <Card style={{ width: '48rem',backgroundColor:'#0B5F05',marginTop:'30px' }}>

                    <Card.Body>
                        {props.location.fileNameImage}

                        <Form onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group controlId="catererName" style={{ color:'#fff' }}>
                                <Form.Label>Caterer Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Caterer name" name="catererName" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="catererLocation" style={{ color:'#fff' }}>
                                <Form.Label>Caterer Location</Form.Label>
                                <Form.Control type="text" placeholder="Enter Location" name="catererLocation" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="catererAddress" style={{ color:'#fff' }}>
                                <Form.Label>Caterer Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter Caterer Address" name="catererAddress" ref={register({ required: true, maxLength: 400 })} />
                            </Form.Group>

                            <Form.Group controlId="catererContact" style={{ color:'#fff' }}>
                                <Form.Label>Caterer Contact</Form.Label>
                                <Form.Control type="text" placeholder="Enter Contact Info" name="catererContact" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="catererFoodTypeSupported" style={{ color:'#fff' }}>
                                <Form.Label>Food Type Serviced</Form.Label>
                                <Form.Control type="text" placeholder="Veg/Non-Veg/Both" name="catererFoodTypeSupported" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="cateredPricePerItemStarterVeg" style={{ color:'#fff' }}>
                                <Form.Label>Starter Veg - Price Per item per head</Form.Label>
                                <Form.Control type="number" placeholder="Curry - 12 Rs per head" name="cateredPricePerItemStarterVeg" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="cateredPricePerItemCurryveg" style={{ color:'#fff' }}>
                                <Form.Label>Curry Veg  - Price Per item per head</Form.Label>
                                <Form.Control type="number" placeholder="Curry - 3 Rs per head" name="cateredPricePerItemCurryveg" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="cateredPricePerItemRiceVeg" style={{ color:'#fff' }}>
                                <Form.Label>RiceItem Veg  - Price Per item per head</Form.Label>
                                <Form.Control type="number" placeholder="Curry - 2 Rs per head" name="cateredPricePerItemRiceVeg" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>


                            <Form.Group controlId="cateredPricePerItemStarterNonVeg" style={{ color:'#fff' }}>
                                <Form.Label>Starter Non-Veg - Price Per item per head</Form.Label>
                                <Form.Control type="number" placeholder="Curry - 12 Rs per head" name="cateredPricePerItemStarterNonVeg" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="cateredPricePerItemCurryNonveg" style={{ color:'#fff' }}>
                                <Form.Label>Curry Non-Veg  - Price Per item per head</Form.Label>
                                <Form.Control type="number" placeholder="Curry - 3 Rs per head" name="cateredPricePerItemCurryNonveg" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="cateredPricePerItemRiceNonVeg" style={{ color:'#fff' }}>
                                <Form.Label>RiceItem Non-Veg  - Price Per item per head</Form.Label>
                                <Form.Control type="number" placeholder="Curry - 2 Rs per head" name="cateredPricePerItemRiceNonVeg" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="cateredPricePerItemDessert" style={{ color:'#fff' }}>
                                <Form.Label>Dessert  - Price Per item per head</Form.Label>
                                <Form.Control type="number" placeholder="Curry - 2 Rs per head" name="cateredPricePerItemDessert" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <br /> <br /> <br />
                            <Button variant="primary" type="submit">
                                Submit
                             </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </center>
        </div>
    )

    function callServerToAddInfo(requestObject) {

        requestObject = { ...requestObject, "email": auth.userEmail, "imageName": props.location.fileNameImage }
        console.log('call server 1 ', requestObject)

        fetch('/api/admin/addProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject)
        })
            .then(res => res.json())
            .then(data1 => console.log('data from update ', data1))
            .catch(error => console.log('Error while adding Info ', error))

    }

}

export default AddCaterer
