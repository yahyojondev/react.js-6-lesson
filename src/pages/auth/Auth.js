import React from 'react'
import {Navigate, Outlet} from "react-router-dom"

function Auth() {
    let user = "john"
    return user ? <Outlet/> : <Navigate replace to = {"/login"}/>
 
}

export default Auth