
const send = document.querySelector('.send');
const name = document.querySelector('.name');
const image = document.querySelector('.image');
const comments = document.querySelector('.comments');

const options ={
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
};

const radio = document.getElementById('no');
const defaultAvatar = [
    "cat_1.avif",
    "cat_2.avif",
    "cat_3.avif",
    "cat_4.avif",
    "cat_5.avif",
    "cat_6.avif",
    "cat_7.avif",
    "cat_8.avif",
    "cat_9.avif",
];

const chat = document.querySelector(".chat");

function capitalize(str) {
    return str.replace(/(^|\s)\S/g, (a) => {return a.toUpperCase()})
}

function SEND(){
    let d = new Date ();

    let correctName = name.value;
    if (correctName === "" || radio.checked) {
        correctName = "Username";
    }

    let avatar = image.value;
    if (avatar.trim() === ""){
        let randomAvatar = defaultAvatar[Math.floor(Math.random() * defaultAvatar.length)];
        avatar = 'assets/images/'+randomAvatar;
    }

    let text = comments.value;
    text = text.replace(/viagra/gi, "***");
    text = text.replace(/xxx/gi, "***");

    if (!comments.value) {
        alert("Пожалуйста, напишите ваш комментарий");
        return;
    }

    let addComment = `<div class="comment">
    <div class="author">
        <img class="author__image" src="${avatar}">
            <p class="author__name">${capitalize(correctName.toLowerCase()) + ":"}</p>
            <p class="author__date">${d.toLocaleString("ru", options)}</p>    
    </div>
        <div class="author__comments">${text}</div>
    </div>`;

    chat.innerHTML = addComment + chat.innerHTML;
    name.value='';
    image.value='';
    comments.value='';
}

send.addEventListener('click', SEND);
