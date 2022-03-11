import { useContext } from 'react';
import { ScreenType, useScreen } from '../../core/hooks/useScreen';
import useScrolling from '../../core/hooks/useScrolling';
import { DrawerContextProvider } from '../contexts/DrawerContext';
import { MenuBtnWrapper, NavbarRightSectionWrapper } from './navbar.style';
import NavbarLinks from './navbarLinks';
import ToggleDark from './ToggleDark';

export default function NavbarRightSection() {
  const { onChange } = useContext(DrawerContextProvider);
  const size = useScreen();
  const isScrolling = useScrolling(size === ScreenType.TABLET ? 35 : 10);

  return (
    <NavbarRightSectionWrapper>
      <NavbarLinks />
      <MenuBtnWrapper {...{ isScrolling }} onClick={onChange}>
        {''}
      </MenuBtnWrapper>
      <ToggleDark />
    </NavbarRightSectionWrapper>
  );
}
