import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  width: 266px;
  height: 44px;
  color: white;
  border-color: transparent;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
