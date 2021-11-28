import CardDoctorBox from "../../components/CardDoctorBox";
import HeaderSearchCatalog from "../../components/HeaderSearchCatalog";
import Footer from "../../components/Footer";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
const Doctor = () => {
  return (
    <>
      <HeaderSearchCatalog />
      <CardDoctorBox />
      <Footer>
        <p>Saiba mais nas redes sociais:</p>
        <div>
          <AiFillLinkedin />
          <AiFillInstagram />
        </div>
      </Footer>
    </>
  );
};

export default Doctor;
