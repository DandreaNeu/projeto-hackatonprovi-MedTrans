import { Container } from "./styles";
import { AiFillInstagram } from "react-icons/ai";
import AvatarMedicoMobile from "../../assets/avatarMedicoMobile.svg";
import Button from "../Button";

const CardDoctor = () => {
  const handleClick = () => {
    console.log("olá");
  };

  return (
    <Container>
      <div className="header-info">
        <figure>
          <img
            src={AvatarMedicoMobile}
            alt="imagem de perfil de um doutor(a)"
          ></img>
          <figcaption></figcaption>
        </figure>
        <div>
          <h3>Dr. Hans Crcrutis</h3>
          <p>CRM: 123456</p>
        </div>
      </div>
      <div className="content">
        <p>
          <span>Especialidades:</span>
          <br />
          Aqui vai as especialidades
        </p>
        <p>
          <span>Endereço:</span>
          <br />
          Aqui vai o endereço
        </p>
        <p>
          <span>Sobre o Dr. Hans Chucrutis:</span>
          <br />
          Aqui vai o texto "fale sobre você"
        </p>
      </div>
      <div className="footer">
        <a href="https://www.instagram.com/keelvin_jw/">
          <AiFillInstagram />
          <p>@perfildoinsta</p>
        </a>
      </div>
      <div className="container-button">
        <Button onClick={handleClick}>Entrar em contato</Button>
      </div>
    </Container>
  );
};

export default CardDoctor;
