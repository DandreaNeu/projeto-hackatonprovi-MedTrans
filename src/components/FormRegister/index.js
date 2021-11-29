import { Form, Container } from "./styles";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../provider/user";

const FormRegister = () => {
  const [inputRadioValue, setInputRadioValue] = useState("sim");
  const [inputSelectValue, setInputSelectValue] = useState("Clinico Geral");

  const { registerUser } = useContext(UserContext);

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo 6 dígitos"),
    aceite: yup
      .boolean()
      .oneOf([true], "Necessário aceitar termos e condições"),
    name: yup.string().required("Campo obrigatório"),
    last_name: yup.string().required("Campo obrigatório"),
    specialty: yup.string().required("Campo obrigatório"),
    crm: yup.string().required("Campo obrigatório").max(6, "Máximo 6 dígitos"),
    address: yup.string().required("Campo obrigatório"),
    phone: yup.string().required("Campo obrigatório"),
  });

  const handleChange = (e) => {
    setInputRadioValue(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = (data) => {
    data["pcd"] = !!data["pcd"];
    registerUser(data);
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
            <input type="checkbox" {...register("aceite")} />
            <label>Aceitar termos e condições</label>
          </div>
          {!!errors.aceite && <span>{errors.aceite.message}</span>}
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
          <select
            value={inputSelectValue}
            {...register("specialty")}
            onChange={(e) => setInputSelectValue(e.target.value)}
            className="container-input_select"
          >
            <option value="Ginecologista">Ginecologista</option>
            <option value="Cardiologista">Cardiologista</option>
            <option value="Cirurgião Plastico">Cirurgião Plastico</option>
            <option value="Endocrinologista">Endocrinologista</option>
            <option value="Psicologia">Psicologia</option>
            <option value="Urologia">Urologia</option>
            <option value="Clinico Geral">Clinico Geral</option>
          </select>
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
                value={"sim"}
                {...register("pcd")}
                checked={inputRadioValue === "sim"}
                defaultChecked
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="não">não</label>
              <input
                type="radio"
                value={""}
                {...register("pcd")}
                checked={inputRadioValue === ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="container-input">
            <p>Quais as modalidades que você atende?</p>
            <div className="container-checkboxInput">
              <input
                type="checkbox"
                label="atendimento_online"
                {...register("atendimento_online")}
              />
              <label>Online</label>
            </div>
            <div className="container-checkboxInput">
              <input
                type="checkbox"
                label="atendimento_presencial"
                {...register("atendimento_presencial")}
              />
              <label>Presencial</label>
            </div>
          </div>
          <Input
            placeholder="Digite o número de seu WhatsApp"
            type="text"
            register={register}
            name="phone"
            label="phone"
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
          <textarea
            placeholder="Fale mais sobre você"
            {...register("descript")}
          />
          <div className="container-button">
            <Button type="submit">Cadastrar</Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FormRegister;
