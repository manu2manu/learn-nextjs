import { ReactNode } from 'react';
import { ItemExternalLink } from '../../itemLink/itemLink.style';
import { BoxIcon, Boxtext, CornerRight, ToolboxWrapper } from './index.style';

type Props = {
  text: string;
  icon: string;
  width?: number;
  extra?: string | ReactNode;
  link?: string;
  iconOrTextLink?: string;
};

export default function Toolbox({ text, icon, width, extra, link, iconOrTextLink }: Props) {
  return (
    <ToolboxWrapper {...{ width }}>
      <BoxIcon>{icon}</BoxIcon>
      <Boxtext>{text}</Boxtext>
      {extra}
      {link ? (
        <CornerRight>
          <ItemExternalLink target="_blank" href={link}>
            {iconOrTextLink}
          </ItemExternalLink>
        </CornerRight>
      ) : null}
    </ToolboxWrapper>
  );
}
