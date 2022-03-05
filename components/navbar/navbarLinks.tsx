import { ScreenType, useScreen } from '../../core/hooks/useScreen';
import useScrolling from '../../core/hooks/useScrolling';
import MenuItemLink from './MenuItemLink';
import { NavLinksWrapper } from './navbar.style';

function NavbarLinks() {
  const size = useScreen();
  const isScrolling = useScrolling(size === ScreenType.TABLET ? 35 : 10);
  return (
    <NavLinksWrapper>
      <MenuItemLink scrolling={isScrolling ? 1 : 0} href="/blog" key="blog">
        Blog
      </MenuItemLink>
      <MenuItemLink scrolling={isScrolling ? 1 : 0} href="/news" key="news">
        News
      </MenuItemLink>
    </NavLinksWrapper>
  );
}

export default NavbarLinks;
