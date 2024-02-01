import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import {useRef} from "react"
import { Python, Html, Css, Js, Sass, Sql, Powerbi, Api, Excel, ReactIcon } from "../icons/Icons"
import { Tooltip } from 'react-tooltip'

const items = [
    {
        id: 1,
        title: "Data Science",
        img: "/data.gif",
        desc: "Análise com engenharia de dados e automação de processos empresariais, usando ferramentas como de ETL, estatística, marchine learning, dashboards e desenvolvimento.",
        icons: <motion.div className="iconContainer"><Python/><Sql/><Powerbi/><Html/><Css/><Sass/><Js/></motion.div>
    },
    {
        id: 2,
        title: "Youtube Downloader",
        img: "/ytDownloader.gif",
        desc: "Ferramenta desenvolvida de download e extração de MP3 de vídeos e playlist do Youtube. Para essa ferramenta, fora utilizado Python, HTML, CSS e API.",
        icons: <motion.div className="iconContainer"><Python/><Html/><Css/><Js/><Api/></motion.div>

    },
    {
        id: 3,
        title: "Business Intelligence",
        img: "/dashBi.gif",
        desc: "Dashboards interativos com ferramentas personalizadas, PowerBI, Tableau, Streamlit, Power Query e Excel com insights próprios.",
        icons: <motion.div className="iconContainer"><Python/><Sql/><Excel/><Api/><Powerbi/></motion.div>

    },
    {
        id: 4,
        title: "Site Portfolio",
        img: "/portSite.gif",
        desc: "Site para portfólio pessoal e estudos em Javascript, HTML, CSS, SCSS e React.",
        icons: <motion.div className="iconContainer"><Html/><Css/><Sass/><Js/><ReactIcon/></motion.div>

    }
]

const Single = ({item}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target: ref})

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
                        <button className="btn">
                            <p>Detalhes</p>
                        </button>
                        {item.icons}        
                        <Tooltip id="tooltip" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target: ref, offset:["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
      
    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Trabalhos</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id}/>))}
        </div>
    )
}

export default Portfolio