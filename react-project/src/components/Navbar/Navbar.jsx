import React from 'react'
import logo from "../../assets/LogoDonRouch.png"
import './Navbar.css'

const Navbar = () => {
    return (
        <header className='navbar'>
            <img src={logo} alt="" />
            <div className='contentNav'>
                <div className='contentSearch'>
                    <div className='search'>
                        <input type="text" placeholder='search' />
                        <button><i class="bi bi-search"></i></button>
                    </div>
                    <div>
                        <button><i class="bi bi-cart"></i></button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar