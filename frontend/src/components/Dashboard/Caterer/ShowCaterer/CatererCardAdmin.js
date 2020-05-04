import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const CatererCardAdmin = (props) => {

    return (
        <div>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={'../' + props.projectData.imageName} style={{ padding: 10 }} />
                <Card.Body>
                    <Card.Title>{props.projectData.catererName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.projectData.catererLocation}|{props.projectData.catererFoodTypeSupported}</Card.Subtitle>
                    <br /><br />
                    <Link to={{
                        pathname: '/catererDashboard/showProjects/modal/modifyProject',
                        projectData: props.projectData
                    }}><Button variant="danger">Modify Details</Button></Link>
                </Card.Body>
                <Card.Footer style={{ backgroundColor:'#0B5F05' }}>
                    <small style={{ color:'#fff' }}>Items starts @  {props.projectData.cateredPricePerItemRiceVeg}</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default CatererCardAdmin
