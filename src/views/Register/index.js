import Footer from "../../components/Footer";
import FormRegister from "../../components/FormRegister";
import { Container, Content, ImageHeader, DescriptionHeader } from "./styles";

const Register = () => {
  return (
    <>
      <Container>
        <Content>
          <ImageHeader />
          <DescriptionHeader>
            <div>
              <h2>
                É médico? <br /> Inscreva-se
              </h2>
              <p>
                Que bom te ver por aqui! É muito importante seu apoio nesse
                projeto.
              </p>
              <p>
                Temos aqui um formulário simples para cadastro. No campo “fale
                mais sobre você”, você pode escrever um pouco sobre suas
                especialidades e experiências.
              </p>
            </div>
          </DescriptionHeader>
        </Content>
        <FormRegister />
      </Container>
      <Footer />
    </>
  );
};

export default Register;
