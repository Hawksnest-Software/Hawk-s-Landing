import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0a0a0a;
  color: white;
  /* Ensure proper scrolling on mobile */
  position: relative;
`;

const Main = styled.main`
  flex: 1;
  /* Add top padding to account for fixed header */
  
  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

export default function Layout({ children, currentPage }) {
  return (
    <LayoutWrapper>
      <Header currentPage={currentPage} />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
}
