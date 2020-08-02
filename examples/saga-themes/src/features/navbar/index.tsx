import React from 'react'
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { useThemeContext } from "features/theme-provider";
import "./index.scss";

export const Navbar = () => {
    const { theme, onSwitch } = useThemeContext();

    return (
        <div className="navbar">
            <div className="navbar__start">
                <NavLink exact to="/">root</NavLink>
                <NavLink exact to="/details">details</NavLink>
            </div>
            <div className="navbar__end">
                <button
                    type="button"
                    className={cn("navbar__switcher", theme)}
                    onClick={onSwitch}
                />
            </div>
        </div>
    )
}