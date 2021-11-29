import { Container } from "./styles";
import { AiFillInstagram } from "react-icons/ai";
import AvatarMedicoMobile from "../../assets/avatarMedicoMobile.svg";
import Button from "../Button";

const CardDoctor = ({ doctor }) => {
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
          <h3>Dr. {doctor.name}</h3>
          <p>CRM: {doctor.crm}</p>
        </div>
      </div>
      <div className="content">
        <p>
          <span>Especialidades:</span>
          <br />
          {doctor.specialty}
        </p>
        <p>
          <span>Endereço:</span>
          <br />
          {doctor.address}
        </p>
        <p>
          <span>Sobre o (a) Dr(a). {doctor.name}:</span>
          <br />
          {doctor.descript}
        </p>
      </div>
      <div className="footer">
        <a href="https://www.instagram.com/keelvin_jw/">
          <AiFillInstagram />
          <p>@{doctor.name}</p>
        </a>
      </div>
      <div className="container-button">
        <Button whiteSchema>Entrar em contato</Button>
      </div>
    </Container>
  );
};

export default CardDoctor;
