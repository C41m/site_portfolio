import './services_1.scss'
import { motion, useInView } from "framer-motion"
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.2
        }
    }
}

const Services_1 = () => {

    const ref = useRef()

    const isInView = useInView(ref, {margin:"-100px"})

    return (
        <motion.div 
            className="services"
            variants={variants} 
            initial="initial"
            ref={ref}
            animate={isInView && "animate"}
        >    
            <motion.div className="textContainer">
                <p>
                    O segredo do sucesso é fazer coisas comuns de 
                    <br /> maneira incomumente bem 
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color: "orange"}}>Ciências </motion.b>de Dados
                    </h1>  
                </div>  
                <div className="title">
                    <h1>
                        Desenvolvimento<motion.b whileHover={{color: "orange"}}> Web</motion.b> 
                    </h1>      
                </div>  
            </motion.div>
            <div className="subtitleContainer">
                <div className="photoContainer">
                    <p>Oi</p>
                </div>
                <div className="detailContainer">
                    <motion.div className="listContainer" variants={variants}>
                            <motion.div className="box" whileHover={{background: "Lightgray", color: "black"}}>
                                <div className="boxHeader">
                                    <FontAwesomeIcon className="icon" icon={faMedal}/> 
                                    <h2>Experiência</h2>                
                                </div> 
                                <div className="boxText">
                                    <p>
                                        6+ anos em Data Science <br />
                                        Engenharia e Análise de Dados
                                    </p>
                                </div>
                        </motion.div>
                            <motion.div className="box" whileHover={{background: "Lightgray", color: "black"}}>
                                <div className="boxHeader">
                                    <FontAwesomeIcon className="icon" icon={faMedal}/> 
                                    <h2>Experiência</h2>                
                                </div> 
                                <div className="boxText">
                                    <p>
                                        6+ anos em Data Science <br />
                                        Engenharia e Análise de Dados
                                    </p>
                                </div>
                        </motion.div>
                    </motion.div>
                    <div className="aboutContainer">
                        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore molestiae dolore nam! Sunt, aliquid perspiciatis! Quas eaque ipsum sequi quibusdam? Aut iste consectetur, culpa praesentium sint dicta rerum reprehenderit magnam?</h2>
                    </div>
                </div>
            </div>
        </motion.div>
            
    )
}

export default Services_1