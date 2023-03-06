
let send = document.querySelector('.send');
let name = document.querySelector('.name');
let image = document.querySelector('.image')
let comments = document.querySelector('.comments');
let authorImage = document.querySelector('.author__image');
let authorName = document.querySelector('.author__name');
let authorComments = document.querySelector('.author__comments');

function capitalize(str) {
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}

function SEND(){
    if (!name.value) {
        alert("Пожалуйста, заполните все поля");
        return;
    }
    if (!image.value) {
        alert("Пожалуйста, заполните все поля");
        return;
    }
    if (!comments.value) {
        alert("Пожалуйста, заполните все поля");
        return;
    }
    console.log(name.value);
    authorName.innerText=capitalize(name.value.toLowerCase()) + ":";
    authorImage.src=image.value;
    authorComments.innerText=comments.value;
    name.value='';
    image.value='';
    comments.value='';

    let text = authorComments.innerText;
    text = text.replace(/viagra/gi, "***");
    text = text.replace(/xxx/gi, "***");
    authorComments.innerText = text;
}

send.addEventListener('click', SEND);
