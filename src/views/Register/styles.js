import styled from "styled-components";
import ImagemHeaderMobile from "../../assets/imgCadastroMobile.svg";

export const Container = styled.div``;

export const ImageHeader = styled.div`
  background: url(${ImagemHeaderMobile}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 180px;
`;

export const Content = styled.div`
  padding: 1.5rem;

  h2 {
    text-align: center;
    color: #1a254d;
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    padding-top: 1.5rem;
  }
`;

export const DescriptionHeader = styled.div``;
