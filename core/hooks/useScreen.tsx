import { useWindowSize } from './useWindowSize';

export enum ScreenType {
  MOBILE,
  TABLET,
  LAPTOP,
  DESKTOP
}

export const useScreen = (last?: boolean) => {
  const { width } = useWindowSize();
  if (width >= (last ? 1920 : 1440)) {
    return ScreenType.DESKTOP;
  }
  if (width >= 1024) {
    return ScreenType.LAPTOP;
  }
  if (width >= 768) {
    return ScreenType.TABLET;
  }
  return ScreenType.MOBILE;
};

