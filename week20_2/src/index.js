import data from './data.json';

const content = document.querySelector('.content')
const userData = getFromStorage();
let pageIndex = -1; //начинаем с -1, чтобы индексы json и LocalStorage совпадали



function renderCards() {
    const arrKeyData = Object.keys(data)
    content.innerHTML = "";
    let leftBtnName = 'Назад';
    let rightBtnName = 'Вперед';

    if (pageIndex === -1) {
        //Первая страница
        content.innerHTML = '<div class="indent">Мы подготовили чек лист, с помощью которого ты сможешь определить свой уровень знаний и готовность стать Junior Frontend разработчицей</div>' +
            '<div class="pink center indent">Оцени свои Hard skills по 5 бальной шкале, где 5 - знаю отлично, а 1 - не знаю ничего</div>' +
            '<div class="indent personalinfo">' +
            '<input class="info" id="inputName" placeholder="Твое имя" type="text" value="'+userData['name']+'">' +
            '<input class="info" id="inputGroup" placeholder="Твоя группа" type="text" value="'+userData['group']+'">' +
            '</div>';
        leftBtnName = '';

    } else if (pageIndex === arrKeyData.length) {
        // Последняя страница с результатами
        let total_score = 0;
        let total_count = 0;  // Для расчета процента.
        // Считаем оценки
        Object.values(getFromStorage()['scores']).forEach((scores) => {
            scores.forEach((score) => {total_score += score; total_count += 1})
        })
        const final_percent = Number( 100 * total_score / (total_count*5) );

        content.innerHTML = '<div class="result"><h2 class="pink center">Отличная работа, поздравляю!</h2>' +
            '<div class="center"><h3>Твой результат: </h3><h3 class="pink">' + final_percent + ' %</h3></div>' +
            '<div class="center"><h3>что соответствует уровню: </h3><h3 class="pink">' + level(final_percent) + '</h3></div>' +
            '<div class="center"><h2 class="text indent">' + result_phrase(final_percent) + '</h2></div>' +
            '<div class="text">' + suggestion(final_percent) + '</div>'
        rightBtnName = '';
        leftBtnName = 'В начало';
        // Сохраняем результаты в CSV
        saveToCsv();

    } else {
        // Страница с вопросами
        const createDivContent = document.querySelector('div');
        createDivContent.insertAdjacentHTML('beforeend', `<h2>${data[arrKeyData[pageIndex]].title}</h2>`);
        data[arrKeyData[pageIndex]].question.forEach((item, index) => {
            const divQuestion = createQuestion(item, userData['scores'][arrKeyData[pageIndex]][index]);
            content.appendChild(divQuestion);
        });
    }

    const templateBTN = `
            <div class="indent controlbut">
            <button id="left">${leftBtnName}</button>
            <div></div>
            <button id="right">${rightBtnName}</button>
            </div>`;

    content.insertAdjacentHTML('beforeend', templateBTN);

    const left = document.querySelector('#left'); //Левая кнопка
    if (leftBtnName === '') left.style.display = 'none';
    left.addEventListener('click', () => {
        if (validate()) {
            saveToStorage();
            if (pageIndex === arrKeyData.length) pageIndex = -1;
            else pageIndex -= 1;
            renderCards();
        }
    })

    const right = document.querySelector('#right'); //Правая кнопка
    if (rightBtnName === '') right.style.display = 'none';

    if (arrKeyData.length === pageIndex + 1) right.innerText = 'Посчитать';
    right.addEventListener('click', () => {
        if (validate()) {
            saveToStorage(pageIndex);
            pageIndex += 1;
            renderCards();
        }
    })

    function createQuestion(question, value) {
        const div = document.createElement('div')
        div.classList.add('module')
        const template = `
                <div class="question indent">${question}</div>
                <div class="input indent">
                    <input type="range" min="1" max="5" class="slider" value="${value}"> 
                    <div class="numbers"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div></div> 
                </div>`;

        div.insertAdjacentHTML('beforeend', template)
        return div
    }
}

