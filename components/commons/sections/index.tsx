import { ReactNode } from "react";
import { Title } from "../../title";
import { SectionsWrapper } from "./index.style";

type Props = {
  title: string;
  children: ReactNode;
};

export function SectionsCommon({title, children}: Props) {
  return <SectionsWrapper>
      <Title>{title}</Title>
      {children}
  </SectionsWrapper>
}
