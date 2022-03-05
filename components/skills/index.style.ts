import styled from 'styled-components';

export const ToolboxWrapper = styled.div`
  border: ${({ theme }: any) => `1px solid ${theme.box}`};
  border-radius: 0.56em;
  transition: box-shadow 0.2s ease, border 0.2s ease;
  width: 12rem;
  height: 12rem;
  background-color: ${({ theme }: any) => theme.box};

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    transition: box-shadow 0.2s ease;
    box-shadow: ${({ theme }: any) => `2px 4px 4px 4px ${theme.boxShadow}`};
  }
`;

export const SkillsItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 50px;
`;

export const Icon = styled.span`
  font-size: 4em;
`;
