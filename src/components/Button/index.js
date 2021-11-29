import { Container } from "./styles";

const Button = ({ children, whiteSchema = false, onClick, ...rest }) => {
  return (
    <Container whiteSchema={whiteSchema} onClick={onClick} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
