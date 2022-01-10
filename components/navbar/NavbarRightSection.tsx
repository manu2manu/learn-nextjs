import { NavbarRightSectionWrapper } from "./navbar.style";
import NavbarLinks from "./navbarLinks";
import ToggleDark from "./ToggleDark";

export default function NavbarRightSection() {
  return (
    <NavbarRightSectionWrapper>
      <NavbarLinks /> 
      <ToggleDark />
    </NavbarRightSectionWrapper>
  );
}
