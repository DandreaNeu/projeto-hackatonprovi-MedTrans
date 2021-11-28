import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 45px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => (props.whiteSchema ? "#FFF" : "#000")};
  border: 2px solid ${(props) => (props.whiteSchema ? "#FFF" : "#000")};
  color: ${(props) => (props.whiteSchema ? "#000" : "#FFF")};
`;
