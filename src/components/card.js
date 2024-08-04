import React from 'react'; // Імпортуємо React
import './card.css'; // Імпортуємо стилі

const Card = ({ item, id, handleClick }) => {
	// Визначаємо клас для картки в залежності від її стану
	const itemClass = item.state ? " active " + item.state : "";

	return (
		<div className={"card" + itemClass} onClick={() => handleClick(id)}> {/* Обробка кліку на картку */}
			<img src={item.image} alt={item.id} /> {/* Відображення зображення картки */}
		</div>
	);
}

export default Card;
