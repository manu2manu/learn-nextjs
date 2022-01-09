import Link from 'next/link'
import styled from 'styled-components'
import { theme } from '../../styles/globalStyle';

const MenuItemLink = ({ as, children, className, href }: any) => (
  <Link {...{ href, as }} passHref>
    <a {...{ className }}>{children}</a>
  </Link>
);

export default styled(MenuItemLink)`
  color: ${({theme}: any) => theme.text};
  font-size: 14px;
  line-height: 17px;
  margin: 0 2vw;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease 0s;
  
  &:hover {
    transition: 0.5s;
    border-radius: 3px;
    color: ${theme.colors.bg4};
  }

  @media (min-width: 1920px) {
    font-size: 18px;
  }
`;
