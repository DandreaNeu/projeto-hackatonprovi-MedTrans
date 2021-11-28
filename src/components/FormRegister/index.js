import { Form, Container } from "./styles";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const FormRegister = () => {
  const [inputRadioValue, setInputSelectValue] = useState("não");

  const handleChange = (e) => {
    setInputSelectValue(e.target.value);
  };

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo 6 dígitos"),
    terms_and_conditions: yup
      .boolean()
      .oneOf([true], "Necessário aceitar termos e condições"),
    name: yup.string().required("Campo obrigatório"),
    last_name: yup.string().required("Campo obrigatório"),
    specialty: yup.string().required("Campo obrigatório"),
    crm: yup.string().required("Campo obrigatório").max(6, "Máximo 6 dígitos"),
    address: yup.string().required("Campo obrigatório"),
    whatsapp: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(submitFunction)}>
          <Input
            placeholder="Digite seu e-mail"
            type="text"
            register={register}
            name="email"
            label="Email"
          />
          {!!errors.email && <span>{errors.email.message}</span>}
          <Input
            placeholder="Digite sua senha"
            type="text"
            register={register}
            name="password"
            label="Senha"
          />
          {!!errors.password && <span>{errors.password.message}</span>}
          <div className="container-checkboxInput">
            <input type="checkbox" {...register("terms_and_conditions")} />
            <label>Aceitar termos e condições</label>
          </div>
          {!!errors.terms_and_conditions && (
            <span>{errors.terms_and_conditions.message}</span>
          )}
          <Input
            placeholder="Digite seu nome"
            type="text"
            register={register}
            name="name"
            label="Nome"
          />
          {!!errors.name && <span>{errors.name.message}</span>}
          <Input
            placeholder="Digite seu sobrenome"
            type="text"
            register={register}
            name="last_name"
            label="Sobrenome"
          />
          {!!errors.last_name && <span>{errors.last_name.message}</span>}
          <Input
            placeholder="Digite as suas especialidades"
            type="text"
            register={register}
            name="specialty"
            label="Especialidades"
          />
          {!!errors.specialty && <span>{errors.specialty.message}</span>}
          <Input
            placeholder="Digite seu CRM"
            type="number"
            register={register}
            name="crm"
            label="CRM"
          />
          {!!errors.crm && <span>{errors.crm.message}</span>}
          <Input
            placeholder="Digite seu endereço de atendimento"
            type="text"
            register={register}
            name="address"
            label="Endereço de atendimento"
          />
          {!!errors.address && <span>{errors.address.message}</span>}
          <div className="container-selectInput container-input">
            <p>O local tem acesibilidade?</p>
            <div>
              <label htmlFor="sim">sim</label>
              <input
                type="radio"
                value="sim"
                {...register("acessibility")}
                checked={inputRadioValue === "sim"}
                defaultChecked
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="não">não</label>
              <input
                type="radio"
                value="não"
                {...register("acessibility")}
                checked={inputRadioValue === "não"}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="container-input">
            <p>Quais as modalidades que você atende?</p>
            <div className="container-checkboxInput">
              <input type="checkbox" label="online" {...register("online")} />
              <label>Online</label>
            </div>
            <div className="container-checkboxInput">
              <input
                type="checkbox"
                label="online"
                {...register("presential")}
              />
              <label>Presencial</label>
            </div>
          </div>
          <Input
            placeholder="Digite o número de seu WhatsApp"
            type="text"
            register={register}
            name="whatsapp"
            label="WhatsApp"
          />
          {!!errors.whatsapp && <span>{errors.whatsapp.message}</span>}
          <Input
            placeholder="Digite o seu perfil do Instagram"
            type="text"
            register={register}
            name="instagram"
            label="Instagram"
          />
          <Input
            placeholder="Digite o endereço do seu site"
            type="text"
            register={register}
            name="site"
            label="Site"
          />
          <textarea placeholder="Fale mais sobre você" />
          <div className="container-button">
            <Button type="submit">Cadastrar</Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FormRegister;
