import React, { useEffect, useState } from 'react';
import "./sidebar.css";
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = ({ name }) => {

    const [data, setdata] = useState([]);

    const menhandler = () => {
        const productlist = name.products;
        let store = productlist.filter(i => {
            if (i.gender == "Men") {
                setdata(productlist[i])
                console.log(data)

                return (i)
            }
        }
        )
        console.log(data)
    }

    const womenhandler = () => {
        const productlist = name.products;
        let store = productlist.filter(i => {
            if (i.gender == "Women") {
                return i
            }
        }
        )
    }
    const boyhandler = () => {
        const productlist = name.products;
        let store = productlist.filter(i => {
            if (i.gender == "Unisex") {
                return i
            }
        }
        )
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
                        name.products.map(({ productId, category, inventoryInfo }) => {
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
                        name.products.map(({ productId, brand }) => {
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
