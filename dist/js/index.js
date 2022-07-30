// Из html  делает выборку всех элементов с селектором '.price__layout'
const priceLayouts = document.querySelectorAll('.price__layout');

let prevDesc = null;
let prevPrice = null;

// Перебираем полученные элементы, так как их несколько и на каждый вешаем слушатель
// У слушателя есть два основных параметра - тип события и функция которая будет вызвана при этом событии
for (let i = 0; i < priceLayouts.length; i++) {
    priceLayouts[i].addEventListener('click', onPriceClick);
}

// Слушатель всегда получает от браузера параметр - событие которое произошло
// это объект с множеством ключей
function onPriceClick(event) {
    // тут сохраняем в переменную элемент на который мы вешали событие в строке 10
    const root = event.currentTarget;
    console.log(event);
    
    // выбираем из содержимого root элемента
    // desc - элемент с текстом
    // pr - элемент с ценой
    const desc = root.querySelector(".price__descr");
    const pr = root.querySelector(".price__number");

    // если в этих переменных уже сохранены предыдущие элементы, то возвращаем им значения по умолчанию
    if (prevDesc !== null && prevPrice !== null) {
        prevDesc.style.color = "#fff";
        prevPrice.style.fontSize = "18px";
        prevPrice.style.color = "#fff";
    }

    desc.style.color = "#018abe";
    pr.style.fontSize = "20px";
    pr.style.color = "#018abe";

    prevDesc = desc;
    prevPrice = pr;
}

console.log(priceLayouts);

const logo = document.querySelector('.nav__logo');

logo.addEventListener('click', onLogoClick);

let isLogoBig = false;

function onLogoClick(event) {
    const root = event.currentTarget;
    const svg = root.querySelector('svg');

    console.log(svg);

    if (isLogoBig) {
        root.style.transform = 'scale(1)';
        svg.setAttribute('fill', '#fff');
        isLogoBig = false;
    } else {
        root.style.transform = 'scale(1.5)';
        svg.setAttribute('fill', '#018abe');
        isLogoBig = true;
    }
    
}