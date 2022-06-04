import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: 4fr 1fr 5fr;
  padding: ${({ theme }) => theme.space.medium};
  background-color: white;
`;

export const DescriptionContainer = styled.div`
  grid-row-start: 3;
`;

export const DescriptionTitle = styled.h2`
  margin: 0;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes.smallTitle};
`;

export const DescriptionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.gray};
`;

export const ConditionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
`;

export const ItemTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  margin-top: ${({ theme }) => theme.space.small};
  margin-bottom: ${({ theme }) => theme.space.medium};
`;

export const ItemPrice = styled.p`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.space.medium};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const BuyButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  width: 266px;
  height: 44px;
  color: white;
  border-color: transparent;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
