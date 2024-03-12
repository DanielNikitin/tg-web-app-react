import './App.css';
import { useEffect } from 'react'; // Добавляем импорт useEffect из React
import { useTelegram } from './hooks/useTelegram';
import Header from "./Components/Header/Header";


function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();  // сообщает что приложение проинициализировано, можно отрисовывать
  }, []) // Пустой массив зависимостей означает, что эффект будет выполнен только один раз, при монтировании компонента

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