function getFromStorage() {
    const _userData = window.localStorage.getItem('userData');
    if (_userData)
        return JSON.parse(_userData)
    // Если не найден, возвращаем дефолтный объект для дальнейшего сохранения в LocalStorage
    return createObjectInStorage();
}

function createObjectInStorage() {
    // Функция создает дефолтный объект для хранения данных пользователя
    const defaultUserData = {
        name: '',
        group: '',
        scores: {}
    }
    // Создаем структуру похожую на data, с теми же ключами, но с value массивом из оценок (1 по умолчанию)
    for (const key in data) {
        defaultUserData.scores[key] = Array()
        for (const index in data[key]['question']) {
            defaultUserData.scores[key].push(1)
        }
    }
    return defaultUserData;
}

function validate() {
    //функция валидации заполнения полей
    const inputs = document.querySelectorAll('input');
    for (const e of inputs) {
        if (!e.value) {
            const alert = document.createElement('div');
            const controlbut = document.querySelector('.controlbut');
            alert.innerHTML = '<h3 class="center pink">Пожалуйста, сначала заполните все поля!</h3>';
            controlbut.before(alert)
            return false;
        }
    }
    return true;
}

function saveToStorage() {
    // Сохраняет значения input элементов в LocalStorage
    if (pageIndex === -1) {
        //  мы на первой странице
        userData.name = document.getElementById('inputName').value;
        userData.group = document.getElementById('inputGroup').value;
    } else {
        // Все остальные страницы
        if (getAllPoints().length > 0){
            // Но только если есть бегунки
            let key = Object.keys(data)[pageIndex]
            userData.scores[key] = getAllPoints();
        }
    }
    localStorage.setItem('userData', JSON.stringify(userData));
}

function getAllPoints() {
    // Возвращает массив с выставленными оценками на текущей странице
    const a = Array.from( document.getElementsByClassName('slider'));
    return a.map((e) => Number(e.value));
}

function level(final_percent) {
    // Функция расчета проф уровня
    if (final_percent <= 59) {
        return '"Новичок"';
    }
    if (60 <= final_percent <= 79) {
        return '"Стажёр"'
    }
    return '"Младший разработчик"';
}

function result_phrase(final_percent) {
    // Функция возвращает фразу на основе финального количества очков
    if (final_percent <= 59) {
        return 'Ты можешь смело искать предложения по стажировке, но повтори перед этим следующие темы:';
    }
    if (60 <= final_percent <= 79) {
        return 'Перед составлением резюме рекомендую повторить темы:'
    }
    return '<a href="https://www.youtube.com/watch?v=cyfaOAH-CF0">Можешь приступать к подготовке к собеседованию! Жми сюда!</a>';
}

function suggestion(final_percent) {
    if (final_percent >= 80) return '';
    let output = '';
    // Достаем оценки
    let storage_scores = getFromStorage()['scores']
    // Цикл ключей
    Object.keys(storage_scores).forEach((key) => {
        //  цикл оценок + индекс значения
        storage_scores[key].forEach((score, index) => {
            // Добавляем рекомендации
            if (score <= 3) {
                output += '<h3 class="pink">' + data[key]['suggestion'][index] + '</h3>';
            }
        })
    })
    return output;
}

function saveToCsv() {
    let csv_content = '';
    csv_content += 'Имя;' +userData['name'] + ';\n';
    csv_content += 'Группа;' + userData['group'] + ';\n'
    csv_content += ';;\n'
    csv_content += 'Секция/Вопрос;Оценка;\n'

    for (const section_key in userData['scores']) {
        csv_content += section_key  + ';;\n';
        userData['scores'][section_key].forEach((score, index) => {
            csv_content += data[section_key]['question'][index] + ';' + score + ';\n'
        })
    }
    const blob = new Blob([csv_content], { type: 'application/json' });
    saveAs(blob, 'survey_results.csv');

}

document.addEventListener("DOMContentLoaded", function () {
    renderCards()
});

