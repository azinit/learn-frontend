import React from 'react'
import { NavLink } from "react-router-dom";
import "./index.scss";

export const Navbar = () => (
    <div className="navbar">
        <NavLink exact to="/">root</NavLink>
        <NavLink exact to="/details">details</NavLink>
    </div>
)