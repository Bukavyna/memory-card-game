import React, { useState, useEffect } from 'react'; // Імпортуємо необхідні модулі з React
import './stopwatch.css'; // Імпортуємо стилі

const StopWatch = ({ start, stop }) => {
	const [minutes, setMinutes] = useState(0); // Визначаємо стан для хвилин
	const [seconds, setSeconds] = useState(0); // Визначаємо стан для секунд

	useEffect(() => {
		let interval;
		if (start && !stop) {
			// Запускаємо інтервал, якщо таймер запущений і гра не завершена
			interval = setInterval(() => {
				setSeconds(prevSeconds => {
					if (prevSeconds === 59) {
						setMinutes(prevMinutes => prevMinutes + 1); // Збільшуємо хвилини
						return 0; // Скидаємо секунди
					}
					return prevSeconds + 1; // Збільшуємо секунди
				});
			}, 1000);
		}

		return () => {
			// Очищуємо інтервал при зупинці таймера або завершенні гри
			if (interval) {
				clearInterval(interval);
			}
		};
	}, [start, stop]); // Залежності: старт і стоп

	return (
		<div className="stopwatch">
			<h2 className="stopwatch-time">
				Time: {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`} {/* Відображаємо час */}
			</h2>
		</div>
	);
}

export default StopWatch;
