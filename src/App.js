import './App.css';
import Timer from './components/timer/timer';

function App() {
    
  return (
    <div className="app">
      <header className='header'>
        Sitio Web Pomodorino
      </header>
      <div className="container">
        <div className='textBox'>
          <span className='subtitle'>
            Faltan:
          </span>
          <span className='subtitle'>
           <Timer/>
          </span>
        </div>
        
      </div>
      <footer>09 Diciembre 2022</footer>
    </div>
  );
}

export default App;
