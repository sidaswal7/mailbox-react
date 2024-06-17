import React from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

const Header = ()=>{
    return(
        <>
            <header className="flex justify-between items-center py-6 px-10 text-white bg-blue-950 font-sans">
                <h1 className="text-3xl font-semibold">
                    <span className="text-orange-500">Swift</span>Mail
                </h1>
                <Navigation/>
            </header>
            <Sidebar/>
        </>
        
    )
}

export default Header;