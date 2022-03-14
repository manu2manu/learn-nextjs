import styled from 'styled-components';

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 50px;
`;

export const Icon = styled.span`
  font-size: 4em;
  &:hover {
    color: ${({ color }: any) => (color ? color : '#1569c4')};
    transition: 0.3s;
  }
`;
