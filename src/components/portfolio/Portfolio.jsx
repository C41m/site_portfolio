import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Python,
  Html,
  Css,
  Js,
  Sass,
  Sql,
  Powerbi,
  Api,
  Excel,
  ReactIcon,
  Nodejs,
} from "../icons/Icons";
import { Tooltip } from "react-tooltip";

const items = [
  {
    id: 1,
    title: "Data Science - Marketplace",
    img: "/data.gif",
    desc: "Engenharia e análise (dinâmica) completa de dados referente à entregas pedidos de uma empresa. Dashboards, tabelas e estatísticas.",
    icons: (
      <motion.div className="iconContainer">
        <Python />
        <Sql />
        <Powerbi />
        <Html />
        <Css />
        <Sass />
        <Js />
      </motion.div>
    ),
    url: "https://c41m-market.streamlit.app/",
    git: "https://github.com/C41m/marketplace",
  },
  {
    id: 2,
    title: "Youtube Downloader",
    img: "/ytDownloader.gif",
    desc: "Ferramenta desenvolvida de download e extração de MP3 de vídeos e playlist do Youtube. Para essa ferramenta, fora utilizado Python, HTML, CSS e API.",
    icons: (
      <motion.div className="iconContainer">
        <Python />
        <Html />
        <Css />
        <Js />
        <Api />
      </motion.div>
    ),
    url: "https://youtubedownloaderc41m.streamlit.app/",
    git: "https://github.com/C41m/youtube_downloader",
  },
  {
    id: 3,
    title: "Business Intelligence",
    img: "/dashBi.gif",
    desc: "Análise de Dados (dinâmica) recebidos via API JSON de um jogo. Gráficos, tabelas e estatísticas.",
    icons: (
      <motion.div className="iconContainer">
        <Python />
        <Sql />
        <Excel />
        <Api />
        <Powerbi />
      </motion.div>
    ),
    url: "https://pokemonsurvivors.streamlit.app/",
    git: "https://github.com/C41m/Pokemon_Survivors",
  },
  {
    id: 4,
    title: "Site Portfolio",
    img: "/portSite.gif",
    desc: "Site para portfólio pessoal e estudos em Javascript, HTML, CSS, SCSS e React.",
    icons: (
      <motion.div className="iconContainer">
        <Html />
        <Css />
        <Sass />
        <Js />
        <ReactIcon />
      </motion.div>
    ),
    url: "https://caiofernando-portfolio.netlify.app/",
    git: "https://github.com/C41m/site_portfolio",
  },
  {
    id: 5,
    title: "Rede Social",
    img: "/redeSocial.gif",
    desc: "Estudos em Node e React para desenvolvimento de uma rede social. Ainda em desenvolvimento...",
    icons: (
      <motion.div className="iconContainer">
        <Html />
        <Css />
        <Sass />
        <Js />
        <ReactIcon />
        <Nodejs />
      </motion.div>
    ),
    url: "",
    git: "https://github.com/C41m/node_social_media",
  },
  {
    id: 6,
    title: "App de Previsão do Tempo",
    img: "/tempo.gif",
    desc: "Estudos em Javascript, CSS e HTML.",
    icons: (
      <motion.div className="iconContainer">
        <Html />
        <Css />
        <Js />
      </motion.div>
    ),
    url: "https://caiofernandoweather.netlify.app",
    git: "https://github.com/C41m/js_WeatherApp",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 150]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttons">
              <a href={item.url !== "" ? item.url : "#"}>
                <button className="btn" disabled={item.url === ""}>
                  <p>
                    {item.url !== "" ? "Aplicação" : "Em desenvolvimento..."}
                  </p>
                </button>
              </a>
              <a href={item.git}>
                <button className="btn">
                  <p>Detalhes</p>
                </button>
              </a>
            </div>
            {item.icons}
            <Tooltip id="tooltip" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projetos e Estudos</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
