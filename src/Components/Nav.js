import React from 'react';
import '../Css/Nav.css'
import {Link}
    from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav">
            <ul className="ul">
                <li><Link className="active"  to="/">Home</Link></li>
                <li><Link to="/England">England</Link></li>
                <li><Link to="/Spain">Spain</Link></li>
                <li><Link to="/Germany">Germany</Link></li>
                <li><Link to="/France">France</Link></li>
                <li><Link to="/Italy">Italy</Link></li>
                <li><Link to="/korea">korea</Link></li>
                <li><Link to="/etc">etc</Link></li>
            </ul>
        </div>
    );
};

export default Nav;