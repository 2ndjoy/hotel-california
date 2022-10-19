import React from 'react';
import { FaBed } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Room = ({ data }) => {
    console.log(data)
    const { name, picture, bed, price } = data;
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure><img src={picture} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex items-center gap-2'><FaBed></FaBed> <p> {bed}</p></div>
                <p>Price: Tk {price}</p>
                <div className="card-actions justify-end">
                    <Link to="/orders"><button className="btn btn-primary">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Room;