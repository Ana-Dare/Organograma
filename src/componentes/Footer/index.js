import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" style={{backgroundImage: "url('/imagens/fundo.png')"}}>
      <div className="img">
        <img src="/imagens/fb.png" />
        <img src="/imagens/tw.png" />
        <img src="/imagens/ig.png" />
      </div>
      <div className="logo">
        <img src="/imagens/logo.png"/>
      </div>
      <div className="text">
        Desenvolvido por Ana Laura
      </div>
    </div>
  );
};

export default Footer;
