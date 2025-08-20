import Formulario from "../Formulario";
import "./visibilidade.css";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface VisibilidadeProps {
  alterarvisivel: () => void
  visivel: boolean
}

const Visibilidade = (props: VisibilidadeProps) => {
  return (
    <>
      <button className="visibilidade" onClick={props.alterarvisivel}>
        {props.visivel ? (
          <IoMdEye size={25} color="#fff" />
        ) : (
          <IoMdEyeOff size={25} color="#fff" />
        )}
      </button>
    </>
  );
};

export default Visibilidade;
