import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: 4fr 1fr 5fr;
  padding: 32px;
  background-color: white;
`;

export const DescriptionContainer = styled.div`
  grid-row-start: 3;
`;

export const DescriptionTitle = styled.h2`
  margin: 0;
  font-weight: normal;
  font-size: 28px;
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  color: #666666;
`;
