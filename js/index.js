// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const minWeight = document.querySelector('.minweight__input'); // минимальный вес для фильтра
const maxWeight = document.querySelector('.maxweight__input'); // максимальный вес для фильтра
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

// список фруктов в JSON формате
let fruitsJSON = `[
	{"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
	{"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
	{"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
	{"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
	{"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22, "class": "lightbrown"},
	{"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
	{"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
	{"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
	{"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
	{"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22, "class": "lightbrown"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22, "class": "lightbrown"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22, "class": "lightbrown"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22, "class": "lightbrown"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22, "class": "lightbrown"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22, "class": "lightbrown"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22, "class": "lightbrown"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22, "class": "lightbrown"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22, "class": "lightbrown"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22, "class": "lightbrown"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22, "class": "lightbrown"},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "class": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "class": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "class": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "class": "yellow"},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22, "class": "lightbrown"}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {
	// TODO: очищаем fruitsList от вложенных элементов,
	// чтобы заполнить актуальными данными из fruits
	fruitsList.textContent = "";

	for (let i = 0; i < fruits.length; i++) {
		// TODO: формируем новый элемент <li> при помощи document.createElement,
		let li = document.createElement('li');
		li.className = `fruit__item fruit_${fruits[i].class}`;
		let div = document.createElement('div');
		div.className = "fruit__info";

		// формируем элементы <div> с описанием характеристик фруктов
		let index = document.createElement('div');
		let kind = document.createElement("div");
		let color = document.createElement("div");
		let weight = document.createElement("div");

		// заполняем <div> необходимыми данными
		index.textContent = "index: " + i;
		kind.textContent = "kind: " + fruits[i].kind;
		color.textContent = "color: " + fruits[i].color;
		weight.textContent = "weight (кг): " + fruits[i].weight;

		// добавляем стуктуру сформированных элементов в конец списка fruitsList при помощи document.append
		div.append(index);
		div.append(kind);
		div.append(color);
		div.append(weight);

		li.append(div);

		fruitsList.append(li);
	}
};

// первая отрисовка карточек
display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
const shuffleFruits = () => {
	// Вариант 1
	// let result = [];
	// while (fruits.length > 0) {
	// 	// Находим случайный элемент из fruits, используя getRandomInt
	// 	let randomKey = getRandomInt(0, fruits.length-1);
	// 	// вставляем в result и вырезаем его из fruits 
	// 	result.unshift(...fruits.splice(randomKey, 1));
	// }
	// fruits = result;

	// Вариант 2
	// function shuffle(arr){
	// 	let j;
	// 	for(let i = arr.length - 1; i > 0; i--){
	// 		j = Math.floor(Math.random()*(i + 1));
	// 		[arr[j],arr[i]] = [arr[i],arr[j]]
	// 	}
	// 	return arr;
	// }
	// fruits = shuffle(fruits);

	// Вариант 3
	function shuffle(arr) {
		let randomIndex;
		arr.forEach(function (item, currentIndex, arr) {
			randomIndex = Math.floor(Math.random() * (currentIndex + 1));
			[arr[randomIndex], arr[currentIndex]] = [arr[currentIndex], arr[randomIndex]]
		});
		return arr;
	}
	fruits = shuffle(fruits);

};

shuffleButton.addEventListener('click', () => {
	let temp = JSON.stringify(fruits);
	shuffleFruits();
	if (temp === JSON.stringify(fruits)) alert('Порядок не изменился!');
	display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
	let filteredFruits = fruits.filter(item => (item.weight <= maxWeight.value && item.weight >= minWeight.value));
	fruits = filteredFruits;
};

filterButton.addEventListener('click', () => {
	filterFruits();
	display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

// функция сравнения двух элементов по цвету
const comparationColor = (fruit1, fruit2) => {
	const priority = ['черный', 'светло-коричневый', 'розово-красный', 'оранжевый', 'желтый', 'зеленый', 'голубой', 'синий', 'фиолетовый']
	const priority1 = priority.indexOf(fruit1.color);
	const priority2 = priority.indexOf(fruit2.color);
	return priority1 > priority2;
};

// функция сравнения двух элементов по весу
const comparationWeight = (fruit1, fruit2) => {
	return fruit1.weight > fruit2.weight;
};

const sortAPI = {
	//функция сортировки пузырьком
	bubbleSort(arr, comparation) {
		for (let i = 0, endI = arr.length - 1; i < endI; i++) {
			let wasSwap = false;
			for (let j = 0, endJ = endI - i; j < endJ; j++) {
				if (comparation(arr[j], arr[j + 1])) {
					[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
					wasSwap = true;
				}
			}
			if (!wasSwap) break;
		}
		return arr;
	},

	//функция быстрой сортировки
	quickSort(arr, comparation) {
		// функция обмена элементов
		function swap(arr, firstIndex, secondIndex) {
			[arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
		}

		// функция разделитель
		function partition(arr, comparation, left, right) {
			let pivot = arr[Math.floor((right + left) / 2)],
				i = left,
				j = right;
			while (i <= j) {
				while (comparation(pivot, arr[i])) {
					i++;
				}
				while (comparation(arr[j], pivot)) {
					j--;
				}
				if (i <= j) {
					swap(arr, i, j);
					i++;
					j--;
				}
			}
			return i;
		}

		// алгоритм быстрой сортировки
		function quickSortAlg(arr, comparation, left = 0, right = arr.length - 1) {
			let index;
			if (arr.length > 1) {
				index = partition(arr, comparation, left, right);
				if (left < index - 1) {
					quickSortAlg(arr, comparation, left, index - 1);
				}
				if (index < right) {
					quickSortAlg(arr, comparation, index, right);
				}
			}
			return arr;
		}

		// запуск быстрой сортировки
		quickSortAlg(arr, comparation);
	},

	// выполняет сортировку и производит замер времени
	startSort(sort, arr, comparation) {
		const start = new Date().getTime();
		sort(arr, comparation);
		const end = new Date().getTime();
		sortTime = `${end - start} ms`;
	},
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

// переключение типа сортировки 
sortChangeButton.addEventListener('click', () => {
	(sortKind == 'bubbleSort') ? sortKind = 'quickSort' : sortKind = 'bubbleSort';
	// вывод текущего типа сортировки
	sortKindLabel.textContent = sortKind;
});

sortActionButton.addEventListener('click', () => {
	// Вывод в sortTimeLabel значение 'sorting...'
	sortTimeLabel.textContent = 'sorting...';
	const sort = sortAPI[sortKind];
	sortAPI.startSort(sort, fruits, comparationColor);
	display();
	// Вывод в sortTimeLabel значение sortTime
	sortTimeLabel.textContent = sortTime;
});

/*** ДОБАВИТЬ ФРУКТ ***/

// создание и добавление нового фрукта в массив fruits
addActionButton.addEventListener('click', () => {
	// проверяем заполнение всех полей
	if (kindInput.value == 0 || colorInput.value == 0 || weightInput.value == 0) {
		alert('Не заполнено одно из полей при добавлении нового элемента!');
	}
	else {
		fruits.push({ "kind": kindInput.value, "color": colorInput.value, "weight": weightInput.value });
	}
	display();
});
