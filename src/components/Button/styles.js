import styled from "styled-components";

export const Container = styled.button`
  width: 200px;
  height: 45px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => (props.whiteSchema ? "#FFF" : "#005DDE")};
  border: 2px solid ${(props) => (props.whiteSchema ? "#FFF" : "#005DDE")};
  color: ${(props) => (props.whiteSchema ? "#005DDE" : "#FFF")};
`;
