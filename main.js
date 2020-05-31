console.log('Siema');
const name = 'Maaciek';
const age = 21;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);

const emptyParagraph = document.querySelector('.emptyPargraph--js');
emptyParagraph.innerHTML = 'Ta treśc jest wstawiona za pomocą JS';

function calculate(dupa) {
    console.log(`Dostalem ${dupa}`);
    return dupa * 7;
}

const wynik = calculate(1);
console.log(`Wynik funkcji = ${wynik}`);

const glowa = document.querySelector('.section__heading--js');
glowa.innerHTML = "Wyniki wyszukiwania? - ta cała tresc dodana przez js";

function zmieniaZdanie(element1, element2) {
    glowa2 = document.querySelector(element1);
    glowa2.innerHTML = element2;
}

// zmieniaZdanie('.search__box--js', '<span style="background: red">Zmienilem zdanie w pudelku oraz background na czerwono</span>')

/*Poniżej wstawie nową klasę do elementu, ta klasa będzie mieć swoje style zmieniające wygląd elementu*/

const button = document.querySelector('.button--js');

button.addEventListener('click', () => {
    const chwytamElement = document.querySelector(".section__heading");
    chwytamElement.classList.toggle('zmiana--js');
});

// Poniżej kod do MENU hamburgera

const buttonMenu = document.querySelector(".hamburger--js");

buttonMenu.addEventListener('click', () => {
    const chwytam = document.querySelector(".navigation--js");
    chwytam.classList.toggle('navigation--open--js');
});

const numberOne = 42;
const numberTwo = 42;
const nameOne = 'Maaciek';
let nameTwo = 'Stefan';

nameTwo = nameOne;

console.log(nameOne);
console.log(nameTwo);

const humanOne = {
    name: 'Stefan',
    age: 32,
    tall: 170.1,
}

console.log(humanOne.name);

console.log(typeof humanOne.tall);

humanOne.tall = "Piotr";
console.log(typeof humanOne.tall);

console.log(humanOne);

function hello(name, age) {
    return console.log(`Nazywasz sie ${name} i masz ${age} lat.`)
}


hello("Rysiu", 20);