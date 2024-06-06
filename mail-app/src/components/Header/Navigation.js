import React from "react";
import { Link } from "react-router-dom";

const Navigation = ()=>{
    return(
        <nav className="flex items-center">
            <ul className="flex mr-5">
                <li className="font-semibold text-lg mr-5 hover:text-yellow-400">
                    <Link to="/home">Home</Link>
                </li>
                <li className="font-semibold text-lg mr-5 hover:text-yellow-400">
                    <Link to="/inbox">Inbox</Link>
                </li>
                <li className="font-semibold text-lg mr-5 hover:text-yellow-400">
                    <Link to="/about">About Us</Link>
                </li>
            </ul>
            <button className="py-1 px-2 bg-orange-500 hover:bg-orange-600 shadow-md rounded-md text-white font-medium">Logout</button>
        </nav>
    )
}

export default Navigation;