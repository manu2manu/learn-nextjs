import { ReactNode, useContext } from 'react';
import NavBar from './navbar';
import Header from './head';
import { Container } from './layout.style';
import SidebarDrawer from './sidebar/SidebarDrawer';
import { DrawerContextProvider } from './contexts/DrawerContext';
import { Footer } from './footer';

type Props = {
  children: ReactNode;
  home?: boolean;
};

export const siteTitle = 'Manu`s website';

export default function Layout({ children }: Props) {
  const { isOpen, onChange } = useContext(DrawerContextProvider);
  return (
    <>
      <Header title={siteTitle} />
      <NavBar />
      <Container>
        <main>{children}</main>
        <SidebarDrawer {...{ isOpen, onChange }} />
      </Container>
      <Footer />
    </>
  );
}
