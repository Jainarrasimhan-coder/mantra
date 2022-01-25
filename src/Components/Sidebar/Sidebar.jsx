import React from 'react';
import "./sidebar.css";
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = () => {
    return (
        <div>
            <div className='filter'>Filters</div>
            <div className='radio'>
                <input type="radio" id="html" name="fav_language" value="men" />
                <label for="html">Men</label><br />

                <input type="radio" id="css" name="fav_language" value="women" />
                <label for="css">Women</label><br />
                <input type="radio" id="javascript" name="fav_language" value="boys" />
                <label for="javascript">Boys</label><br />
                <input type="radio" id="javascript" name="fav_language" value="girls" />
                <label for="javascript">Girls</label>


            </div>
            <div>
                <div className='filter'>
                    categories
                    <SearchIcon className='icon' />
                </div>
                <div className='radio'>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="t shirts" />
                    <label for="vehicle1"> T Shirts <span className='value'> (123)</span></label>
                    <br />
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="tops" />
                    <label for="vehicle2"> Tops<span className='value'> (123)</span></label><br />
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="dresses" />
                    <label for="vehicle3"> Dresses<span className='value'> (123)</span></label><br />

                </div>
            </div>
            <div>
                <div className='filter'>
                    brand
                    <SearchIcon className='icons' />
                </div>
                <div className='radio'>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="t shirts" />
                    <label for="vehicle1"> T Shirts <span className='value'> (123)</span></label>
                    <br />
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="tops" />
                    <label for="vehicle2"> Tops<span className='value'> (123)</span></label><br />
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="dresses" />
                    <label for="vehicle3"> Dresses<span className='value'> (123)</span></label><br />

                </div>
            </div>
            <div>
                <div className='filter'>
                    price
                    <SearchIcon className='icons' />
                </div>
                <div className='radio'>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="t shirts" />
                    <label for="vehicle1"> T Shirts <span className='value'> (123)</span></label>
                    <br />
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="tops" />
                    <label for="vehicle2"> Tops<span className='value'> (123)</span></label><br />
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="dresses" />
                    <label for="vehicle3"> Dresses<span className='value'> (123)</span></label><br />

                </div>
            </div>
        </div>


    )
};

export default Sidebar;
