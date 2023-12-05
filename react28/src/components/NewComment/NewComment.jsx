import React from "react";
import './NewComment.css';
export default function NewComment({name, img, comment, highlight}) {

    return(
        <div className={highlight ? 'new_comment' : 'comment'}>
            <div className="author">
                <img className="author__image" src={img} alt="Аватар"/>
                <p className="author__name">{name}</p>
            </div>
            <div className="author__comments">{comment}</div>
        </div>
    )
}