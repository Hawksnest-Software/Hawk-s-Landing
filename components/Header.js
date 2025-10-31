import styled from 'styled-components';
import Link from 'next/link';

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  height: 60px;
  margin: 0 2vw;
  
  @media (min-width: 1201px) {
    max-width: 1500px;
    margin: 0 8vw;
  }
  
  @media (max-width: 768px) {
    position: static;
    margin: 0;
    width: 100%;
  }
`;

const Logo = styled.div`
  background-image: url(/images/logo.png);
  background-size: cover;
  background-position: center;
  height: 60px;
  width: 300px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    margin-bottom: 12px;
    width: 200px;
    height: 40px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
  
  @media (min-width: 1350px) {
    gap: 4rem;
  }
  
  @media (max-width: 1024px) {
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  transition: color 0.3s ease;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    color: #4ecdc4;
  }
`;

const MenuToggle = styled.input`
  display: none;
  
  &:checked + ${props => HamburgerLabel} span:nth-child(1) {
    transform: rotate(45deg) translateY(10px);
  }
  
  &:checked + ${props => HamburgerLabel} span:nth-child(2) {
    opacity: 0;
  }
  
  &:checked + ${props => HamburgerLabel} span:nth-child(3) {
    transform: rotate(-45deg) translateY(-10px);
  }
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 15px 40px;
  backdrop-filter: blur(25px);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 100px;
  
  @media (max-width: 1024px) {
    background: transparent;
    backdrop-filter: none;
    padding: 10px 20px;
  }
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0;
    padding: 80px 0 40px 0;
    border-radius: 0;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(25px);
    transition: right 0.3s ease-in-out;
    z-index: 1001;
  }
`;

const HeaderNavLink = styled.a`
  position: relative;
  color: ${props => props.$isActive ? '#E6FF81' : '#FFFFFF'};
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  transition: color 0.3s ease;
  cursor: pointer;
  white-space: nowrap;
  padding: 10px 20px;
  border-radius: 40px;
  
  ${props => props.$isActive && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 40px;
      padding: 2px;
      background: linear-gradient(149.32deg, #C8FE7E 9.74%, #35FC6F 84.14%);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
    }
  `}
  
  &:hover {
    color: #E6FF81;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 20px 40px;
    border-radius: 0;
  }
`;

const HamburgerLabel = styled.label`
  display: none;
  cursor: pointer;
  z-index: 1002;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  flex-shrink: 0;
  position: relative;
  margin-left: 10px;
  margin-top: -16px;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerLine = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
  
  &:nth-child(1) {
    margin-bottom: 0;
  }
  
  &:nth-child(2) {
    margin: 0;
  }
  
  &:nth-child(3) {
    margin-top: 0;
  }
`;

const Overlay = styled.label`
  display: none;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }
`;

const MobileNavWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  
  @media (max-width: 1024px) {
    margin-left: auto;
  }
  
  @media (max-width: 768px) {
    input:checked ~ nav {
      right: 0;
    }
    
    input:checked ~ label.overlay {
      display: block;
      opacity: 1;
      pointer-events: auto;
    }
    
    input:checked + label span:nth-child(1) {
      transform: rotate(45deg) translateY(9px);
    }
    
    input:checked + label span:nth-child(2) {
      opacity: 0;
    }
    
    input:checked + label span:nth-child(3) {
      transform: rotate(-45deg) translateY(-9px);
    }
  }
`;

export default function Header({ currentPage }) {
  const isHomepage = currentPage === 'home';
  
  return (
    <HeaderWrapper>
      <Nav>
          <Logo />
          {!isHomepage && (
            <MobileNavWrapper>
              <MenuToggle type="checkbox" id="menu-toggle" />
              <HamburgerLabel htmlFor="menu-toggle">
                <HamburgerLine />
                <HamburgerLine />
                <HamburgerLine />
              </HamburgerLabel>
              <Overlay htmlFor="menu-toggle" className="overlay" />
              <HeaderNav>
                <Link href="/" passHref legacyBehavior>
                  <HeaderNavLink $isActive={currentPage === 'home'}>Home</HeaderNavLink>
                </Link>
                <Link href="/product" passHref legacyBehavior>
                  <HeaderNavLink $isActive={currentPage === 'product'}>Product</HeaderNavLink>
                </Link>
                <Link href="/about" passHref legacyBehavior>
                  <HeaderNavLink $isActive={currentPage === 'about'}>About Us</HeaderNavLink>
                </Link>
              </HeaderNav>
            </MobileNavWrapper>
          )}
      </Nav>
    </HeaderWrapper>
  );
}
