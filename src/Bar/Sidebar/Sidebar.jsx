import React, { useEffect, useState } from 'react';
import "./sidebar.css";
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = ({ name, setdata, allproducts }) => {


    const menhandler = () => {
        const productlist = allproducts;
        let store = productlist.filter(i => {
            if (i.gender === "Men") {
                return (i)
            }
        }
        )

        console.log(store)
        setdata(store);

    }

    const womenhandler = () => {
        const productlist = allproducts;
        let store = productlist.filter(i => {
            if (i.gender === "Women") {
                console.log(i)
                return i
            }
        }
        )
        setdata(store);

    }
    const boyhandler = () => {
        const productlist = allproducts;
        let store = productlist.filter(i => {
            if (i.gender === "Unisex") {
                return i
            }
        }
        )
        setdata(store);

    }

    return (
        <div>
            <div className='filter'>Filters</div>
            <div className='radio'>
                <input type="radio" id="html" name="fav_language" value="men" onChange={menhandler} />
                <label for="html" >Men </label><br />



                <input type="radio" id="css" name="fav_language" value="women" onChange={womenhandler} />
                <label for="css" >Women</label><br />
                <input type="radio" id="javascript" name="fav_language" value="boys" onChange={boyhandler} />
                <label for="javascript" >Unisex</label><br />



            </div>
            <div>
                <div className='filter'>
                    categories
                    <SearchIcon className='icon' />
                </div>
                <div className='radio'>
                    {
                        name.map(({ productId, category, inventoryInfo }) => {
                            return (
                                <div>
                                    < input type="checkbox" id={productId} name="vehicle1" value="t shirts" />
                                    <label for="vehicle1"> {category} <span className='value'> ({inventoryInfo[0].inventory})</span></label>
                                    <br />
                                </div>


                            )
                        })
                    }


                </div>

            </div>
            <div>
                <div className='filter'>
                    Brand
                    <SearchIcon className='icon' />
                </div>
                <div className='radio'>
                    {
                        name.map(({ productId, brand }) => {
                            return (
                                <div>
                                    < input type="checkbox" id={productId} name="vehicle1" value="t shirts" />
                                    <label for="vehicle1"> {brand}</label>
                                    <br />
                                </div>


                            )
                        })
                    }


                </div>

            </div>

        </div>


    )
};

export default Sidebar;
