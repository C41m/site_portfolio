import "./hero.scss"
import {motion} from "framer-motion"

const textVarians = {
    initial: {
        x: -500, 
        opacity: 0
    },
    animate: {
        x: 0, 
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
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

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" 
            variants={textVarians} 
            initial="initial" 
            animate="animate"
            >
                <motion.h2 variants={textVarians}>CAIO FERNANDO</motion.h2>
                <motion.h1 variants={textVarians}>Engenheiro e Analista de Dados</motion.h1>
                <motion.h1 variants={textVarians}>Python Dev</motion.h1>
                <motion.div className="buttons" variants={textVarians}>
                    <motion.button variants={textVarians}>
                        <p>Trabalhos</p>
                    </motion.button>
                    <motion.button variants={textVarians}>
                        <p>Contato</p>
                    </motion.button>
                </motion.div>
                <motion.img variants={textVarians} animate="scrollButton" src="/scroll.png" alt=""/>
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            Caio Fernando Brito Soares
        </motion.div>
        <div className="imageContainer">
            <img src="./hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero