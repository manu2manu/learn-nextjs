import { css } from "styled-components";

export const HorizontalCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VerticalCenter = css`
  ${HorizontalCenter};
  flex-direction: column;
`;
