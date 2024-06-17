import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = ()=>{
    const unreadMails = useSelector((state)=>state.emailState.unreadMails)
    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
    return(
        <nav className="absolute">
            { isLoggedIn && <ul className="bg-cyan-100 px-10 pt-24 pb-40">
                <li className="mb-10 ml-7">
                    <Link to="/inbox" className="text-xl font-semibold">Inbox{unreadMails>0 && <span>({unreadMails})</span>}</Link>
                </li>
                <li className="mb-10 ml-7">
                    <Link to="/sent" className="text-xl font-semibold">Sent</Link>
                </li>
                <li>
                    <Link to="/composemail" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded shadow-md font-semibold">Compose Mail</Link>
                </li>
            </ul>}
        </nav>
    )
}

export default Sidebar;