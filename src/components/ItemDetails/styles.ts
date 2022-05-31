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

export const ConditionText = styled.p`
  font-size: 14px;
  color: #666666;
  margin: 0;
`;

export const ItemTitle = styled.h1`
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const ItemPrice = styled.p`
  margin-top: 0;
  margin-bottom: 32px;
  font-size: 46px;
`;

export const BuyButton = styled.button`
  background-color: #3483fa;
  width: 266px;
  height: 44px;
  color: white;
  border-color: transparent;
  cursor: pointer;
  border-radius: 6px;
  font-size: 16px;
`;
