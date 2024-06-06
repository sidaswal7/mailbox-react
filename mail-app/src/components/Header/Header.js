import React from "react";
import Navigation from "./Navigation";

const Header = ()=>{
    return(
        <header className="flex justify-between items-center py-8 px-10 text-white bg-blue-950">
            <h1 className="text-3xl font-semibold">
                MyMail.com
            </h1>
            <Navigation/>
        </header>
    )
}

export default Header;