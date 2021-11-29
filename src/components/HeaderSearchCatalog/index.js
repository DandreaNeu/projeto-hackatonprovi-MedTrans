import { Container, Logo, Content } from "./styles";
import { FiSearch } from "react-icons/fi";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { useState } from "react";

const HeaderSearchCatalog = ({ whiteSchema, children }) => {
  const [inputValueSpecialist, setInputValueSpecialist] = useState("");

  return (
    <>
      <Container whiteSchema>
        <Logo>
          <figure>
            <img alt="logo medtrans"></img>
            <figcaption>Logo</figcaption>
          </figure>
        </Logo>
        <Content>
          {children}
          <div>
            <input
              placeholder="Encontre um especialista"
              onChange={(e) => setInputValueSpecialist(e.target.value)}
              value={inputValueSpecialist}
            />
            <button disabled={!inputValueSpecialist}>
              <FiSearch />
            </button>
          </div>
        </Content>
        <HiOutlineChevronDoubleDown className="icon-scroll_down" />
      </Container>
    </>
  );
};

export default HeaderSearchCatalog;
