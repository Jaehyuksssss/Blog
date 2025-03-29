import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Main = styled.main`
  min-height: calc(100vh - 120px);
  background-color: ${({ theme }) => theme.colors.background.denary};
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </>
  );
};
