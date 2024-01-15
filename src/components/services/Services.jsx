import './services.scss'
import { motion, useInView } from "framer-motion"
import React, { useRef } from 'react';

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

const Services = () => {

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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    <br /> Veniam corrupti fuga 
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />  
                    <h1>
                        <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
                    </h1>  
                </div>  
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color: "orange"}}>For your</motion.b> Business
                    </h1>  
                    <button>What We Do?</button>
                </div>  
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background: "Lightgray", color: "black"}} transition={{duration: 2}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente quo ipsum labore ad! Earum recusandae, voluptate ab quasi at soluta sapiente a dolorem velit? Voluptates impedit vel dolore aperiam.</p>
                    <button>Go!</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: "Lightgray", color: "black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente quo ipsum labore ad! Earum recusandae, voluptate ab quasi at soluta sapiente a dolorem velit? Voluptates impedit vel dolore aperiam.</p>
                    <button>Go!</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: "Lightgray", color: "black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente quo ipsum labore ad! Earum recusandae, voluptate ab quasi at soluta sapiente a dolorem velit? Voluptates impedit vel dolore aperiam.</p>
                    <button>Go!</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: "Lightgray", color: "black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente quo ipsum labore ad! Earum recusandae, voluptate ab quasi at soluta sapiente a dolorem velit? Voluptates impedit vel dolore aperiam.</p>
                    <button>Go!</button>
                </motion.div>
            </motion.div>     
        </motion.div>
            
    )
}

export default Services