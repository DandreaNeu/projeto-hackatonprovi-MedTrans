import styled from "styled-components";

export const Container = styled.div`
  padding: 0 1.5rem;

  div {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #000;
  }

  @media all and (min-width: 1000) {
    margin-top: 1.5rem;
  }
`;
