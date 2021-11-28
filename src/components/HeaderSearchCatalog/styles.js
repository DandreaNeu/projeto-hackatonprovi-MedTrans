import styled from "styled-components";

export const Container = styled.section`
  /*background: url(${(props) =>
    props.whiteSchema ? "image-Kelvin" : "iamge-dandrea"});*/
  background-color: var(--blue);
  height: 85vh;
  padding: 0 1.5rem;

  .icon-scroll_down {
    position: absolute;
    bottom: 110px;
    right: 50%;
    color: var(--white);
    font-size: 25px;
  }
`;

export const Logo = styled.div`
  figcaption {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .Content-text {
    text-align: center;
    color: var(--white);
    padding-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.4rem;
  }

  div {
    display: flex;
    input {
      height: 50px;
      border-radius: 8px 0 0 8px;
      padding-left: 1rem;
    }

    input::placeholder {
      color: var(--blue);
      font-weight: bold;
    }

    button {
      height: 50px;
      width: 60px;
      border-radius: 0 8px 8px 0;
      background-color: var(--pink);

      svg {
        color: var(--white);
        font-size: 1.4rem;
      }
    }
  }
`;
