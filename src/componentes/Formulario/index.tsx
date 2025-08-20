import "./Formulario.css";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";
import { NovoColaborador } from "../../compartilhado/interfaces/IColaborador";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: NovoColaborador) => void;
  times: string[];
  cadastrarTime: (time: { nome: string; cor: string }) => void;
}

const Formulario = (props: FormularioProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");
  const [data, setData] = useState("");

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
      data
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
    setData("")
  };

  return (
    <section className="formulario-conatiner">
      <form
        className="formulario"
        onSubmit={aoSalvar}
        style={{ visibility: "visible" }}
      >
        <h2>Preencha os dados para criar o card de colaborador</h2>
        <Campo
          type="text"
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          type="text"
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          type="text"
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <Campo
          type="date"
          label="Data de entrada no time"
          placeholder=""
          valor={data}
          aoAlterado={(valor) => setData(valor)}
        />
        <ListaSuspensa
          type="text"
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          obrigatorio={true}
          label="Time"
          itens={props.times}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        className="formulario"
        onSubmit={(evento) => {
          evento.preventDefault();
          props.cadastrarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          type="text"
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          type="color"
          obrigatorio
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>Criar um novo time</Botao>
      </form>
    </section>
  );
};
export default Formulario;
