import { ReactNode, useContext } from 'react';
import NavBar from './navbar';
import Header from './head';
import { Container } from './layout.style';
import SidebarDrawer from './sidebar/SidebarDrawer';
import { DrawerContextProvider } from './contexts/DrawerContext';
import { Footer } from './footer';

type Props = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title }: Props) {
  const { isOpen, onChange } = useContext(DrawerContextProvider);
  return (
    <>
      <Header {...{ title }} />
      <NavBar />
      <Container>
        <main>{children}</main>
        <SidebarDrawer {...{ isOpen, onChange }} />
      </Container>
      <Footer />
    </>
  );
}
