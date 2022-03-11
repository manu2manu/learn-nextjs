import Link from 'next/link';
import styled from 'styled-components';

const LogoNavbar = ({ as, children, className, href }: any) => (
  <Link {...{ href, as }} passHref>
    <a {...{ className }}>{children}</a>
  </Link>
);

export default styled(LogoNavbar)`
  color: ${({ scrolling, theme }: any) => (scrolling ? theme.colorNavBarScroll : theme.text)};
  font-size: 25px;
  line-height: 17px;
  margin: 0 2vw;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease 0s;
  &:hover {
    transition: 0.5s;
    border-radius: 3px;
    color: ${({ theme }: any) => theme.colors.bg1};
  }

  @media (min-width: 1366px) {
    font-size: 30px;
  }
`;
