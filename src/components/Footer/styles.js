import styled from "styled-components";

export const Container = styled.div`
  padding: 0 1.5rem;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #000;

    p {
      padding: 0.8rem 0;
    }

    div {
      svg {
        font-size: 30px;
        color: var(--red);
      }

      svg + svg {
        margin-left: 1rem;
      }
    }
  }

  @media all and (min-width: 1000) {
    margin-top: 1.5rem;
  }
`;
