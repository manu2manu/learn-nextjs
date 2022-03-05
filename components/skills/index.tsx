import { SectionsCommon } from '../commons/sections';
import { SkillsItems } from './index.style';
import { Skill } from './skill';

const skills = [
  ['', 'Javascript'],
  ['ﯤ', 'Typescript'],
  ['', 'CSS'],
  ['', 'Sass'],
  ['', 'React'],
  ['', 'Angular'],
  ['', 'Nodejs'],
  ['', 'Material UI'],
  ['', 'Git'],
  ['', 'Github'],
  ['', 'Gitlab'],
  ['', 'Jira']
];

export default function Skills() {
  return (
    <SectionsCommon title="Professional Skills">
      <SkillsItems>
        {skills.map(([icon, title], key: number) => (
          <Skill {...{ key, icon, title }} />
        ))}
      </SkillsItems>
    </SectionsCommon>
  );
}
