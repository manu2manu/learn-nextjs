import { SectionsCommon } from '../commons/sections';
import { SectionsItems } from '../commons/sections/index.style';
import Toolbox from './toolbox';
import { qualifications } from './utils';

export function CoreQualifications() {
  return (
    <SectionsCommon title="Core Qualifications">
      <SectionsItems>
        {qualifications.map(([icon, text], key: number) => (
          <Toolbox {...{ key, icon, text }} />
        ))}
      </SectionsItems>
    </SectionsCommon>
  );
}
