import { ScreenType, useScreen } from "../../core/hooks/useScreen";
import useScrolling from "../../core/hooks/useScrolling";
import { NavbarContainer } from "./navbar.style";

function NavBar() {
  const size = useScreen();
  const isScrolling = useScrolling(size === ScreenType.TABLET ? 35 : 10);
  return (
    <NavbarContainer scrolling={isScrolling ? 1 : 0}>
      Test
    </NavbarContainer>
  );
}

export default NavBar; 
