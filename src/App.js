import React, { useState } from 'react'; // Імпортуємо необхідні модулі з React
import Cards from './components/cards'; // Імпортуємо компонент Cards
import Counter from './components/counter'; // Імпортуємо компонент Counter
import StopWatch from './components/stopwatch'; // Імпортуємо компонент StopWatch

import './app.css'; // Імпортуємо стилі

function App() {
  // Визначаємо стан для лічильника ходів, запуску таймера та завершення гри
  const [moveCount, setMoveCount] = useState(0); // Лічильник ходів
  const [timerStarted, setTimerStarted] = useState(false); // Стан таймера (запущений чи ні)
  const [gameFinished, setGameFinished] = useState(false); // Стан гри (завершена чи ні)

  // Функція для збільшення лічильника ходів
  const incrementMoveCount = () => {
    setMoveCount(prevCount => prevCount + 1);
  };

  // Функція для запуску таймера при першому кліку
  const handleFirstClick = () => {
    if (!timerStarted) {
      setTimerStarted(true);
    }
  };

  // Функція для завершення гри
  const handleGameFinish = () => {
    setGameFinished(true);
  };

  return (
    <div className="App">
      <h1>Memory Card Game - React</h1> {/* Заголовок гри */}
      <div className="containers">
        <Counter count={moveCount} /> {/* Компонент лічильника */}
        <StopWatch start={timerStarted} stop={gameFinished} /> {/* Компонент таймера */}
      </div>
      <Cards incrementMoveCount={incrementMoveCount} onFirstClick={handleFirstClick} onGameFinish={handleGameFinish} /> {/* Компонент карток */}
    </div>
  );
}

export default App;
