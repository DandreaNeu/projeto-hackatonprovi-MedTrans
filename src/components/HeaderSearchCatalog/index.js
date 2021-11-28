import { Container, Logo, Content } from "./styles";
import { FiSearch } from "react-icons/fi";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { useState } from "react";

const HeaderSearchCatalog = () => {
  const [inputValueSpecialist, setInputValueSpecialist] = useState("");

  return (
    <>
      <Container>
        <Logo>
          <figure>
            <img alt="logo medtrans"></img>
            <figcaption>Logo</figcaption>
          </figure>
        </Logo>
        <Content>
          <h2 className="Content-text">
            Especialistas <br /> MedTrans
          </h2>
          <p className="Content-text">
            Aqui você tem um catálogo de médicos prontos para atender o público
            trans e travestis.
          </p>
          <div>
            <input
              placeholder="Encontre um especialista"
              onChange={(e) => setInputValueSpecialist(e.target.value)}
              value={inputValueSpecialist}
            />
            <button disabled={!inputValueSpecialist}>
              <FiSearch />
            </button>
            {/*<button>Procurar</button>*/}
          </div>
        </Content>
        <HiOutlineChevronDoubleDown className="icon-scroll_down" />
      </Container>
    </>
  );
};

export default HeaderSearchCatalog;
