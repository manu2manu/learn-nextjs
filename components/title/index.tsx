import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const TitleWrapper = styled.span`
  align-self: center;
  font-size: 1.7em;
  font-weight: bold;
  margin-bottom: 25px;
`;

export function Title({ children }: Props) {
  return <TitleWrapper>{children}</TitleWrapper>;
}
