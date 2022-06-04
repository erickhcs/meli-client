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
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  grid-template-rows: 1fr 1fr;
  background-color: white;
  padding: ${({ theme }) => theme.space.small};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${({ theme }) => `0 0 ${theme.space.medium} 0`};
`;

export const PriceText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  margin: ${({ theme }) => `0 0 0 ${theme.space.small}`};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: ${({ theme }) => `0 0 0 ${theme.space.small}`};
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
