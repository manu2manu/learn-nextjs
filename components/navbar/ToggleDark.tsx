import { useContext } from 'react';
import { ScreenType, useScreen } from '../../core/hooks/useScreen';
import useScrolling from '../../core/hooks/useScrolling';
import { ThemeContextP } from '../contexts/ThemeContext';
import { ToggleWrapper } from './navbar.style';

export default function ToggleDark() {
  const { dark, toggleDark } = useContext(ThemeContextP);
  const size = useScreen();
  const isScrolling = useScrolling(size === ScreenType.TABLET ? 35 : 10);

  return (
    <ToggleWrapper scrolling={isScrolling ? 1 : 0} onClick={toggleDark}>
      {dark ? '盛' : ''}
    </ToggleWrapper>
  );
}
