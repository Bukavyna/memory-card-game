import React, { useState, useEffect } from 'react'; // Імпортуємо необхідні модулі з React
import Card from './card'; // Імпортуємо компонент Card

import './cards.css'; // Імпортуємо стилі

// Імпортуємо зображення
import image1 from './images/image1.png';
import image2 from './images/image9.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';
import image8 from './images/image10.png';

const Cards = ({ incrementMoveCount, onFirstClick, onGameFinish }) => {
	// Визначаємо стан для карток
	const [items, setItems] = useState([
		{ id: 1, image: image1, state: "" },
		{ id: 1, image: image1, state: "" },
		{ id: 2, image: image2, state: "" },
		{ id: 2, image: image2, state: "" },
		{ id: 3, image: image3, state: "" },
		{ id: 3, image: image3, state: "" },
		{ id: 4, image: image4, state: "" },
		{ id: 4, image: image4, state: "" },
		{ id: 5, image: image5, state: "" },
		{ id: 5, image: image5, state: "" },
		{ id: 6, image: image6, state: "" },
		{ id: 6, image: image6, state: "" },
		{ id: 7, image: image7, state: "" },
		{ id: 7, image: image7, state: "" },
		{ id: 8, image: image8, state: "" },
		{ id: 8, image: image8, state: "" }
	].sort(() => Math.random() - 0.5)); // Перемішуємо картки

	const [prev, setPrev] = useState(-1); // Індекс попередньої вибраної картки
	const [firstClick, setFirstClick] = useState(false); // Фіксуємо перший клік

	useEffect(() => {
		// Перевіряємо, чи всі картки відкриті правильно
		if (items.every(item => item.state === "correct")) {
			onGameFinish(); // Завершуємо гру
		}
	}, [items, onGameFinish]);

	// Функція для перевірки карток
	function check(current) {
		if (items[current].id === items[prev].id) {
			// Якщо картки співпали, встановлюємо стан "correct"
			items[current].state = "correct";
			items[prev].state = "correct";
			setItems([...items]);
			setPrev(-1); // Скидаємо попередню картку
		} else {
			// Якщо картки не співпали, встановлюємо стан "wrong"
			items[current].state = "wrong";
			items[prev].state = "wrong";
			setItems([...items]);
			setTimeout(() => {
				// Повертаємо картки в початковий стан через 1 секунду
				items[current].state = "";
				items[prev].state = "";
				setItems([...items]);
				setPrev(-1); // Скидаємо попередню картку
			}, 1000);
		}
	}

	// Обробка кліку на картку
	function handleClick(id) {
		if (!firstClick) {
			setFirstClick(true); // Встановлюємо перший клік
			onFirstClick(); // Запускаємо таймер
		}

		if (prev === -1) {
			// Якщо немає попередньої вибраної картки, встановлюємо поточну як активну
			items[id].state = "active";
			setItems([...items]);
			setPrev(id); // Запам'ятовуємо поточну картку як попередню
		} else {
			incrementMoveCount(); // Збільшуємо лічильник ходів
			check(id); // Перевіряємо, чи співпадають картки
		}
	}

	return (
		<div className="container">
			{items.map((item, index) => (
				<Card key={index} item={item} id={index} handleClick={handleClick} /> // Рендеримо картки
			))}
		</div>
	);
}

export default Cards;
