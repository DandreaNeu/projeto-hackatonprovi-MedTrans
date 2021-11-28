import CardDoctorBox from "../../components/CardDoctorBox";
import HeaderSearchCatalog from "../../components/HeaderSearchCatalog";
import Footer from "../../components/Footer";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
const Doctor = () => {
  return (
    <>
      <HeaderSearchCatalog whiteSchema>
        <h2 className="Content-text">
          Especialistas <br /> MedTrans
        </h2>
        <p className="Content-text">
          Aqui você tem um catálogo de médicos prontos para atender o público
          trans e travestis.
        </p>
      </HeaderSearchCatalog>
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
