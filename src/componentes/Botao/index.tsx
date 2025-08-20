import './Botao.css'

interface BotaoProps {
  children: React.ReactElement | string
}

const Botao = (props: BotaoProps) => {
  return (
  <button className="botao">
    {props.children}
</button>
)
};

export default Botao;
