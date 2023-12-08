import React from 'react'
import logo from "../../assets/LogoDonRouch.png"
import cart from "../../assets/cart.png"
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <div className='navbar'>
                <Link to={'/'}>
                    <img src={logo} alt="" />
                </Link>
                
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Don Rouch</a>
                    <a href="#">Jewels</a>
                    <a href="#">Custom</a>
                    <a href="#">Mentions</a>
                    <a href="#">Contact</a>
                </nav>
            </div>

            <div className='content'>
                <div className='boxSearch'>
                    <button><i className="bi bi-search"></i></button>
                    <input type="text" placeholder='Search' />
                </div>
                <div className='Cart'>
                    <div className='boxCart'>
                        <a href="">
                            <img src={cart} alt="" />
                            <span>0</span>
                        </a>
                    </div>

                </div>

            </div>





        </header>
    )
}

export default Navbar