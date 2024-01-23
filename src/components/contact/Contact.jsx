import { useRef, useState } from 'react'
import './contact.scss'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'

const variants = {
  initial: {
    opacity: 0
  },
  animate:{
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2
    }
  }
}

const Contact = () => {

  const ref = useRef()
  const formRef = useRef()
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('service_j2i47d5', 'template_wlz5kzm', formRef.current, 'iQaKRlBP8aNeC2HC4')
      .then((result) => {
        setSuccess(true);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const isInView = useInView(ref, { margin: "-100px" })

  return (
    <motion.div className="contact">
      <motion.div className="titleContainer" ref={ref} variants={variants} initial="initial" whileInView="animate">
        <motion.h1 variants={variants}>Entre em Contato</motion.h1>
      </motion.div>
      <motion.div className="formContainer">
        <motion.div className="phoneSvg" 
        initial={{opacity:1}} 
        whileInView={{opacity:0}}
        transition={{delay: 1, duration: 1}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="350"
            height="350"
            fill="none"
            viewBox="0 0 24 24"
          >
            <motion.path initial={{ pathLength: 0 }} animate={isInView && { pathLength: 1}} transition={{duration: 3 }}
              d="M11.595 19H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C3 17.48 3 16.92 3 15.8V8.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C21 6.52 21 7.08 21 8.2V12m-.393-3.738l-5.057 3.371c-1.283.856-1.925 1.284-2.618 1.45a4.001 4.001 0 01-1.864 0c-.694-.167-1.335-.594-2.618-1.45L3.147 8.1M18 13.5l1.41 2.058 2.394.706-1.521 1.978.068 2.494L18 19.9l-2.351.836.069-2.494-1.522-1.978 2.393-.706L18 13.5z"
            ></motion.path>
          </svg>
        </motion.div>
        <motion.form 
          ref={formRef}
          onSubmit={sendEmail}
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay: 2, duration: 1}}
        >
          <input type="text" required placeholder="Nome" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} required placeholder="Mensagem" name="message"></textarea>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Enviar"}
          </button>
          {error && <p>❌ Falha ao enviar, tente novamente!</p>}
          {success && <h1>✅ Mensagem enviada, obrigado pelo contato!</h1>}
        </motion.form>
        <motion.div className="itemContainer" ref={ref} variants={variants} initial="initial" whileInView="animate">
          <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>caiofernandobs@gmail.com</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Linkedin</h2>
            <span>https://www.linkedin.com/caiofernandobs</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>GitHub</h2>
            <span>https://www.github.com/c41m</span>
          </motion.div>
        </motion.div>
    </motion.div>
  </motion.div>
    )
}

export default Contact
