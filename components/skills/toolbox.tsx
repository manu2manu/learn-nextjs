import { ReactNode } from 'react';
import { ToolboxWrapper } from './index.style';

type Props = {
  children: ReactNode;
};

export default function Toolbox({ children }: Props) {
  return <ToolboxWrapper>{children}</ToolboxWrapper>;
}
