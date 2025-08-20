import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Footer from "./componentes/Footer";
import Visibilidade from "./componentes/Visibilidade";
import { v4 as uuidv4 } from "uuid";
import Banner from "./componentes/Banner";
import {
  IColaborador,
  NovoColaborador,
} from "./compartilhado/interfaces/IColaborador";

interface ITimeInput {
  nome: string;
  cor: string;
}

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

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);

  function deletarColaborador(id: string) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorTime(cor: string, nome: string) {
    setTimes(
      times.map((time) => {
        if (time.nome === nome) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime: ITimeInput) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id: string) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  }

  const [visivel, setvisivel] = useState(true);

  function alterarvisivel() {
    setvisivel(!visivel);
  }

  const aoNovoColaboradorAdicionado = (colaborador: NovoColaborador) => {
    const colaboradorCompleto: IColaborador = {
      ...colaborador,
      id: uuidv4(),
      favorito: false,
    };
    setColaboradores([...colaboradores, colaboradorCompleto]);
  };

  return (
    <div className="App">
      <Banner
        endrecoImagem="/imagens/banner.png"
        textoAlternativo="Banner principal da página"
      />
      {visivel && (
        <Formulario
          cadastrarTime={cadastrarTime}
          times={times.map((time) => time.nome)}
          aoColaboradorCadastrado={(colaborador) =>
            aoNovoColaboradorAdicionado(colaborador)
          }
        />
      )}
      <Visibilidade
        alterarvisivel={alterarvisivel}
        visivel={visivel}
      ></Visibilidade>
      {times.map((time) => (
        <Time
          aoFavoritar={resolverFavorito}
          key={time.nome}
          nome={time.nome}
          mudarCor={mudarCorTime}

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
