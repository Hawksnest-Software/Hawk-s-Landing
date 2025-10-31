import styled from 'styled-components';
import Layout from '../components/Layout';
import Image from 'next/image';

const AboutContainer = styled.div`
  position: relative;
  background: #000000;
  min-height: 100vh;
  overflow: hidden;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  width: 1093px;
  height: 1093px;
  left: 60%;
  top: calc(90% - 893px/2 + 306.5px);
  transform: translateY(-50%);
  background: radial-gradient(circle, rgba(200, 254, 126, 0.2) 0%, rgba(53, 252, 111, 0.2) 50%, transparent 70%);
  border-radius: 50%;
  
  @media (max-width: 1024px) {
    width: 600px;
    height: 600px;
    right: -100px;
  }
  
  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
    right: -150px;
    top: 95%;
  }
`;

const DecorativeSVG = styled.div`
  position: absolute;
  width: 1141.46px;
  height: 1323.6px;
  left: 741.6px;
  top: 265.31px;
  opacity: 0.15;
  pointer-events: none;
  
  @media (max-width: 1440px) {
    left: 51.5%;
  }
  
  @media (max-width: 1024px) {
    width: 800px;
    height: 900px;
    left: 60%;
    top: 200px;
  }
  
  @media (max-width: 768px) {
    width: 600px;
    height: 700px;
    left: 50%;
    top: 150px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 187px 131px;
  
  @media (max-width: 1024px) {
    padding: 120px 60px;
  }
  
  @media (max-width: 768px) {
    padding: 100px 30px;
  }
`;

const Tag = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #19D445;
  margin-bottom: 49px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const MainHeading = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 38px;
  line-height: 45px;
  color: #FFFFFF;
  margin-bottom: 56px;
  max-width: 837px;
  
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 40px;
  }
`;

const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: #D6D6D6;
  max-width: 685px;
  margin-bottom: 86px;
  
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 50px;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 329.16px);
  gap: 26px;
  max-width: 685px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Card = styled.div`
  background: #262626;
  box-shadow: 0px 96.9675px 71.1688px rgba(11, 102, 73, 0.03),
    0px 62.8493px 41.6799px rgba(11, 102, 73, 0.0227778),
    0px 37.3505px 22.6686px rgba(11, 102, 73, 0.0182222),
    0px 19.3935px 11.5649px rgba(11, 102, 73, 0.015),
    0px 7.90106px 5.79894px rgba(11, 102, 73, 0.0117778),
    0px 1.7957px 2.80063px rgba(11, 102, 73, 0.00722222);
  border: 2px solid transparent;
  border-radius: 6.22727px;
  background-image: 
    linear-gradient(#262626, #262626),
    linear-gradient(149.32deg, #C8FE7E 9.74%, #35FC6F 84.14%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 28.47px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    min-height: 280px;
  }
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  border: 2px solid #19D445;
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const CardTitle = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 21.3507px;
  line-height: 29px;
  color: #FFFFFF;
  margin-bottom: 0.25rem;
  
  @media (max-width: 768px) {
    font-size: 19px;
    line-height: 26px;
  }
`;

const CardSubTitle = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: 18.3507px;
  line-height: 24px;
  color: #D6D6D6;
  margin-bottom: 12.93px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 21px;
  }
`;

const CardText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 13.3442px;
  line-height: 25px;
  letter-spacing: 0.444805px;
  color: #D6D6D6;
  
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 22px;
  }
`;

export default function About() {
  return (
    <Layout currentPage="about">
      <AboutContainer>
        <BackgroundGradient />
        <DecorativeSVG>
          <Image
            src="/about-us/web.svg"
            alt=""
            fill
            style={{ objectFit: 'contain' }}
          />
        </DecorativeSVG>
        <ContentWrapper>
          <Tag>ABOUT US</Tag>
          <MainHeading>At Hawksnest Software, our leadership team brings decades of experience in cybersecurity and privacy innovation</MainHeading>
          <Paragraph>
            Together, Denis and Nicholas lead Hawksnest Software in building the next generation of consumer security solutions.
          </Paragraph>
          <CardsContainer>
            <Card>
              <ProfileImageWrapper>
                <Image
                  src="/images/Denissmall.JPEG"
                  alt="Denis Arsenault"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ProfileImageWrapper>
              <CardTitle>Denis Arsenault</CardTitle>
              <CardSubTitle>Co-founder and CEO</CardSubTitle>
              <CardText>
                Veteran security engineer Denis Arsenault helped propel MalwareBytes into the top three anti-malware apps and has developed advanced protection tools for the US military. His expertise ensures our products are fast, secure, and built natively for every major platform.
              </CardText>
            </Card>
            <Card>
              <ProfileImageWrapper>
                <Image
                  src="/images/nicholas-carlton.jpg"
                  alt="Nicholas Carlton"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ProfileImageWrapper>
              <CardTitle>Nicholas Carlton</CardTitle>
              <CardSubTitle>Co-founder and CTO</CardSubTitle>
              <CardText>
                Privacy technologist Nicholas Carlton helped shape Private Internet Access's next-generation VPN infrastructure. With deep expertise in Linux systems and secure server operations, he powers our real-time malware handling and machine learning threat detection systems.
              </CardText>
            </Card>
          </CardsContainer>
        </ContentWrapper>
      </AboutContainer>
    </Layout>
  );
}
