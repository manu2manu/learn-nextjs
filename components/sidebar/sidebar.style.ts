import styled from "styled-components";
import { VerticalCenter } from "../../styles/layout";

export const SidebarDrawerContainer = styled.div`
  top: 0;
  right: 0;
  width: 100%;
  z-index: 4;
  height: 100%;
  background-color: transparent;
  position: fixed;
  overflow-x: hidden;
  &.open {
    visibility: visible;
  }
  &.close {
    visibility: hidden;
  }

  & > div:first-child {
    background-color: #c34;
    position: absolute;
    z-index: 0;
    &.open {
      opacity: 1;
      background: ${({theme}: any ) => theme.bodyBg}; 

    }
    &.close {
      opacity: 0;
    }
    transition: all 0.2s ease-in;
  }
`;

export const DrawerBodyWrapper = styled.div`
  background: #fff;
  position: absolute;
  top: 0;
  right: 0;
  width: 313px;
  height: 100%;
  box-shadow: 1px 0 7px rgba(0, 0, 0, 0.5);
  ${VerticalCenter};
  align-items: flex-start;
  justify-content: space-between;
  visibility: visible;
  & > div {
    width: 100%;
    &:first-child {
      padding-top: 49px;
      padding-left: 42.5px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow: hidden;
      overflow-y: auto;
      max-height: 100%;

      & > a {
        margin-bottom: 13px;
        & > p {
          line-height: 19px;
        }
      }
    }
  }

  &.open {
    transform: translateX(0);
    transition: transform 0.2s ease-in;
  }
  &.close {
    transform: translateX(100%);
    opacity: 0;
    transition: all 0.1s ease-out;
  }

  @media (width: 768px) {
    width: 345px;
    & > div {
      width: 100%;
      &:first-child {
        padding-top: 65px;
        padding-left: 58px;
      }
      &:last-child {
        margin-bottom: 66px;
        a {
          &:last-child {
            margin-right: 0;
          }
          & > img {
            width: 34px;
            height: 34px;
          }
        }
      }
    }
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 10px;
  height: 15px;
  width: 15px;
  right: 10px;
  padding: 5px;
  opacity: 0.6;
  font-size: 18px;
  cursor: pointer;
  color: ${({theme}: any) => theme.text };
`;
