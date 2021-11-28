import Button from '../../components/Button'
import Footer from '../../components/Footer'
import instagram from '../../assets/instagram.png'
import './style.css'

function Login() {
  return (
    <div className="container-login">
      <div className="login-data">
        <img src={instagram} alt="" />

        <input
          className="input-login"
          type="text"
          placeholder="Digite seu e-mail"
        />
        <input
          className="input-login"
          type="text"
          placeholder="Digite sua senha"
        />

        <div className="combo-checkbox">
          <input className="style-checkbox" type="checkbox" />
          <p>Lembrar senha</p>
        </div>
        <div className="link">
          <a href="#">Esqueci minha senha</a>
        </div>
        <Button>Entrar</Button>
        <Button>Quero me cadastrar</Button>
      </div>
      <Footer />
    </div>
  )
}
export default Login
