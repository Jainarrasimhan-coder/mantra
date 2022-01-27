import React, { useState, useEffect } from 'react';
import Mainbar from './Mainbar/Mainbar';
import Sidebar from './Sidebar/Sidebar';
import "../App.css";
import axios from "axios";

const Bar = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setdata] = useState([]);
    const [allproducts, setallproducts] = useState([]);

    useEffect(() => {
        axios.get("https://demo7303877.mockable.io/").then(response => {
            setdata(response.data.products);
            setallproducts(response.data.products);
            setLoading(false);

        })
    }, [])

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    console.log(data)
    return (<div>

        <div className='pagewrap'>
            <div className='sidebarwrap'>
                <Sidebar name={data} setdata={setdata} allproducts={allproducts} />

            </div>
            <div className='mainbarwrap'>
                <Mainbar name={data} setdata={setdata} />

            </div>
        </div>
    </div>)
};

export default Bar;
