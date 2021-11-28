import './style.css'
import menu from '../../assets/burguer.png'
import Button from '../Button'
import { useState } from 'react'

function Header() {
  const [abreMenu, setAbreMenu] = useState(false)

  return (
    <div className="container-header">
      <div className="container-nav">
        <div className={abreMenu ? 'navbar' : 'navbar hidden'}>
          <Button>Fazer login</Button>
          <Button whiteSchema>Cadastrar-se</Button>
        </div>
      </div>
      <div className="icon-menu">
        <img
          src={menu}
          alt="Imagem do Menu"
          onClick={() => setAbreMenu(!abreMenu)}
        />
      </div>
    </div>
  )
}

export default Header
