import { ItemExternalLink } from "../itemLink/itemLink.style";
import { Tooltip } from "../tooltip";

type Props = {
  icon: string;
  href: string;
  textTooltip: string;
};

export function Social({icon, href, textTooltip}: Props) {
  return <Tooltip text={textTooltip}>
      <ItemExternalLink {...{href}} target="_blank">{icon}</ItemExternalLink>
      </Tooltip>
}
