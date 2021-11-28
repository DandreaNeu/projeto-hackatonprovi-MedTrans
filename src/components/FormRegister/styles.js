import styled from "styled-components";

export const Form = styled.form`
  text-align: center;
  padding: 1.5rem 0;

  .container-checkboxInput {
    width: 100%;
    display: flex;
    align-items: center;

    input {
      margin: 1rem 1rem 1rem 0;
    }
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
