import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem;
  width: 100%;
`;

export const Form = styled.form`
  padding: 1.5rem 0;
  max-width: 550px;
  margin: 0 auto;

  span {
    color: #f00;
  }

  .container-input {
    p {
      text-align: left;
      font-size: 1rem;
    }
  }

  .container-checkboxInput {
    width: 100%;
    display: flex;
    align-items: center;

    input {
      margin: 1rem 1rem 1rem 0;
      border-radius: 5px;
    }
  }

  .container-selectInput {
    padding: 1rem 0;

    p {
      padding: 0 0 0.5rem 0;
    }

    div {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      align-items: center;

      label {
        padding-left: 1rem;
      }
    }
  }

  .container-button {
    text-align: center;
  }

  input {
    margin: 0.5rem 0;
  }

  textarea {
    height: 240px;
    width: 100%;
    border-radius: 8px;
    padding: 1rem;
    margin: 0.5rem 0 1.5rem 0;
    font-weight: bold;
    background-color: #d7e1f3;
  }
`;
