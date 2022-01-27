import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Card, Image, Button, Body } from "react-bootstrap";
import axios from "axios";

const Mainbar = ({ name }) => {




    return <div>

        <div>
            <Container>
                <Row>
                    {
                        name.products.map(item => {
                            return (
                                <Col md={3}>
                                    <Card>
                                        <Image
                                            src={item.images[0].src}
                                            className='card-img-top'
                                            alt="cat-img"
                                            fluid />
                                        <Card.Body>

                                            <Card.Title>
                                                {item.brand}
                                            </Card.Title>
                                            <Card.Text>{item.productName}


                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                </Col>
                            )
                        })

                    }
                </Row>
            </Container>

        </div>
    </div>;
};

export default Mainbar;
