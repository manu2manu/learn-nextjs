import { BoxIcon, Boxtext, ToolboxWrapper } from './index.style';

type Props = {
  text: string;
  icon: string;
};

export default function Toolbox({ text, icon }: Props) {
  return (
    <ToolboxWrapper>
      <BoxIcon>{icon}</BoxIcon>
      <Boxtext>
        {text}
      </Boxtext>
    </ToolboxWrapper>
  )}
