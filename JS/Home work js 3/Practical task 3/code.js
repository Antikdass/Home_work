//a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
let main_header = document.getElementById('main_header');
main_header.style.color = 'red';

//b) робить шириниу елементу ul 400px
let ull = document.getElementsByTagName('ul');
for (let i = 0; i < ull.length; i++) {
    ull[i].style.width = '200px';
}

//c) робить шириниу всіх елементів з класом linkList шириною 50%
let link = document.getElementsByClassName('linkList');
for (let i = 0; i < link.length; i++) {

    link[i].style.width = '50%';
}

//d) отримує текст який зберігається в елементі з класом listElement2
let text = document.getElementsByClassName('listElement2');
console.log(text)

//e) отримує всі елементи li та змінює ім колір фону на сірий

let liBgColor = document.getElementsByTagName('li');
for (let i = 0; i < liBgColor.length; i++) {
    liBgColor[i].style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let classA = document.getElementsByTagName('a');
for (let i = 0; i < classA.length; i++) {
    classA[i].classList.add('ancor')
}

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (var i = 0; i < classA.length; i++) {
    if (classA[i].textContent === 'link3') {
        classA[i].style.width = '40px';

    }
}

//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let i = 0; i < classA.length; i++) {
    classA[i].classList.add('element_XXX')
    classA[i].innerText = 'XXX';
}
console.log(classA.classList)

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let sub = document.getElementsByClassName('sub-header');
for (let i = 0; i < sub.length; i++) {
    console.log(sub[i].textContent)


}
let aColor = prompt("Введи цифру кольорьору на який хочеш змінити: 1) рожевий, 2) синій, 3) оранджевий")
if (aColor === '1') {
    for (let i = 0; i < sub.length; i++) {
        sub[i].style.backgroundColor = 'pink';
    }
} else if (aColor === '2') {
    for (let i = 0; i < sub.length; i++) {
        sub[i].style.backgroundColor = 'blue';
    }
} else {
    for (let i = 0; i < sub.length; i++) {
        sub[i].style.backgroundColor = 'orange';
    }
}


//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (let i = 0; i < sub.length; i++) {
    sub[i].textContent
    if (sub[i].textContent === 'content 2 segment') {
        let bColor = prompt("Введи цифру кольорьору на який хочеш змінити текст: 1) білий, 2) томатний, 3) зелений")
        if (bColor === '1') {
                sub[i].style.color = 'white';
        } else if (bColor === '2') {
                sub[i].style.color = 'tomato';
        } else  sub[i].style.color = 'green';
        }
    }

    //k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
    let content = document.getElementsByClassName('content_1');
    let newText = prompt("Введіть любий текст");
    for (let i = 0; i <content.length; i++){
        content[i].innerText = newText;
    }

    //l) отримати елементи p та змінити їм padding на 20px
    let pElement = document.getElementsByTagName('p');
    for (let i = 0; i < pElement.length; i++) {
        pElement[i].style.padding = '20px';
    }

    //m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
    let renameText = document.getElementsByClassName('text2');


























//     2) Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

for( const rul of rules ){
    if (typeof rul === 'object') {
        
        let div = document.createElement('div');
         div.innerHTML = `<h2> ${rul.title} </h2> <p> ${rul.body} </p>`;
        document.body.appendChild(div);
    }
    
}


//DOP--------------DOP--------------DOP--------------DOP--------------DOP--------------DOP--------------DOP--------------

//- Дано 2 масиви з рівною кількістю об'єктів. Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" . Записати цей об'єкт в новий масив
let arrayNew = [];
let object = {};
for (let user of usersWithId){
    for (let cities of citiesWithId){
        if (user.id===cities.user_id) {
            let f = Object.assign(user,cities)
            arrayNew.push(f)
             
        }
    }
}
console.log(arrayNew)