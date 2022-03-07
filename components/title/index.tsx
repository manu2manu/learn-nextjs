import { ReactNode } from 'react';
import { TitleWrapper } from './index.style';

type Props = {
  children: ReactNode;
};

export function Title({ children }: Props) {
  return <TitleWrapper>{children}</TitleWrapper>;
}
