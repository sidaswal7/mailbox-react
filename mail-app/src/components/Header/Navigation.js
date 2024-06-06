import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/AuthSlice";

const Navigation = ()=>{
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
    return(
        <nav className="flex items-center">
            {isLoggedIn && <ul className="flex mr-5">
                <li className="font-semibold text-lg mr-5 hover:text-yellow-400">
                    <Link to="/home">Home</Link>
                </li>
                <li className="font-semibold text-lg mr-5 hover:text-yellow-400">
                    <Link to="/inbox">Inbox</Link>
                </li>
                <li className="font-semibold text-lg mr-5 hover:text-yellow-400">
                    <Link to="/about">About Us</Link>
                </li>
            </ul>}
            { isLoggedIn && <button className="py-1 px-2 bg-orange-500 hover:bg-orange-600 shadow-md rounded-md text-white font-medium" onClick={()=>dispatch(logout())}>Logout</button>}
        </nav>
    )
}

export default Navigation;