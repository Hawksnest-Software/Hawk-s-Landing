import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 28px 98px 96px;
  gap: 8px;
  isolation: isolate;
  background: #171717;
  overflow: hidden;
  
  @media(max-width: 966px) {
    padding: 28px;
    gap: 120px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 32px 24px 80px;
    gap: 40px;
  }
`;

const GradientBlur = styled.div`
  position: absolute;
  width: 725.47px;
  height: 487.2px;
  left: -221px;
  top: -437.47px;
  background: radial-gradient(ellipse, rgba(10, 251, 106, 0.1) 0%, rgba(230, 255, 129, 0.1) 40%, transparent 70%);
  transform: rotate(-90deg);
  border-radius: 50%;
  z-index: 0;
`;
const CircleBlur = styled.div`
  position: absolute;
  width: 533px;
  height: 533px;
  left: -300px;
  top: -281px;
  background: radial-gradient(circle, rgba(47, 222, 209, 0.06) 0%, rgba(47, 222, 209, 0.03) 50%, transparent 70%);
  z-index: 4;
`;
const FooterVector = styled.div`
  position: absolute;
  left: -30px;
  top: -0px;
  width: 267px;
  height: 288px;
  background-image: url('/images/footer-vector.svg');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 162px;
    left: -20px;
  }
`;

const LogoSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 5;
  bottom: 10px;
  
  @media (max-width: 768px) {
  }
`;

const Logo = styled.img`
  width: 242px;
  height: 49.61px;
  
  @media (max-width: 768px) {
    width: 180px;
    height: auto;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 16px;
  margin: 0 auto;
  z-index: 5;
  width: 90px;
  
  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;

const LinkItem = styled.a`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #FFFFFF;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 40px;
  margin: 0 auto;
  z-index: 5;
  
  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;

const ContactTitle = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  color: #FFFFFF;
  margin: 0;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 16px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 8px;
`;

const ContactIcon = styled.div`
  width: 16px;
  height: 16px;
  flex: none;
`;

const ContactText = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #FFFFFF;
  flex-grow: 1;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <GradientBlur />
      <CircleBlur />
      <FooterVector />
      
      <LogoSection>
        <Logo src="/images/logo.png" alt="Hawks Nest Software" />
      </LogoSection>
      
      <QuickLinks>
        <LinkItem href="/">Home</LinkItem>
        <LinkItem href="/product">Product</LinkItem>
        <LinkItem href="/about">About Us</LinkItem>
      </QuickLinks>
      
      <ContactSection>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactInfo>
          <ContactItem>
            <ContactIcon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2.66667 2.66667H13.3333C14.0667 2.66667 14.6667 3.26667 14.6667 4V12C14.6667 12.7333 14.0667 13.3333 13.3333 13.3333H2.66667C1.93333 13.3333 1.33333 12.7333 1.33333 12V4C1.33333 3.26667 1.93333 2.66667 2.66667 2.66667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.6667 4L8 8.66667L1.33333 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ContactIcon>
            <ContactText><a href="mailto:info@hawksnestsoftware.com">info@hawksnestsoftware.com</a></ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 10.6667C9.47276 10.6667 10.6667 9.47276 10.6667 8C10.6667 6.52724 9.47276 5.33333 8 5.33333C6.52724 5.33333 5.33333 6.52724 5.33333 8C5.33333 9.47276 6.52724 10.6667 8 10.6667Z" fill="white"/>
              </svg>
            </ContactIcon>
            <ContactText>PO Box 391402</ContactText>
            <ContactText>Deltona, FL 32739</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14.6667 11.28V13.28C14.6674 13.4657 14.6294 13.6494 14.555 13.8195C14.4807 13.9897 14.3715 14.1424 14.2347 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5847 14.608 13.3983 14.6301 13.2133 14.6133C11.1619 14.3904 9.19137 13.6894 7.46 12.5667C5.84836 11.5431 4.48736 10.182 3.46667 8.57C2.33999 6.82795 1.6389 4.84471 1.41999 2.78C1.40322 2.59552 1.42506 2.40952 1.48399 2.23399C1.54292 2.05846 1.63783 1.89714 1.76268 1.76018C1.88754 1.62323 2.03949 1.51352 2.20898 1.43869C2.37848 1.36386 2.56155 1.3254 2.74667 1.32667H4.74667C5.06421 1.32341 5.37382 1.43723 5.61872 1.64601C5.86362 1.8548 6.02734 2.14581 6.08 2.46C6.17774 3.08892 6.35027 3.70338 6.59334 4.29333C6.68236 4.52959 6.70809 4.78668 6.66782 5.03705C6.62755 5.28742 6.52279 5.52185 6.36334 5.71667L5.53667 6.54333C6.48524 8.2094 7.85793 9.58209 9.524 10.5307L10.3507 9.704C10.5455 9.54455 10.7799 9.43979 11.0303 9.39952C11.2806 9.35925 11.5377 9.38498 11.774 9.474C12.3639 9.71707 12.9784 9.8896 13.6073 9.98733C13.9255 10.0403 14.2192 10.2076 14.4275 10.4569C14.6357 10.7062 14.7454 11.0204 14.7387 11.3427L14.6667 11.28Z" fill="white"/>
              </svg>
            </ContactIcon>
            <ContactText><a href="tel:+17275157476">+1 727 515-7476</a></ContactText>
          </ContactItem>
        </ContactInfo>
      </ContactSection>
    </FooterWrapper>
  );
}
