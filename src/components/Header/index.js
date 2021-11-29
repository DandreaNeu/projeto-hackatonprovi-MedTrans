import './style.css'
import menu from '../../assets/burguer.png'
import Button from '../Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [abreMenu, setAbreMenu] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="container-header">
      <div className="container-nav">
        <div className={abreMenu ? 'navbar' : 'navbar hidden'}>
          <Button onClick={() => navigate('/Login', { replace: true })}>
            Fazer login
          </Button>
          <Button
            whiteSchema
            onClick={() => navigate('/Login', { replace: true })}
          >
            Cadastrar-se
          </Button>
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
