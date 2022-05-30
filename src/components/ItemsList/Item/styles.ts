import NextImage from "next/image";
import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  grid-row-end: span 2;
`;
export const Image = styled(NextImage)`
  border-radius: 4px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  grid-template-rows: 1fr 1fr;
  background-color: white;
  padding: 16px;
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
  margin: 0 0 32px 0;
`;

export const PriceText = styled.p`
  font-size: 24px;
  margin: 0 0 0 16px;
`;

export const Text = styled.p`
  font-size: 18px;
  margin: 0 0 0 16px;
`;

export const CityNameText = styled.p`
  font-size: 12px;
  color: #666666;
`;

export const CityNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
