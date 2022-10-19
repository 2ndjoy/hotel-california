import React from 'react';
import './Footer.css';
import { FaBeer, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer-pin mt-5 sm:w-42'>
            <footer className="footer items-end p-4 bg-neutral text-neutral-content content-container">
                <div className="items-center grid-flow-col">
                    <img src={require('./hotel.png')} className="h-6 bg-slate-400 m-4" />
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 place-self-center justify-self-end">
                    <a href="https://www.facebook.com/"><FaFacebook> </FaFacebook></a>
                    <a href="https://www.instagram.com/"> <FaInstagram></FaInstagram> </a>
                    <a href="https://www.youtube.com/"> <FaYoutube></FaYoutube> </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;