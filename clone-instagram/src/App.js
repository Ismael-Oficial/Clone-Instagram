import './App.css';
import LadoEsquerdo from './componentes/LadoEsquerdo';
import Stories from './componentes/Stories';
import Feed from './componentes/Feed';
import LadoDireito from './componentes/LadoDireito';

function App() {
  return (
    <div className="App">
      <LadoEsquerdo />
      <div className="Centro">
        <Stories />
        <Feed />
      </div>
      <LadoDireito />
    </div>
  );
}

export default App;
