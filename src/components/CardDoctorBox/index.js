import { Container } from "./styles";
import CardDoctor from "../CardDoctor";

const CardDoctorBox = () => {
  return (
    <Container>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <CardDoctor />
      ))}
    </Container>
  );
};

export default CardDoctorBox;
