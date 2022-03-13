import { NavbarRightSectionWrapper } from './navbar.style';
import ToggleDark from './ToggleDark';

export default function NavbarRightSection() {
  return (
    <NavbarRightSectionWrapper>
      {/*TODO Commented by the moment  */}
      {/* <NavbarLinks /> */}
      {/* <MenuBtnWrapper {...{ isScrolling }} onClick={onChange}> */}
      {/*   {''} */}
      {/* </MenuBtnWrapper> */}
      <ToggleDark />
    </NavbarRightSectionWrapper>
  );
}
