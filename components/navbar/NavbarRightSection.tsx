import { useContext } from "react";
import { DrawerContextProvider } from "../contexts/DrawerContext";
import { MenuBtnWrapper, NavbarRightSectionWrapper } from "./navbar.style";
import NavbarLinks from "./navbarLinks";
import ToggleDark from "./ToggleDark";

export default function NavbarRightSection() {
  const {onChange} = useContext(DrawerContextProvider);
  return (
    <NavbarRightSectionWrapper>
      <NavbarLinks /> 
      <MenuBtnWrapper onClick={onChange}>{''}</MenuBtnWrapper>
      <ToggleDark />
    </NavbarRightSectionWrapper>
  );
}
