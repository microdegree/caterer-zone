import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
const Footer = () => {
    return (
        <footer >
            <Row style={{ 'background-color': '#0B5F05', 'padding': '25px' }}>
                <Col style={{ color:'#fff' }}>
                    <h3>CatererZone</h3>
                    <Image src="https://cdn0.iconfinder.com/data/icons/people-occupations-icons-rounded/110/Chef-1-512.png" style={{ width: '150px', height: '150px' }} />
                </Col>
                <Col style={{ color:'#fff' }}>
                    <h4>Useful Links</h4>
                    <ul><li><a href="/" style={{ color:'#fff' }}>Home</a></li>
                        <li><a href="/about" style={{ color:'#fff' }}>About us</a></li>
                    </ul>
                </Col>
                <Col style={{ color:'#fff' }}>
                    <h4>Contact Us</h4>
                    <p>ShivKumar <br></br>
                        MCA Final Year<br></br>
                        NMAMIT , Nitte<br></br>
                        <strong>Phone:</strong> +91 987 654 3210<br></br>
                        <strong>Email:</strong> ShivKumar@gmail.com<br></br>
                    </p>
                </Col>
            </Row>
        </footer >
    )
}

export default Footer
