import { Container, Content, ImageHeader } from "./styles";

const Register = () => {
  return (
    <>
      <Container>
        <ImageHeader />
        <Content>
          <h2>
            É médico voluntário? <br /> Inscreva-se
          </h2>
          <p>
            Que bom te ver por aqui! É muito importante seu apoio nesse projeto.
          </p>
          <p>
            Temos aqui um formulário simples para cadastro. No campo “fale mais
            sobre você”, você pode escrever um pouco sobre suas especialidades e
            experiências.
          </p>
        </Content>
      </Container>
      <form></form>
    </>
  );
};

export default Register;
