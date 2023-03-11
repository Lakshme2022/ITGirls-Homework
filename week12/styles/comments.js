
const send = document.querySelector('.send');
const name = document.querySelector('.name');
const image = document.querySelector('.image')
const comments = document.querySelector('.comments');
const authorImage = document.querySelector('.author__image');
const authorName = document.querySelector('.author__name');
const authorComments = document.querySelector('.author__comments');

function capitalize(str) {
    return str.replace(/(^|\s)\S/g, (a) => {return a.toUpperCase()})
}

function SEND(){
    if (!name.value || !image.value || !comments.value) {
        alert("Пожалуйста, заполните все поля");
        return;
    }

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

