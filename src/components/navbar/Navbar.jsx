import React from 'react'
import './navbar.scss';
import Menu from './menu/Menu';

import { BsCodeSlash } from "react-icons/bs";

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'navigation position-fixed shadow ' + (menuOpen && 'active')}>
                <a href='/' className="logo d-flex flex-row align-items-center m-0 ms-4 p-2" data-aos='zoom-in'>
                    <BsCodeSlash className='h1 m-0 me-2' />
                    <p className='fs-3 m-0'>C-G</p>
                </a>
                <Menu className='nav' />
                <div className="hamburger m-0 me-4" onClick={ () => setMenuOpen(!menuOpen) } data-aos='zoom-in'>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
    )
}
