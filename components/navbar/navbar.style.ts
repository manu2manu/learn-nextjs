import styled, { css } from "styled-components";
import { theme } from "../../styles/globalStyle";
import { HorizontalCenter } from "../../styles/layout";

export type ScrollProps = {
  scrolling: boolean | number;
  width?: number;
  removeBackground?: boolean;
};

const OnScrolling = css`
  box-shadow: 0 0 4px 0 #071d28;
  transition: down 4.3s;
`

export const DesktopNavbarHeight1366 = '82px';

export const NavbarContainer = styled.div < ScrollProps > `
  ${HorizontalCenter};
  max-width: 100vw;
  position: fixed;
  width: 100%;
  z-index: 4;
  padding: 0 37px;
  justify-content: space-between;
  background: ${({ scrolling }: any) => (scrolling ? theme.colors.bright.aqua : 'transpaarent')};
  margin-top: 0;
  top: 0;

  ${({ scrolling }: any) => (scrolling ? OnScrolling : '')};

  @media (min-width: 1366px) {
    height: ${DesktopNavbarHeight1366};
    display: flex;
    align-items: center;
    flex-direction: row;
    top: 0;
    left: 0;
    width: 100vw;
    transition: all 800ms ease;
    z-index: 10;
    ${({ scrolling }: any) => (scrolling ? '' : 'margin-top:0px;')};
  }
`;

