import { Container } from "./styles";

const Footer = ({ children }) => {
  return (
    <Container>
      <div>
        {children}
        <p>
          <span>&copy;</span> MedTrans, 2021.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
