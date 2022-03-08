import styled from 'styled-components';
import ItemLink from '.';

export const ItemLinkBouttonWrapper = styled(ItemLink)`
  color: ${({ theme }: any) => theme.colorButton};
  text-decoration: none;
  transition: all 0.3s ease 0s;
  background-color: ${({ theme }: any) => theme.colors.orange};
  font-size: 1.145em;
  width: 9em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: 0.5s;
    background-color: ${({ theme }: any) => theme.colors.orange208};
  }

  @media (min-width: 768px) {
    font-size: 1.22em;
    width: 9.9em;
  }

  @media (min-width: 768px) {
    font-size: 1.5em;
  }

  @media (min-width: 1920px) {
    font-size: 18px;
  }
`;

export const ItemLinkWrapper = styled(ItemLink)`
  color: ${({ theme }: any) => theme.text};
  text-decoration: none;
  transition: all 0.3s ease 0s;
  font-size: 1.145em;

  @media (min-width: 768px) {
    font-size: 1.22em;
  }

  @media (min-width: 768px) {
    font-size: 1.5em;
  }

  @media (min-width: 1920px) {
    font-size: 18px;
  }
`;
