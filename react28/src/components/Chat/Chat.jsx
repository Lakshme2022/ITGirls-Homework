import React from "react";
import './Chat.css';
import NewComment from "../NewComment/NewComment";

export default function Chat({comments}) {

    return(
        <aside>
            <h3>Чат</h3>
            <div className="chat">
                {comments.map((item, index) =>
                    <NewComment name={item.name} img={item.img} comment={item.comment} key={index} highlight={index === 0}/>)
                }
            </div>
        </aside>
    )
}