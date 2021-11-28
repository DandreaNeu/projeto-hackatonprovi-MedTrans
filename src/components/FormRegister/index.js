import { Form, Container } from "./styles";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";

const FormRegister = () => {
  const [inputRadioValue, setInputSelectValue] = useState("sim");

  const handleChange = (e) => {
    setInputSelectValue(e.target.value);
  };

  return (
    <>
      <Container>
        <Form>
          <Input placeholder="Digite seu e-mail" />
          <Input placeholder="Digite sua senha" />
          <div className="container-checkboxInput">
            <input type="checkbox" />
            <label>Aceitar termos e condições</label>
          </div>
          <Input placeholder="Digite seu nome" />
          <Input placeholder="Digite seu sobrenome" />
          <Input placeholder="Digite as suas especialidades" />
          <Input placeholder="Digite seu CRM" />
          <Input placeholder="Digite seu endereço de atendimento" />
          <div className="container-selectInput container-input">
            <p>O local tem acesibilidade?</p>
            <div>
              <label>sim</label>
              <input
                type="radio"
                value="sim"
                checked={inputRadioValue === "sim"}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>não</label>
              <input
                type="radio"
                value="nao"
                checked={inputRadioValue === "nao"}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="container-input">
            <p>Quais as modalidades que você atende?</p>
            <div className="container-checkboxInput">
              <input type="checkbox" />
              <label>Online</label>
            </div>
            <div className="container-checkboxInput">
              <input type="checkbox" />
              <label>Presencial</label>
            </div>
          </div>
          <Input placeholder="Digite o número de seu WhatsApp" />
          <Input placeholder="Digite o seu perfil do Instagram" />
          <Input placeholder="Digite o endereço do seu site" />
          <textarea placeholder="Fale mais sobre você" />
          <div className="container-button">
            <Button>Cadastrar</Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FormRegister;
