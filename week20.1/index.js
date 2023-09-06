const questions = {
  "beginner": [
    "Что такое TCP/IP, из каких уровней состоят и какие протоколы содержит. (В частности Ethernet, IP, TCP)",
    "Что такое HTML. Базовые элементы разметки. Семантика SEO-оптимизация и доступность",
    "Что такое CSS. Базовые свойства стилизации. Позиционирование элементов макета. Flexbox. Grid. Адаптивность посредством составления @media запросов. Псевдоэлементы и псевдоклассы. Методология БЭМ",
    "Основы языка программирования JavaScript. Типы данных. Циклы, Условия, Работа с объектами. Функции. Прототипы и наследование. Работа с объектами. Методы массивов",
    "Умеешь ли ты пользоваться программными средствами, аналогичными Slack, для организации коммуникации и совместной работы",
    "Имеешь ли ты практический опыт и навыки работы с инструментами, подобными Trello, для организации рабочих процессов и управления задачами",
  ],
  "trainee": [
    "Умеешь работать с браузерным окружением и DOM (Document Object Model). Браузерные события. Обработка ошибок (Try/Catch). Пользовательские ошибки. Модульная система. Экспорт и импорт. Web API",
    "Что делает JavaScript — асинхронным. Промисы. Fetch API. Синтаксический сахар — Async и Await",
    "Cross-Origin Resource Sharing (CORS). Request & Response Headers",
    "Что такое линтеры. Pre-commit Check",
    "Как работает система управления версиями (Git). Регистрация на GitHub. Коммиты. Репозитории. Merge Requests. Checkout. Ветки",
    "Что такое Node.js. Как работает менеджер пакетов Npm. package.json и package-lock.json. npm install, npm uninstall",
    "Что такое препроцессор. SASS и SCSS. Переменные. Импорты. Вложенность. Модули. Миксины",
    "Обладаешь ли ты навыками работы с редактором Figma или аналогичными инструментами в сфере дизайна или прототипирования",
    "Каков уровень вашего знакомства и опыта использования фреймворка Bootstrap и других подобных для разработки веб-интерфейсов",
  ],
  "junior": [
    "Что такое сборщик модулей. Babel. Настройка Webpack. Правила. Модули. Плагины. DevServer. Переход к Vite",
    "Что такое React и какие проблемы он решает. Жизненный цикл компонентов. Особенности виртуального DOM-дерева. React компоненты. Базовые хуки. React Refs. JSX синтаксис. Props & State",
    "Особенности FLUX архитектуры. Reducers. Actions. Хук useContext. Redux и Redux Toolkit. Redux Thunk. RTK Query. (По желанию можно изучить MobX и/или Zustand)",
    "Что такое роут. Из чего состоит объект Location. Библиотека React Router",
    "Как повысить эффективность стилизации. Что такое UI библиотека. MaterialUI",
  ]
};

function range() {
  return  '<div class="input indent">' +
      '<input type="range" min="1" max="5" class="slider" value="1">' +
      '<div class="numbers"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>' +
      '</div>' +
      '</div>';
}

