import styled from 'styled-components';

export const IndexContainer = styled.div`
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  span {
    font-size: 1.38em;
  }

  @media (min-width: 768px) {
    span {
      font-size: 1.48em;
    }
    p {
      font-size: 1.24em;
    }
  }

  @media (min-width: 1024px) {
    span {
      font-size: 1.6em;
    }
    p {
      font-size: 1.3em;
      max-width: 26em;
    }
  }

  @media (min-width: 1440px) {
    span {
      font-size: 2.3em;
    }
    p {
      font-size: 1.7em;
    }
  }
`;

export const HomeBgWrapper = styled.div`
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0%, 100% 18%, 0% 100%);
  background-image: linear-gradient(
    120deg,
    ${({ theme }: any) => theme.colors.orange} 47%,
    ${({ theme }: any) => theme.colors.orange} 54%,
    ${({ theme }: any) => theme.colors.orange} 62%
  );
  position: absolute;
  top: 0;
  z-index: -1;
`;
