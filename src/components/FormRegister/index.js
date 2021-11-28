import { Form } from "./styles";
import Input from "../Input";
import Button from "../Button";

const FormRegister = () => {
  return (
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
      <Input placeholder="Digite o número de seu WhatsApp" />
      <Input placeholder="Digite o seu perfil do Instagram" />
      <Input placeholder="Digite o endereço do seu site" />
      <textarea placeholder="Fale mais sobre você" />
      <Button>Cadastrar</Button>
    </Form>
  );
};

export default FormRegister;
