import './style.css'
import imagemTrans from '../../assets/imgHomemobile.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import HeaderSearchCatalog from '../../components/HeaderSearchCatalog'
import Header from '../../components/Header'

function InitialScreen() {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className="container-telaInicial">
        <HeaderSearchCatalog whiteSchema>
          <h2 className="Content-text titulo ">
            Bem vindes à <br /> MedTrans
          </h2>
          <p className="Content-text conteudo-texto ">
            Aqui você tem um catálogo de médicos prontos para atender o público
            trans e travestis.
          </p>
        </HeaderSearchCatalog>

        <div className="sobre titulo conteudo-texto button ">
          <h3>Ambiente acolhedor para pessoas Trans e Travestis</h3>
          <p>
            Pensando em uma boa experiência e facilidade de informações,
            realizamos para o público trans, esse meio de visualização de
            catálogo de profissionais dispostos à atender com empatia, segurança
            e respeito, da forma que você realmente merece.
          </p>

          <Button onClick={() => navigate('/Login', { replace: true })}>
            Ver listas de médicos
          </Button>
        </div>
        <div className="medicos  titulo conteudo-texto button ">
          <h3>Participe do nosso catálogo!</h3>
          <p>
            Colabore e nos ajude também com esse propósito de criar um ambiente
            acolhedor para uma pessoa trans.
          </p>
          <Button
            whiteSchema
            onClick={() => navigate('/Login', { replace: true })}
          >
            Fazer o meu cadastro
          </Button>
        </div>
        <div className="depoimentos titulo conteudo-texto button ">
          <h3>Foi pensando nisso que A MedTrans nasceu!</h3>
          <img
            className="img-depoimento"
            src={imagemTrans}
            alt="Imagem Mulher Trans"
          />
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
          <Button onClick={() => navigate('/Login', { replace: true })}>
            Ver listas de médicos
          </Button>
        </div>
        <div className="divider"></div>
        <div className="redes-sociais ">
          <p>Saiba mais nas redes sociais:</p>
          <div className="icons">
            <img src={linkedin} alt="Icone Instagram" />
            <img src={instagram} alt="Icone Instagram" />
          </div>
        </div>
      </div>
    </>
  )
}

export default InitialScreen
