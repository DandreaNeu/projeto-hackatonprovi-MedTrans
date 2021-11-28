import styled from "styled-components";

export const Container = styled.li`
  box-shadow: 0 4px 5px var(--gray);
  border-radius: 8px;
  padding: 1rem;
  background-color: #ebedf2;
  margin: 1rem;

  .container-button {
    text-align: center;
  }

  .header-info {
    display: flex;

    div {
      padding-left: 1rem;

      h3 {
        padding-bottom: 0.5rem;
      }
    }
  }

  .content {
    p {
      padding: 0.5rem 0;
      span {
        font-weight: bold;
      }
    }
  }

  .footer {
    a {
      display: flex;
      align-items: center;
      padding: 1rem 0;

      svg {
        color: var(--red);
      }
      p {
        padding-left: 0.5rem;
        color: var(--blue-dark);
      }
    }
  }
`;
