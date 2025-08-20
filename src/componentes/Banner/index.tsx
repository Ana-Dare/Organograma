import "./Banner.css";

interface BannerProps {
  endrecoImagem: string;
  textoAlternativo?: string;
}

export const Banner = ({ endrecoImagem, textoAlternativo }: BannerProps) => {
  return (
    <header className="banner">
      {/*<img src="/imagens/banner.png" alt="Banner principal da página" />*/}
      <img src={endrecoImagem} alt={textoAlternativo} />
    </header>
  );
};

export default Banner
