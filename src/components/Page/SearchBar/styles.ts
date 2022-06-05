import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 10px 10px 10px 10px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 10px 0 10px 0;
`;
