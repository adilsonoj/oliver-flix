import styled from "styled-components";

const Button = styled.button`
  border: none;
  color: var(--white);
  font-size: 1rem;
  background-color: var(--primary);
  padding: 15px 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
