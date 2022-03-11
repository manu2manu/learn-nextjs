import { SectionsCommon } from '../commons/sections';
import { SectionsItems } from '../commons/sections/index.style';
import Toolbox from '../commons/toolbox';
import { ExtraWrapper } from './index.style';

const projects = [
  [
    '',
    'GraphQL-React-Client',
    'Apollo Client service for React applications',
    'https://github.com/manujsdev/graphql-react-client',
    ''
  ],
  [
    '',
    'Rift-router',
    'Blazing Fast and Lightweight router for React Based on state first',
    'https://github.com/Cervantes007/rift-router',
    ''
  ]
];

export function Projects() {
  return (
    <SectionsCommon title="Projects (Creator/Collaborator)">
      <SectionsItems>
        {projects.map(([icon, text, description, link, iconOrTextLink], key: number) => (
          <Toolbox
            {...{ key, icon, text, link, iconOrTextLink }}
            width={16}
            extra={<ExtraWrapper>{description}</ExtraWrapper>}
          />
        ))}
      </SectionsItems>
    </SectionsCommon>
  );
}
