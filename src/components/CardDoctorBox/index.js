import { Container } from "./styles";
import CardDoctor from "../CardDoctor";
import { UserContext } from "../../provider/user";
import { useContext } from "react";

const CardDoctorBox = () => {
  const { listDoctors } = useContext(UserContext);

  return (
    <Container>
      {listDoctors.map((doctor) => (
        <CardDoctor doctor={doctor} />
      ))}
    </Container>
  );
};

export default CardDoctorBox;
