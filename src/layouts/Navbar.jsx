import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';
import UseNav from '../hooks/useNav';

const navItems = [
    {path: '#header', name: 'home'},
    {path: '#service', name: 'service'},
    {path: '#portfolio', name: 'portfolio'},
    {path: '#about', name: 'about'}
];

const Navbar = () => {
    const [pathName, setPathName] = useState('#header');
    const {distance} = UseNav();
    
    return (
        <nav className={`${distance >= 100 ? 'nav-background-show ' : 'nav-background-hide '}`}>
            <label className='logo'>
                AroundWorld
                <FontAwesomeIcon id='bar-icon' icon={faGlobe} />
            </label>
            <input type="checkbox" id="toggler" />
            <label className="nav-toggler-icon" htmlFor="toggler">
                <FontAwesomeIcon id='bar-icon' icon={faBars} />
            </label>
            <ul className='navigations'>
                {navItems.map(({path, name}) => 
                    <li onClick={()=>setPathName(path)} key={name} className='nav-item'>
                        <a className={`${pathName.includes(path) && 'active'}`} href={path}>{name}</a>
                    </li>
                    )}
            </ul>
        </nav>
    );
};

export default Navbar;