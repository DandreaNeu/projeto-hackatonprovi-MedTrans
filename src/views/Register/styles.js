import styled from "styled-components";
import ImagemHeaderMobile from "../../assets/imgCadastroMobile.svg";

export const Container = styled.div`
  @media all and (min-width: 1000px) {
    display: flex;
    flex: 1;
  }
`;

export const Content = styled.div`
  position: relative;
`;

export const ImageHeader = styled.div`
  background: url(${ImagemHeaderMobile}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 180px;

  @media all and (min-width: 1000px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: auto;
    z-index: -1;
  }
`;

export const DescriptionHeader = styled.div`
  padding: 1.5rem;

  div {
    h2 {
      text-align: center;
      color: #1a254d;
    }

    p {
      font-size: 1.2rem;
      text-align: center;
      padding-top: 1.5rem;
    }
  }

  @media all and (min-width: 1000px) {
    padding: 5rem 1.5rem 0 1.5rem;

    div {
      padding: 1.5rem;
    }
  }
`;
