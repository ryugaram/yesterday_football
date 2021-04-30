import React from 'react';
import '../Css/Nav.css'
import {Link}
    from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav">
            <ul className="ul">
                <li><Link to="/" className="active" >Home</Link></li>
                <li><Link to="/ENGLAND">England</Link></li>
                <li><Link to="/SPAIN">Spain</Link></li>
                <li><Link to="/GERMANY">Germany</Link></li>
                <li><Link to="/FRANCE">France</Link></li>
                <li><Link to="/ITALY">Italy</Link></li>
                <li><Link to="/KOREA">korea</Link></li>
                <li><Link to="/COPA">COPA</Link></li>
            </ul>
        </div>
    );
};

export default Nav;