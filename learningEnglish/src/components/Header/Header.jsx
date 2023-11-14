import React from "react";
import {Link} from "react-router-dom";
import logo from "../../style/logo.png";
import './Header.css';

export default function Header() {
       return (
        <div className="header">
            <nav>
                <Link to={"/"} className="logo_link">
                    <img src={logo} alt="Главная"/>
                </Link>
                <Link to={"/game"} className="logo_link">Тренажер</Link>
            </nav>
        </div>
    );
};