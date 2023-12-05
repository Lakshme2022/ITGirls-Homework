import React from "react";
import {useState} from "react";
import './Content.css';
import Chat from "../Chat/Chat";
import cat_1 from "./images/cat_1.avif";
import cat_2 from "./images/cat_2.avif";
import cat_3 from "./images/cat_3.avif";
import cat_4 from "./images/cat_4.avif";
import cat_5 from "./images/cat_5.avif";
import cat_6 from "./images/cat_6.avif";
import cat_7 from "./images/cat_7.avif";
import cat_8 from "./images/cat_8.avif";
import cat_9 from "./images/cat_9.avif";

export default function Content() {
    const [stName, setStName] =useState('');
    const [stImg, setStImg] = useState('');
    const [stComment, setStComment] =useState('');
    const [comments, setComments] = useState([]);
    const ignore = [/viagra/gi, /xxx/gi,];
    const defaultAvatar = [cat_1, cat_2, cat_3, cat_4, cat_5, cat_6, cat_7, cat_8, cat_9,];


    function handleClickButton() {
        let randomAvatar = defaultAvatar[Math.floor(Math.random() * defaultAvatar.length)];

        function capitalize(str) {
            return str.replace(/(^|\s)\S/g, (a) => {
                return a.toUpperCase()
            })
        }

        if (stComment === "") {
            alert("Пожалуйста, напишите ваш комментарий");
            return;
        }
        let _comment = stComment;
        for (const pattern of ignore) {
            _comment = _comment.replace(pattern, '***');
        }

        setComments([{
            name: capitalize(stName.toLowerCase()) + ":",
            img: stImg.trim() ? stImg : randomAvatar,
            comment: _comment},
            ...comments]);
        }

        return(
                    <main>
                        <section>
                            <h3>Оставьте ваш комментарий</h3>
                            <label>Введите ваши ФИО:</label>
                            <input type="text" className="name" value={stName} onChange={(e) => setStName(e.target.value)}/>
                            <label>Введите ссылку вашего аватара:</label>
                            <input type="text" className="image" value={stImg} onChange={(e) =>  setStImg(e.target.value)}/>
                            <label>Оставьте комментарий:</label>
                            <textarea className="comments" value={stComment} onChange={(e) =>  setStComment(e.target.value)}></textarea>
                            <button className="send" onClick={handleClickButton}>Отправить</button>
                        </section>
                        <Chat comments={comments}/>
                    </main>
    )
}