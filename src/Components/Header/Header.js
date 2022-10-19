import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBeer } from 'react-icons/fa';
import { AuthContext } from '../../Usercontext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-zinc-500 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase no-underline text-slate-300"
                        to="/">
                        Hotel California
                    </Link>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <FaBars></FaBars>
                    </button>
                </div>

                <span className='text-white font-bold'>{user?.email}</span>

                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-center">
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="rooms"
                            ><span className="ml-2">Rooms</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="orders">
                                <span className="ml-2">Orders</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="about">
                                <span className="ml-2">About us</span>
                            </Link>
                        </li>
                    </ul>
                    {
                        user?.uid ? <button className="btn bg-transparent text-white" onClick={handleLogOut}>Sign Out</button> : <Link to='login'><button className="btn bg-transparent text-white">Login/Signup</button></Link>
                    }

                </div>

            </div>
        </nav>

    );
};

export default Header;
