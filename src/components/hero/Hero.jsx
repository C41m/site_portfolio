import "./hero.scss"
import {motion} from "framer-motion"
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';


const textVarians = {
    initial: {
        x: -500, 
        opacity: 0
    },
    animate: {
        x: 0, 
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 1,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0, 
        
    },
    animate: {
        x: "-220%", 
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    }   
}

const imgVariants = {
    initial: {
        x: 500, 
        opacity: 0
    },
    animate: {
        x: 0, 
        opacity: 1,
        transition: {
            duration: 2,
        }
    }
}


const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" 
            variants={textVarians} 
            initial="initial" 
            animate="animate"
            >
                <motion.h2 variants={textVarians}>BEM VINDO!</motion.h2>
                <motion.h1 variants={textVarians}>Engenheiro e Analista de Dados</motion.h1>
                <motion.h1 variants={textVarians}>Desenvolvedor</motion.h1>
                <motion.div className="buttons" variants={textVarians}>
                    <motion.button variants={textVarians}>
                        <a href="#Servicos">Trabalhos</a>
                    </motion.button>
                    <motion.button variants={textVarians}>
                        <a href="#Contato">Contato</a>
                    </motion.button>
                </motion.div>
                <motion.img variants={textVarians} animate="scrollButton" src="/scroll.png" alt=""/>
            </motion.div>
            <motion.div className="imageContainer" variants={imgVariants} initial="initial" animate="animate">          
            <img id="rocketHero" src="./rocketHero.png"/>
            <Canvas camera={{ fov: 25, position: [5, 5, 5]}}>
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={0.5}/>
                <directionalLight position={[3,2,1]}/>
                <Sphere args={[1, 150, 200]} scale={1.3}>
                    <MeshDistortMaterial color="orange" attach="material"  distort={0.3} speed={2}/>
                </Sphere>
            </Canvas>
        </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            Caio Fernando Brito Soares
        </motion.div>

    </div>
  )
}

export default Hero