function render(page) {
  const content = document.getElementById('content');
  const prev =  document.getElementById('prev');
  const next =  document.getElementById('next');
  const data = loadFromStorage();


  switch (page) {
    default:
      content.innerHTML = '<div class="indent">Мы подготовили чек лист, с помощью которого ты сможешь определить свой уровень знаний и готовность стать Junior Frontend разработчицей</div>' +
          '<div class="pink center indent">Оцени свои Hard skills по 5 бальной шкале, где 5 - знаю отлично, а 1 - не знаю ничего</div>' +
          '<div class="indent personalinfo">' +
          '<input class="info" id="name" placeholder="Твое имя" type="text" value="'+data['name']+'">' +
          '<input class="info" id="group" placeholder="Твоя группа" type="text" value="'+data['group']+'">' +
          '</div>';
      prev.style.display = 'none';
      next.style.display = 'inline';
      prev.innerText = 'Назад';
      next.innerText = 'Вперед';
      next.onclick = () => {
        const name = document.getElementById('name');
        const group = document.getElementById('group');

        if (!name.value || !group.value) {
          alert('Пожалуйста, сначала заполните все поля!');
        }  else {
          data['name'] = name.value;
          data['group'] = group.value;
          saveToStorage(data)
          render('beginner')
        }
      };
      break

    case "beginner":
      content.innerHTML = '<h2 class="pink">Первый уровень: Beginner (Новичок)</h2>';
      questions[page].forEach( (q) => {
            content.innerHTML += '<div class="module"> <div class="indent">' + q + '</div>' + range();
          }
      )
      prev.style.display =  'inline';
      prev.onclick = () => {render()};
      next.onclick = () => {
        data['scores'][page] = getAllPoints();
        saveToStorage(data);
        render('trainee')
      };
      break

    case "trainee":
      content.innerHTML = '<h2 class="pink">Второй уровень: Trainee (Стажёр)</h2>';
      questions[page].forEach( (q) => {
            content.innerHTML += '<div class="module"> <div class="indent">' + q + '</div>' + range();
          }
      )
      prev.style.display = 'inline';
      prev.onclick = () => {render('beginner')};
      next.onclick = () => {
        data['scores'][page] = getAllPoints();
        saveToStorage(data);
        render('junior')
      };
      next.innerText = 'Вперед';
      break

    case "junior":
      content.innerHTML = '<h2 class="pink">Третий уровень: Junior (Младший разработчик)</h2>';
      questions[page].forEach( (q) => {
            content.innerHTML += '<div class="module"> <div class="indent">' + q + '</div>' + range()
            next.innerText = 'Посчитать';
          }
      )
      prev.style.display = 'inline';
      prev.onclick = () => {render('trainee')};
      next.onclick = () => {
      data['scores'][page] = getAllPoints();
      saveToStorage(data);
      save();
      render('result')
      };
      break

    case "result":

      content.innerHTML = '<div class="result"><h2 class="pink center">Отличная работа, поздравляю!</h2>' +
          '<div class="center"><h3>Твой результат: </h3><h3 class="pink">' + count() + ' %</h3></div>' +
          '<div class="center"><h3>что соответствует уровню: </h3><h3 class="pink">' + level() + '</h3></div>' +
          '<div class="center"><h2 class="text indent">' + conclusion() +'</h2></div>' +
          '<div class="text">' +call() + '</div>'
      prev.style.display = 'inline';
      prev.innerText = 'В начало';
      prev.onclick = () => {render('start')};
      next.style.display = 'none';
  }
  Array.from( document.getElementsByClassName('slider')).forEach(
      (element, index) => {
        element.value = data['scores'][page][index];
      });

}

document.addEventListener("DOMContentLoaded", function (event) {
  render();
  call();
});


function saveToStorage(data) {
  window.localStorage.setItem('checklist_data', JSON.stringify(data));
}


function loadFromStorage() {
  const points = window.localStorage.getItem('checklist_data')
  if (points) {
    return JSON.parse(points)
  }
    return {
    'scores': {
      "beginner": [1, 1, 1, 1, 1, 1
      ],
      "trainee": [1, 1, 1, 1, 1, 1, 1, 1, 1
      ],
      "junior": [1, 1, 1, 1, 1
      ]
    },
    'name': '',
    'group': ''
  };

}

function getAllPoints() {
  const a = Array.from( document.getElementsByClassName('slider'));
  return a.map((e) => Number(e.value));
}

function count() {
  let total = 0;
  Object.values(loadFromStorage()['scores']).forEach((e) => {e.forEach((v) => {total += v;})
  })
  return total;
}

function level() {
  if (count() <= 59) {
    return '"Новичок"';
  }
  if (count() >= 60 && count() <= 79) {
    return '"Стажёр"'
  }
  if (count() >= 80) {
    return '"Младший разработчик"';
  }
}

function conclusion() {
  if (count() <= 59) {
    return 'Ты можешь смело искать предложения по стажировке, но повтори перед этим следующие темы:';
  }
  if (count() >= 60 && count() <= 79) {
    return 'Перед составлением резюме рекомендую повторить темы:'
  }
  if (count() >= 80) {
    return '<a href="https://www.youtube.com/watch?v=cyfaOAH-CF0">Можешь приступать к подготовке к собеседованию! Жми сюда!</a>';
  }
}

  function call() {
    if (count() >= 80) {
      return '';
    }
   const q = Object.values(questions);
   let output = '';
   Object.values(loadFromStorage()['scores']).forEach((e, i) => {e.forEach((v, ii) => {
      if ((v) <= 3) {
        output += '<h3 class="pink">' + q[i][ii] + '</h3>';
      }
    })});
  return output;
 }

 function save(){
   const info = loadFromStorage();
   const jsonInfo = JSON.stringify(info);
   const blob = new Blob([jsonInfo], { type: 'application/json' });
   // saveAs(blob, 'info.json');
   console.log('info.json');
 }


