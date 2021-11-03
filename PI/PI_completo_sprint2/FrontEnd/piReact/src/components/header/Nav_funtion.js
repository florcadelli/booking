import React from 'react'
import {useHistory, useLocation} from "react-router-dom";
import UserEntry from "./UserEntry";
import UserData from "./UserData";

export default function Nav_function () {
    
    const location = useLocation();

    return (<>
        {location.pathname === "/logedin" ? <UserData /> : <UserEntry />}
    </>);
}