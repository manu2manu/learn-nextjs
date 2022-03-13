import styled from 'styled-components';
import { HorizontalCenter } from '../../styles/layout';

export const FooterContainer = styled.div`
  ${HorizontalCenter};
  color: ${({ theme }: any) => theme.text};

  max-width: 100vw;
  height: 55px;
  z-index: 4;
  justify-content: space-between;
  backdrop-filter: blur(4px);
  bottom: 0;
  position: fixed;
  width: 100vw;
`;

export const CopyRight = styled.div`
  margin-left: 22px;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90px;
  margin-right: 22px;
`;
