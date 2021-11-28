import { Container } from "./styles";

const Input = ({ register, name, ...rest }) => {
  return <Container {...register(name)} {...rest}></Container>;
};

export default Input;
