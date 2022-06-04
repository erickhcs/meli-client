import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
`;

export const Content = styled.div`
  grid-column-start: 2;
  margin-bottom: ${({ theme }) => theme.space.medium};
`;
