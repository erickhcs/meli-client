import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 7fr 3fr;
    grid-template-rows: 6fr 1fr 2fr;
    padding: ${({ theme }) => theme.space.medium};
  }

  padding: 5px 5px 5px 5px;
  background-color: white;
`;

export const DescriptionContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-row-start: 3;
  }
`;

export const DescriptionTitle = styled.h2`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.smallTitle};
    font-weight: normal;
    margin: 0;
  }
  margin-top: ${({ theme }) => theme.space.medium};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const DescriptionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.gray};
  overflow-wrap: break-word;
`;

export const ConditionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
`;

export const ItemTitle = styled.h1`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
    margin-top: ${({ theme }) => theme.space.small};
    margin-bottom: ${({ theme }) => theme.space.medium};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
  }
  margin-top: ${({ theme }) => theme.space.medium};
  margin-bottom: ${({ theme }) => theme.space.medium};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const ItemPrice = styled.p`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.title};
    margin-bottom: ${({ theme }) => theme.space.medium};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: ${({ theme }) => `${theme.space.small} 0 ${theme.space.small} 0`};
    text-align: center;
  }
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
`;

export const BuyButtonContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-right: ${({ theme }) => theme.space.medium};
  }
`;

export const BuyButton = styled.button`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-right: ${({ theme }) => theme.space.medium};
  }
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
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
