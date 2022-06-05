import styled from "styled-components";

export const Input = styled.input`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-left: 20px;
    width: 523px;
  }

  height: 39px;
  border: 0;
  margin-left: 10px;
  width: 200px;
  padding: 7px 60px 9px 15px;
`;

export const Button = styled.button`
  width: 46px;
  height: 39px;
  border: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
