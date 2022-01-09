import { ScreenType, useScreen } from "../../core/hooks/useScreen";
import useScrolling from "../../core/hooks/useScrolling";
import LogoNavbar from "./LogoNavbar";
import { NavbarContainer } from "./navbar.style";
import NavbarLinks from "./navbarLinks";
import ToggleDark from "./ToggleDark";

function NavBar() {
  const size = useScreen();
  const isScrolling = useScrolling(size === ScreenType.TABLET ? 35 : 10);

  return (
    <NavbarContainer scrolling={isScrolling ? 1 : 0}>
      <LogoNavbar href="/">{'<Manu />'}</LogoNavbar>
      <NavbarLinks /> 
      <ToggleDark />
    </NavbarContainer>
  );
}

export default NavBar; 
