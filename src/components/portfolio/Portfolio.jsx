import "./portfolio.scss"
import { motion, useScroll, useSpring } from "framer-motion"
import {useRef} from "react"

const items = [
    {
        id: 1,
        title: "Análise de Dados",
        img: "https://img.freepik.com/free-vector/server-room-concept-illustration_114360-20647.jpg?w=826&t=st=1705349498~exp=1705350098~hmac=b0d2a020034836ab869554daf4a85059be37e5cf3767facd5e80f820c0a55d37",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cumque fuga a, ipsum deleniti sint facere omnis distinctio eos possimus hic quos vitae ipsam, repellat consectetur at. Impedit, cumque architecto."
    },
    {
        id: 2,
        title: "Youtube Downloader",
        img: "https://img.freepik.com/free-vector/server-room-concept-illustration_114360-20647.jpg?w=826&t=st=1705349498~exp=1705350098~hmac=b0d2a020034836ab869554daf4a85059be37e5cf3767facd5e80f820c0a55d37",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cumque fuga a, ipsum deleniti sint facere omnis distinctio eos possimus hic quos vitae ipsam, repellat consectetur at. Impedit, cumque architecto."
    },
    {
        id: 3,
        title: "Engenharia de Dados com Analise",
        img: "https://img.freepik.com/free-vector/server-room-concept-illustration_114360-20647.jpg?w=826&t=st=1705349498~exp=1705350098~hmac=b0d2a020034836ab869554daf4a85059be37e5cf3767facd5e80f820c0a55d37",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cumque fuga a, ipsum deleniti sint facere omnis distinctio eos possimus hic quos vitae ipsam, repellat consectetur at. Impedit, cumque architecto."
    },
    {
        id: 4,
        title: "Site Portfolio",
        img: "https://img.freepik.com/free-vector/server-room-concept-illustration_114360-20647.jpg?w=826&t=st=1705349498~exp=1705350098~hmac=b0d2a020034836ab869554daf4a85059be37e5cf3767facd5e80f820c0a55d37",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cumque fuga a, ipsum deleniti sint facere omnis distinctio eos possimus hic quos vitae ipsam, repellat consectetur at. Impedit, cumque architecto."
    }
]

const Single = ({item}) => {
    return (
        <section>
            {item.title}
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