import React from 'react'
import { GiTechnoHeart } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = ({ name }) => {
    return (
        <div className='navbar'>
            <Link to="/"><h1>{name} <GiTechnoHeart /></h1></Link>
        </div>
    )
}

export default Navbar