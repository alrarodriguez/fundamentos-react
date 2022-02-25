import './App.css';
import Contador from './components/Contador';
import Eventos from './components/Eventos';
import Formulario from './components/Formulario';
import Listas from './components/Listas';
import Parrafo from './components/Parrafo';
import Variables from './components/Variables';

function App() {
  return (
    <div className="container mt-5">
      {/*
      <Parrafo/>
      <Variables/>
      <Eventos/>   
      <Contador/>  
      <Listas/> 
      */}
      <Formulario/>
    </div>
  );
}

export default App;

