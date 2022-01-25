import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Card, Image, Button, Body } from "react-bootstrap";
import ttd from "./logo512.png";
// import { fetchData } from './api';
import axios from "axios";
import mapdata from './mapdata';
const url = "https://demo7303877.mockable.io/";


const fetchData = async () => {
    try {
        const { data: { products, filters, sortOptions, totalCount } } = await axios.get(url);
        return {
            filters,
            products,
            sortOptions,
            totalCount,
        }
    }
    catch (err) {

    }
}

const Mainbar = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        const getdata = async () => {
            const fetchedData = await fetchData();

            setdata(fetchedData)
        }
        getdata();
    }, [])

    console.log(data)
    return <div>
        <div>
            <Container>
                <Row>
                    <mapdata info={data} />




                </Row>
            </Container>

        </div>
    </div>;
};

export default Mainbar;
