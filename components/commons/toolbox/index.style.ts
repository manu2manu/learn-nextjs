import styled from 'styled-components';

export const ToolboxWrapper = styled.div`
  border-radius: 0.56em;
  transition: box-shadow 0.2s ease, border 0.2s ease;
  width: ${({ width }: any) => (width ? width : 12)}rem;
  height: ${({ width }: any) => (width ? width : 12)}rem;
  background-color: ${({ theme }: any) => theme.bodyBg};
  box-shadow: ${({ theme }: any) => `0 0 35px 0 ${theme.boxShadow}`};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  margin: 20px;
  position: relative;

  &:hover {
    transition: box-shadow 0.2s ease;
  }
`;

export const BoxIcon = styled.span`
  font-size: 2.2em;
  margin: 17px 0;
`;

export const Boxtext = styled.span`
  font-weight: bold;
  margin: 15px;
`;

export const CornerRight = styled.div`
  position: absolute;
  right: 18px;
  bottom: 10px;
  font-size: 1.8em;
`;
