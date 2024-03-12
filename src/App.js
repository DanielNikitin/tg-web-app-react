import './App.css';
import { useEffect } from 'react'; // Добавляем импорт useEffect из React

function App() {

  useEffect(() => {
    tg.ready();  // сообщает что приложение проинициализировано, можно отрисовывать
  }, []) // Пустой массив зависимостей означает, что эффект будет выполнен только один раз, при монтировании компонента

  return (
    <div className="App">
      work
    </div>
  );
}

export default App;
