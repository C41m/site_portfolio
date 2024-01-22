import './services_1.scss'
import Cube from './Cube';
import { motion, useInView } from "framer-motion"
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


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
            animate={"animate"}
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
                    <Canvas>
                        <OrbitControls enableZoom={false} enablePan={false} autoRotate={1} rotateSpeed={1}/>
                        <ambientLight intensity={0.9}/>
                        <directionalLight position={[3,2,1]}/>
                        <PerspectiveCamera makeDefault position={[6, 6, 1]} />
                        <Cube />

                    </Canvas>
                </div>
                <div className="detailContainer">
                    <motion.div className="listContainer" variants={variants}>
                        <motion.div className="box" whileHover={{ background: "Lightgray", color: "black" }}>
                            <motion.div className="boxHeader">
                                <FontAwesomeIcon className="icon" icon={faMedal} animate={{ color: "white" }} />
                                <h2>Experiência</h2>                 
                                </motion.div> 
                                <div className="boxText">
                                    <p> 1+ ano Programador Python<br />
                                        6+ anos em Data Science <br />
                                        Engenharia e Análise de Dados
                                    </p>
                                </div>
                        </motion.div>
                        <motion.div 
                            className="box" 
                            whileHover={{
                                background: "Lightgray", 
                                color: "black",
                                }}
                            transition={{duration:1}}
                            >
                                <div className="boxHeader">
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                    <h2>Educação</h2>                
                                </div> 
                                <div className="boxText">
                                    <p>
                                        Estudante de<br />
                                        Engenharia de Software <br />
                                        Contador

                                    </p>
                                </div>
                        </motion.div>
                    </motion.div>
                    <div className="aboutContainer">
                        <h2>Estudante de graduação em Engenharia de Software e de Data Science na Stack Academy, contador com registro ativo, experiência na área fiscal/contábil e consultoria, MBA em Gestão Financeira e Tributária.</h2>
                    </div>
                </div>
            </div>
        </motion.div>
            
    )
}

export default Services_1