import { ReactNode } from "react";
import { TooltipText, TooltipWrapper } from "./index.style";

type Props = {
  children: ReactNode;
  text: string;
};

export function Tooltip({children, text}: Props) {
  return (
  <TooltipWrapper>
    {children}
    <TooltipText className="tooltiptext">{text}</TooltipText>
  </TooltipWrapper>
  )}
