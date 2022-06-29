import { useEffect, useState } from 'react';
import './App.css';

function App() {
    
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
            cuando te ganaba en Houseparty jugando UNO, y te enojabas y me hacía divertir. También cuando tu ganabas el juego de las palabras en inglés, que todavía no entiendo cómo era que ganabas.
          </span>
        </div>
        <div className='textBox'>
          <span className='subtitle'>
            Hoy extraño:
          </span>
          <span className='text'>
            que me controles, que me molestes, extraño tu risa
          </span>
        </div>
        <div className='textBox'>
          <span className='subtitle'>
            cosas que me gustan de ti
          </span>
          <span className='text'>
            la faccina che fai di bambina <br></br>
            la faccina cuando te enojas por algo que dije a propósito para hacerte enojar <br></br>
            tu dedicación a las cosas que te gustan <br></br>
            tu sentido del humor <br></br>
          </span>
        </div>
        <div className='textBox'>
          <span className='subtitle'>
            Me gustaría decirte:
          </span>
          <span className='text'>
            que quiero vivir todas mis aventuras contigo, toda mi vida contigo
          </span>
        </div>
        <div className='textBox'>
          <span className='subtitle'>
            pienso en ti:
          </span>
          <span className='text'>
            a cada momento, y me pregunto como sería si estuvieses a mi lado, qué harías, que dirías...
          </span>
        </div>
        <div className='textBox'>
          <span className='subtitle'>
            te he molestado tanto estas semanas y no he dejado de intentarlo porque:
          </span>
          <span className='text'>
            no quiero vivir sin ti
          </span>
        </div>
        
        <div className='textBox'>
          <span className='subtitle'>
            me gusta cuando:
          </span>
          <span className='text'>
            pienso en tenerte cerca, me da miedo y al mismo tiempo me emociona.
          </span>
        </div>
        
        <div className='textBox'>
          <span className='subtitle'>
            nunca pensé que:
          </span>
          <span className='text'>
            en Italia iba a conocer la persona que se conviritó en la más importante de mi vida.
          </span>
        </div>
        
        <div className='textBox'>
          <span className='subtitle'>
            Hoy deseo:
          </span>
          <span className='text'>
            escuchar nuestra canción, mientras nos abrazamos y bailamos lento, pegaditos, mientras te canto la canción al oído. ya sabes cual canción...
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
