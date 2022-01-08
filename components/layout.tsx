import { ReactNode } from "react";
import NavBar from "./navbar";
import Header from "./head";
import { Container } from "./layout.style";

type Props = {
  children: ReactNode;
  home?: boolean;
};

export const siteTitle = 'Manu`s website';

export default function Layout({children}: Props) {
  return (
    <>
      <Header title={siteTitle} /> 
      <NavBar />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
}

