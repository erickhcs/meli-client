import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
`;
export const Loader = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  margin-bottom: ${({ theme }) => theme.space.medium};
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3;
  border-top: ${({ theme }) => `10px solid ${theme.colors.blue}`};
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
`;
