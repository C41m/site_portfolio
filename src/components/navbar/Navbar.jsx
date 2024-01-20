import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"
import {motion} from "framer-motion"
import { Linkedin, Github, Gmail } from "../icons/Icons"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* {Sidebar} */}
        <Sidebar/>
        <motion.div 
        className="wrapper" 
            initial={{opacity:0, scale:0.9}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}>
            <span>Caio Soares</span>
            <div className="social">
                <div className="iconContainer">
                  <a href="https://www.linkedin.com/in/caiofernandobs/"><Linkedin/></a>
                  <a href="https://github.com/C41m"><Github/></a>
                  <Gmail/>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Navbar