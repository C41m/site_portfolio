import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import {useRef} from "react"
import { Python, Html, Css, Js, Sass, Sql, Powerbi } from "../icons/Icons"

const items = [
    {
        id: 1,
        title: "Data Science",
        img: "/data.gif",
        desc: "Análise com engenharia de dados e automação de processos empresariais, usando ferramentas como Python (Pandas, dash, NumPy, Plotly, Seaborn, Google GCP, OpenPyxl, Selenium, Playwright, PyAutoGUI, Machine Learning, dentre outras), bancos de dados relacionais ou não (SQL), Excel, PowerBI. Afim de facilitar e automatizar os processos de diversas áreas, acumulando experiência.",
        icons: <motion.div className="iconContainer"><Python/><Sql/><Powerbi /><Html/><Css/><Sass/><Js/></motion.div>
    },
    {
        id: 2,
        title: "Youtube Downloader",
        img: "https://img.freepik.com/free-vector/server-room-concept-illustration_114360-20647.jpg?w=826&t=st=1705349498~exp=1705350098~hmac=b0d2a020034836ab869554daf4a85059be37e5cf3767facd5e80f820c0a55d37",
        desc: "Ferramenta desenvolvida de download e extração de MP3 de vídeos e playlist do Youtube. Para essa ferramenta, fora utilizado Python, HTML, CSS e API."
    },
    {
        id: 3,
        title: "Business intelligence",
        img: "https://img.freepik.com/free-vector/server-room-concept-illustration_114360-20647.jpg?w=826&t=st=1705349498~exp=1705350098~hmac=b0d2a020034836ab869554daf4a85059be37e5cf3767facd5e80f820c0a55d37",
        desc: "Dashboards com ferramentas, PowerBI ou Streamlit e Power Query com insights próprios."
    },
    {
        id: 4,
        title: "Site Portfolio",
        img: "https://img.freepik.com/free-vector/server-room-concept-illustration_114360-20647.jpg?w=826&t=st=1705349498~exp=1705350098~hmac=b0d2a020034836ab869554daf4a85059be37e5cf3767facd5e80f820c0a55d37",
        desc: "Site para portfólio pessoal e estudos em Javascript, HTML, CSS, SCSS e React."
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
                        <button>Detalhes</button>
                        {item.icons}


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