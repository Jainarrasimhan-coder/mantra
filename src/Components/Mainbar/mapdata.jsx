import React from 'react';
import { Row, Col, Container, Card, Image, Button, Body } from "react-bootstrap";
import ttd from "./logo512.png";

const mapdata = (props) => {
    return <div>
        {
            props.products.map((item) => {

                return (
                    <Col md={3}>
                        <Card>
                            <Image
                                src={ttd}
                                className='card-img-top'
                                alt="cat-img"
                                fluid />
                            <Card.Body>

                                <Card.Title>
                                    TTD-ticket-booking
                                </Card.Title>
                                <Card.Text>This is sample E-cart app where archana ticket can be booked for tirupathi temple.


                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                )
            })
        }


    </div>;
};

export default mapdata;
