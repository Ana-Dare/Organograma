import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Footer from "./componentes/Footer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57c278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Sciencie",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorTime(cor, nome) {
    setTimes(
      times.map((time) => {
        if (time.nome === nome) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    colaborador.id = uuidv4(); 
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          mudarCor={mudarCorTime}
          corPrimaria={time.corPrimaria}
          cor={time.cor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
