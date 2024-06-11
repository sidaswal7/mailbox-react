import React from "react";
import { Link } from "react-router-dom";

const HomePage = ()=>{
    return(
        <div>
            <h1 className="text-center my-20 text-5xl font-semibold">Welcome to <span className="text-orange-500">SwiftMail</span> </h1>
            <div className="flex justify-center items-center">
            <Link to="/composemail" className="mt-2 bg-cyan-500 text-white px-4 py-2 font-semibold hover:bg-cyan-600 shadow-md rounded">Compose Mail</Link>
            </div>
        </div>
    )
}

export default HomePage;