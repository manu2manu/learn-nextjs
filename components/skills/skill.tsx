import { Tooltip } from '../tooltip';
import { Icon, SkillWrapper } from './index.style';

type Props = {
  icon: string;
  title: string;
};

export function Skill({ icon, title }: Props) {
  return (
    <Tooltip text={title}>
      <SkillWrapper>
        <Icon>{icon}</Icon>
      </SkillWrapper>
    </Tooltip>
  );
}
