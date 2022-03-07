import { SectionsCommon } from '../commons/sections';
import { SectionsItems } from '../commons/sections/index.style';
import { Skill } from './skill';
import { skills } from './utils';

export default function Skills() {
  return (
    <SectionsCommon title="Professional Skills">
      <SectionsItems>
        {skills.map(([icon, title], key: number) => (
          <Skill {...{ key, icon, title }} />
        ))}
      </SectionsItems>
    </SectionsCommon>
  );
}
