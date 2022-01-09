import styled, { css } from "styled-components";
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
  height: 60px;
  z-index: 4;
  padding: 0 5px;
  justify-content: space-around;
  background: ${({ scrolling }: any) => (scrolling ? '#ffffff40' : 'transpaarent')};
  backdrop-filter: blur(4px);
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

export const NavLinksWrapper = styled.div`
  display: none;
  padding: 0;
  justify-content: space-around;
  align-items: center;
  width: auto;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const ToggleWrapper = styled.span`
  font-size: 22px;
  cursor: pointer;
`
