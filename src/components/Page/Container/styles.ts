import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr 10fr 1fr;
    display: grid;
  }
`;

export const Content = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-column-start: 2;
  }
  margin-bottom: ${({ theme }) => theme.space.medium};
`;
