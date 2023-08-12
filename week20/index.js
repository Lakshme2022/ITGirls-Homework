
const find = document.getElementById('find');
const title = document.getElementById('title');
const num = document.getElementById('num');
const load = document.getElementById('load')
const content = document.getElementById('content');
const errorData = document.getElementById('error');


function getInfo() {
    errorData.innerText = '';
    content.innerText = '';
    load.innerText = '... Загрузка ...';

    fetch(`https://swapi.nomoreparties.co/${title.value}/${num.value}`)
        .then((resonse) => {
            if (resonse.ok === true) {
                return resonse.json()
            } else {
                return Promise.reject(resonse.status)
            }
        })
        .then((data) => {
            content.innerText = data.title ? `Title: ${data.title}` : `Name: ${data.name}`;
        })
        .catch((error) => {
            errorData.innerText = `Ошибка: ${error}`;
        })
        .finally(() => {
            load.innerText = '';

        })

}

find.addEventListener('click', getInfo);
