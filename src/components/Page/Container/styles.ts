import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr 10fr 1fr;
  }

  display: grid;
  grid-template-columns: 0.5fr 11fr 0.5fr;
`;

export const Content = styled.div`
  grid-column-start: 2;
  margin-bottom: ${({ theme }) => theme.space.medium};
`;
