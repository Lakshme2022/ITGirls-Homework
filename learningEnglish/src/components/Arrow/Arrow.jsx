import React from "react";
import './Arrow.css';

export default function Arrow(prop) {
    const arrowIcon = prop.direction === 'right' ? '\u2192' : '\u2190';

    return (
        <button className="round" onClick={() => prop.direction === 'right' ? prop.handleClick(1) : prop.handleClick(-1)}>
            <div className="arrow">{arrowIcon}</div>
        </button>
    );
}
