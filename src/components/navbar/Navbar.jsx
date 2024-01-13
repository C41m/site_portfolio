import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"
import {motion} from "framer-motion"

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
                <a href="#"><img src="/facebook.png" alt="" /></a>
                <a href="#"><img src="/instagram.png" alt="" /></a>
                <a href="#"><img src="/youtube.png" alt="" /></a>
                <a href="#"><img src="/dribbble.png" alt="" /></a>
            </div>
        </motion.div>
    </div>
  )
}

export default Navbar