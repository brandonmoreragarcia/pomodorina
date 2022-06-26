import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const pictures = ['../bg-1.jpg', '../bg-2.jpg','../bg-3.jpg','../bg-4.jpg']
  const [index, setIndex] = useState(0);
  const [pic, setPic] = useState('../bg-1.jpg')

  
  
  return (
    <div className="app">
      <header className='header'>
        Diario de un pomodorino
      </header>
      <div className="container">
        <div className='textBox'>
          <span className='subtitle'>
            Hoy quiero recordar:
          </span>
          <span className='text'>
            cuando me dijiste "pomodorino" por primera vez, y te reíste por 5 minutos seguidos sin parar. fue muy lindo
          </span>
        </div>
        <div className='textBox'>
          <span className='subtitle'>
            Hoy extraño:
          </span>
          <span className='text'>
            tu amor...
          </span>
        </div>
        <div className='textBox'>
          <span className='subtitle'>
            cosas que me gustan de ti
          </span>
          <span className='text'>
            Tu risa <br></br>
            Tu mirada <br></br>
            Tus bromas <br></br>
            Tu manera de ser <br></br>
          </span>
        </div>
        <div className='textBox'>
          <span className='subtitle'>
            Me gustaría decirte:
          </span>
          <span className='text'>
            Que lo único que quiero es poder estar contigo
          </span>
        </div>
        <div className='textBox'>
          <span className='subtitle'>
            Me disculpo por:
          </span>
          <span className='text'>
            no entender lo que necesitabas
          </span>
        </div>
        
        <div className='textBox'>
          <span className='subtitle'>
            Hoy deseo:
          </span>
          <span className='text'>
            que pienses en darme una oportunidad
          </span>
        </div>
        
        <div className='newContent'>
        contenido nuevo todos los días
      </div>
      </div>
      <footer>Hecho con amor por: Brandon Morera</footer>
    </div>
  );
}

export default App;
