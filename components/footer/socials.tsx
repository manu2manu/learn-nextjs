import { SocialWrapper } from "./index.style";
import { Social } from "./social";

const socials = [
  ['','https://twitter.com/manujsdev', '@manujsdev'],
  ['','https://github.com/manujsdev', '@manujsdev'],
  ['','https://www.linkedin.com/in/yoan-manuel-p%C3%A9rez-pi%C3%B1ero-730a17108/', 'Manu']
];

export function Socials() {
  return (
    <SocialWrapper>
    {socials.map(([icon, href, textTooltip], key: number) => <Social {...{icon, href, textTooltip, key}} />)}
    </SocialWrapper>
  )
}
