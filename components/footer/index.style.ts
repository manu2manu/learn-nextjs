import styled from "styled-components";
import { HorizontalCenter } from "../../styles/layout";

export const FooterContainer = styled.div`
  ${HorizontalCenter};
  color: ${({ theme }: any) => theme.text};

  max-width: 100vw;
  height: 55px;
  z-index: 4;
  padding: 0 45px;
  justify-content: space-between;
  backdrop-filter: blur(4px);
  margin-bottom: 0;
  bottom: 0;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90px;
`;
