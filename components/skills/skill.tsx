import { Tooltip } from '../tooltip';
import { Icon, SkillWrapper } from './index.style';

type Props = {
  icon: string;
  title: string;
  color: string;
};

export function Skill({ icon, title, color }: Props) {
  return (
    <Tooltip text={title}>
      <SkillWrapper>
        <Icon {...{ color }}>{icon}</Icon>
      </SkillWrapper>
    </Tooltip>
  );
}
