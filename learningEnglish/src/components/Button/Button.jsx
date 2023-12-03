import React from "react";
import './Button.css';

export default function Button({content, handleClickButton, disabled}) {
    return (
    <button disabled={disabled} onClick={handleClickButton}>{content}</button>
    )};