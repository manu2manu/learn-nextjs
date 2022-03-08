import { ItemLinkBouttonWrapper } from '../itemLink/itemLink.style';

type Props = {
  href: string;
  text: string;
};

export default function ButtonComponent({ href, text }: Props) {
  return <ItemLinkBouttonWrapper {...{ href }}>{text}</ItemLinkBouttonWrapper>;
}
