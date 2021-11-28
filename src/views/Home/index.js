import './style.css'
import expand from '../../assets/expand.png'
import imagemTrans from '../../assets/imgTrans.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import Button from '../../components/Button'
import Search from '../../assets/search.png'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'

function InitialScreen() {
  const navigate = useNavigate()

  return (
    <div className="container-telaInicial">
      <div className="boas-vindas">
        <h1>Boas-vindas da MedTrans</h1>
        <h2>
          Visualize as especialidades médicas próprios para o público Trans
        </h2>

        <input
          className="pesquisa"
          type="text"
          placeholder="Encontre um especialista"
        />
        <button className="search" onclick={() => console.log('Ola')}>
          <img src={Search} alt="" />
        </button>
      </div>
      <div className="expand">
        <img src={expand} alt="Imagem flecha expansão" />
      </div>
      <div className="sobre titulo conteudo-texto button ">
        <h3>Ambiente acolhedor para pessoas Trans e Travestis</h3>
        <p>
          Fizemos uma pesquisa e descobrimos que 75% das pessoas trans e
          travestis tem dificuldades de encontrar médicos especialistas para
          serem atendidas.
        </p>
        <p>
          Dito isto, pensamos nesse meio colaborativo para inclusão dos
          serviços, visando fornecer um catálogo de profissionais dispostos à
          atender com empatia, segurança e respeito, da forma que você realmente
          merece.
        </p>
        <Button>Ver listas de médicos</Button>
      </div>
      <div className="medicos  titulo conteudo-texto button ">
        <h3>Participe do nosso catálogoS</h3>
        <p>
          Metade do público trans e travesti agenda consultas online, segundo o
          nosso estudo. Aqui você profissional tem a possibilidade de divulgar
          seu trabalho online ou presencial com uma breve descrição.
        </p>
        <p>
          Colabore e nos ajude também com esse propósito. Torne-se um
          profissional aberto para criar um ambiente acolhedor para uma pessoa
          trans.
        </p>
        <p>
          Fique a vontade para participar divulgando seu trabalho, voluntário ou
          não.
        </p>
        <Button onclick={() => navigate('/Login')}>Fazer o meu cadastro</Button>
      </div>
      <div className=" depoimentos titulo conteudo-texto button ">
        <h3>Foi pensando nisso que A MedTrans nasceu!</h3>
        <img src={imagemTrans} alt="Imagem Mulher Trans" />
        <div className="depoimento">
          <p>
            “É muito difícil encontrar profissionais na especialidade que eu
            preciso.”
          </p>
        </div>
        <div className="mulher-trans">
          <p>Mulher trans</p>
        </div>
        <div className="seccion-depoimento">
          <p>Depoimento real de uma de nossas entrevistadas.</p>
        </div>
      </div>
      <div className="lista-medicos titulo button">
        <h3>Gostou e deseja visualizar as especialidade médicas?</h3>
        <Button>Ver listas de médicos</Button>
      </div>
      <div className="divider"></div>
      <div className="redes-sociais ">
        <p>Saiba mais nas redes sociais:</p>
        <div className="icons">
          <img src={linkedin} alt="Icone Instagram" />
          <img src={instagram} alt="Icone Instagram" />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default InitialScreen
