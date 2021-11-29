import Button from '../../components/Button'
import logo from '../../assets/logoMobile.svg'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import './style.css'

function Login() {
  const navigate = useNavigate()

  const schema = yup.object().shape({
    email: yup.string().required('Campo obrigatório').email('Email inválido'),
    password: yup
      .string()
      .required('Campo obrigatório')
      .min(6, 'Mínimo 6 dígitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  return (
    <div className="container-login">
      <div className="login-data">
        <img className="logo" src={logo} alt="" />
        <form action="">
          <Input
            className="input-login"
            type="text"
            placeholder="Digite seu e-mail"
            register={register}
            name="email"
          />
          <Input
            className="input-login"
            type="text"
            placeholder="Digite sua senha"
            register={register}
            name="password"
          />
        </form>

        <div className="combo-checkbox">
          <input className="style-checkbox" type="checkbox" />
          <p>Lembrar senha</p>
        </div>
        <div className="link">
          <a href="#">Esqueci minha senha</a>
        </div>
        <Button onClick={() => navigate('/', { replace: true })}>Entrar</Button>
        <Button whiteSchema onClick={() => navigate('/', { replace: true })}>
          Quero me cadastrar
        </Button>
      </div>
    </div>
  )
}
export default Login
