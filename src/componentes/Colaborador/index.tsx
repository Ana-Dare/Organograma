import { IoIosCloseCircle, IoMdHeart, IoIosHeartEmpty } from "react-icons/io";
import "./Colaborador.css";

export interface ColaboradorProps {
  nome: string;
  imagem: string;
  cargo: string;
  corDeFundo: string;
  id: string;
  favorito: boolean;
  data: string;
  aoDeletar: (id: string) => void;
  aoFavoritar: (id: string) => void;
}

const Colaborador = ({
  nome,
  imagem,
  cargo,
  corDeFundo,
  aoDeletar,
  id,
  aoFavoritar,
  favorito,
  data
}: ColaboradorProps) => {
  function favoritar() {
    aoFavoritar(id);
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar,
  };

  return (
    <div className="colaborador">
      <IoIosCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <h5>{new Date(data).toLocaleDateString()}</h5>
        <div className="favoritar">
          {favorito ? (
            <IoMdHeart {...propsFavorito} color="#FF0000" />
          ) : (
            <IoIosHeartEmpty {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
