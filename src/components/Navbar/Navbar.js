import React from "react";
import {Link} from "react-router-dom";

function Navbar(){

    let userId=5;

    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={{pathname:"/users/"+userId}}>User</Link></li>
        </ul>
    )
}

export default Navbar;