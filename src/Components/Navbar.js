import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-technology-artificial-intelligence-becris-lineal-color-becris.png"/>
                    <span className="ml-3 text-xl">AA-Tech</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center justify-center">
                    <Link to="/" className="mr-5 text-black font-bold ">Home</Link>
                    <Link to="/About" className="mr-5 text-black font-bold ">About</Link>
                    <Link to="/Resume" className="mr-5 text-black font-bold ">Resume</Link>
                    <Link to="/Contact" className="mr-5 text-black font-bold ">Contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;
