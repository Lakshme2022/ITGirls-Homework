import React from "react";
import './Button.css';

export default function Button({content, handleClickButton}) {
    return (
    <button onClick={handleClickButton}>{content}</button>
    )};