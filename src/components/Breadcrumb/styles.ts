import styled from "styled-components";

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: ${({ theme }) => `${theme.space.small} 0 ${theme.space.small} 0`};
  color: ${({ theme }) => theme.colors.gray};

  & > li:after {
    content: ">";
    padding: 0 8px;
  }
`;

export const ListItem = styled.li`
  display: inline-block;

  &:last-of-type:after {
    content: "";
    padding: 0;
  }
`;
