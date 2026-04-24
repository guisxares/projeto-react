import { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState<number>(0);

  return (
    <div className="container">
      <h1>Meu Projeto React com TypeScript</h1>

      <p>Contador: {contador}</p>

      <div className="botoes">
        <button onClick={() => setContador(contador + 1)}>
          Aumentar
        </button>

        <button onClick={() => setContador(contador - 1)}>
          Diminuir
        </button>

        <button onClick={() => setContador(0)}>
          Resetar
        </button>
      </div>
    </div>
  );
}

export default App;