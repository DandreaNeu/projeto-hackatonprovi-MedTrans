import { Container, Content } from "./styles";
import { FiEdit } from "react-icons/fi";

const Profile = () => {
  return (
    <Container>
      <FiEdit />
      <Content>
        <figure>
          <img alt="imagem de perfil"></img>
          <figcaption></figcaption>
        </figure>
        <h3>Dr. Hans Chucrutis</h3>
        <p>CRM xxx/xxxxx</p>
      </Content>
    </Container>
  );
};

export default Profile;
