import NextImage from "next/image";
import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  grid-row-end: span 2;
`;
export const Image = styled(NextImage)`
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const Container = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: grid;
    grid-template-columns: 2fr 6fr 2fr;
    grid-template-rows: 1fr 1fr;
    padding: ${({ theme }) => theme.space.small};
  }

  padding: 5px 10px 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const PriceContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: ${({ theme }) => `0 0 ${theme.space.medium} 0`};
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PriceText = styled.p`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: ${({ theme }) => `0 0 0 ${theme.space.small}`};
  }

  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
`;

export const TitleText = styled.p`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: ${({ theme }) => `0 0 0 ${theme.space.small}`};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }

  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const CityNameText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  color: ${({ theme }) => theme.colors.gray};
`;

export const CityNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
