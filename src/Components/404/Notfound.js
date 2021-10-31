import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg'

const Notfound = () => {
    return (
        <div>
            <img src={notfound} alt="" />
            <br />
            <br />
            <Link to='/home'>
                
            <button className='btn btn-warning text-white'>Go Back</button>
            </Link>
        </div>
    );
};

export default Notfound;