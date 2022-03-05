import styled, { css } from 'styled-components';
import { HorizontalCenter } from '../../styles/layout';

export type ScrollProps = {
  scrolling: boolean | number;
  width?: number;
  removeBackground?: boolean;
};

const OnScrolling = css`
  box-shadow: 0 0 4px 0 #071d28;
  transition: down 4.3s;
`;

export const DesktopNavbarHeight1366 = '82px';

export const NavbarContainer = styled.div<ScrollProps>`
  ${HorizontalCenter};
  max-width: 100vw;
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 4;
  padding: 0 5px;
  justify-content: space-between;
  background: ${({ scrolling }: any) => (scrolling ? '#ffffff40' : 'transparent')};
  backdrop-filter: blur(4px);
  margin-top: 0;
  top: 0;

  ${({ scrolling }: any) => (scrolling ? OnScrolling : '')};

  @media (min-width: 1366px) {
    height: ${DesktopNavbarHeight1366};
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
  @media (min-width: 1024px) {
    display: flex;
    padding: 0;
    justify-content: space-around;
    align-items: center;
    width: auto;
  }
`;

export const MenuBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 25px;
  margin: 0 20px;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ToggleWrapper = styled.div`
  font-size: 22px;
  cursor: pointer;
  color: ${({ scrolling, theme }: any) => (scrolling ? theme.colorNavBarScroll : theme.text)};
`;

export const NavbarRightSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 20px;

  @media (min-width: 1024px) {
    padding-right: 35px;
  }
`;
