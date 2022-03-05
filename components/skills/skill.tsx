import { Icon, SkillWrapper } from './index.style';

type Props = {
  icon: string;
  title: string;
};

export function Skill({ icon, title }: Props) {
  return (
    <SkillWrapper>
      <Icon>{icon}</Icon>
    </SkillWrapper>
  );
}
