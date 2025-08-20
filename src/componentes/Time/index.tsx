import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import "./Time.css";
import { IColaborador } from "../../compartilhado/interfaces/IColaborador";

interface TimeProps {
  cor: string;
  colaboradores: IColaborador[];
  nome: string;
  corPrimaria?: string
  mudarCor: (cor: string, nome: string) => void;
  aoDeletar: (id: string) => void;
  aoFavoritar: (id: string) => void;
}

const Time = (props: TimeProps) => {
  const css = { backgroundColor: hexToRgba(props.cor, "0.6") };
  return props.colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <input
        value={props.cor}
        onChange={(evento) => props.mudarCor(evento.target.value, props.nome)}
        type="color"
        className="input-cor"
      />
      <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => {
          return (
            <Colaborador
              id={colaborador.id}
              corDeFundo={props.cor}
              key={colaborador.id}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              aoDeletar={props.aoDeletar}
              aoFavoritar={props.aoFavoritar}
              favorito={colaborador.favorito}
              data={colaborador.data}
            />
          );
        })}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Time;
