const Links = () => {
  
const items = [
  "Homepage",
  "Servicos",
  "Portfolio",
  "Contato",
  "Sobre",
]
  
  return (
    <div className="links">{items.map(item => (
    <a href={`#${item}`} key={item}>{item}</a>
    ))}</div>    
  )
}

export default Links