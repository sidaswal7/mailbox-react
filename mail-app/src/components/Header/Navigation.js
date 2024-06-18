import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../store/AuthSlice";

const Navigation = ()=>{
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
    const history = useHistory()
    const logoutHandler = ()=>{
        dispatch(logout());
        history.replace("/home")

    }
    return(
        <nav className="flex items-center">
            {isLoggedIn && <ul className="flex mr-5">
                <li className="font-semibold text-lg mr-6 hover:text-orange-500">
                    <Link to="/home">Home</Link>
                </li>
                <li className="font-semibold text-lg mr-6 hover:text-orange-500">
                    <Link to="/inbox">Inbox</Link>
                </li>
                <li className="font-semibold text-lg mr-6 hover:text-orange-500">
                    <Link to="/about">About Us</Link>
                </li>
            </ul>}
            { isLoggedIn && <button className="py-1 px-3 bg-orange-500 hover:bg-orange-600 shadow-md rounded-md text-white font-medium" onClick={logoutHandler}>Logout</button>}
        </nav>
    )
}

export default Navigation;