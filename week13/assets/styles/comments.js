
let send = document.querySelector('.send');
let name = document.querySelector('.name');
let image = document.querySelector('.image');
let comments = document.querySelector('.comments');
let avatar = document.querySelector('.author__image');
let authorName = document.querySelector('.author__name');
let authorComments = document.querySelector('.author__comments');
let d = new Date ();
let options ={
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
};

let date = document.querySelector('.author__date');
let radio = document.getElementById('no');
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

let chat = document.querySelector(".chat");


function capitalize(str) {
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}

function SEND(){
    authorName.innerText=capitalize(name.value.toLowerCase()) + ":";
    authorComments.innerText=comments.value;
    name.value='';
    image.value='';
    comments.value='';

    let text = authorComments.innerText;
    text = text.replace(/viagra/gi, "***");
    text = text.replace(/xxx/gi, "***");
    authorComments.innerText = text;
    date.innerText = d.toLocaleString("ru", options);

    if (authorName.innerText === ":" || radio.checked) {
        authorName.innerText = "Username:";
    }

    if (image.value.trim() === ""){
        let randomAvatar = defaultAvatar[Math.floor(Math.random() * defaultAvatar.length)];
        console.log(Math.floor(Math.random() * defaultAvatar.length))
        console.log(randomAvatar)
        avatar.src = 'assets/images/'+randomAvatar;
        console.log(avatar.src)
    } else {
        avatar.src=image.value;
    }
}

send.addEventListener('click', SEND);



