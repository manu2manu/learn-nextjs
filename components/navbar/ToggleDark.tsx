import { useContext } from "react";
import { ThemeContextP } from "../contexts/ThemeContext";
import { ToggleWrapper } from "./navbar.style";

export default function ToggleDark() {
  const { dark,toggleDark } = useContext(ThemeContextP);

  return <ToggleWrapper onClick={toggleDark}>{dark ?  "" : ""}</ToggleWrapper> 

}
