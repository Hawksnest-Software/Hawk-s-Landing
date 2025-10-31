import styled from 'styled-components';
import Layout from '../components/Layout';
import Link from 'next/link';

// Main container
const LandingContainer = styled.div`
  width: 100%;
  background: #171919;
  /* Remove the main padding-top since Layout now handles it */
  
  @media (max-width: 768px) {
    margin-top: -70px;
  }
`;

// Hero Section
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  background: #0A0A0A;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 240px 2rem 28rem;
  overflow: hidden;
  
  @media (max-width: 1200px) {
    padding: 80px 1.5rem 2rem;
  }
  
  /* Background vector image */
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 200px;
    background-image: url('/landing-page/background-vector.svg');
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    opacity: 0.6;
    z-index: 1;
    @media (max-width: 768px) {
      height: 70%;
      bottom: 20%;
    }
  }
  
  /* Bright green flare on the left */
  &::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    left: -200px;
    top: 50%;
    transform: translateY(-50%);
    background: radial-gradient(circle, rgba(10, 251, 106, 0.3) 0%, rgba(10, 251, 106, 0.15) 40%, transparent 70%);
    z-index: 1;
  }
`;

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1500px;
  display: flex;
  align-items: center;
  z-index: 3;
  
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 675px;
  width: 100%;
  
  @media (min-width: 1201px) {
    padding-left: 0;
  }
  
  @media (max-width: 1200px) {
    max-width: 600px;
    padding-left: 0;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    padding-left: 0;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const HeroTitle = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: #FFFFFF;
  margin-bottom: 2.5rem;
`;

const HeroSubtitle = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.54;
  color: #D6D6D6;
  margin-bottom: 3rem;
  max-width: 626px;
`;

const CTAButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 165px;
  height: 61px;
  background: linear-gradient(298.54deg, #0AFB6A -7.7%, #E6FF81 97.12%);
  border-radius: 49px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #242323;
  
  @media (max-width: 1200px) {
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    width: 145px;
    height: 55px;
    font-size: 18px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(10, 251, 106, 0.3);
  }
  
  @media (max-width: 1320px) {
    &:hover {
      transform: none;
    }
  }
`;

const HeroImage = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 474px;
  height: 474px;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  background-image: url(/images/hawk\ nest.jpg);
  z-index: 2;
  
  @media (max-width: 1400px) {
    width: 400px;
    height: 400px;
  }
  
  @media (max-width: 1320px) {
    display: none;
  }
`;

const StoryImage = styled.div`
  position: relative;
  bottom: 100px;
  margin: 6rem auto 5rem auto;
  width: 574px;
  height: 374px;
  border-radius: 4px;
  background-size: 150%;
  background-position-y: 85%;
  background-position-x: 80%;
  background-image: url(/images/cyber\ kidnapping_modified.jpg);
  z-index: 2;
  
  @media (max-width: 1400px) {
    width: 400px;
    height: 400px;
  }
  
  @media (max-width: 1320px) {
    display: none;
  }
`;

// Services Section
const ServicesSection = styled.section`
  position: relative;
  width: 100%;
  padding: 0px 2rem 120px;
  background: #0A0A0A;
  
  @media (max-width: 1024px) {
    padding: 40px 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 40px 1rem;
  }
  
  /* Left vector background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 120%;
    background-image: url('/landing-page/2-background-vector-left-extended.svg');
    background-size: contain;
    background-position: -280px;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: 2;
    @media (max-width: 768px) {
      background-position: -380px;
      top: 50%;
      height: 80%;
      width: 100%;
      background-size: cover;
      background-image: url('/landing-page/2-background-vector-left-extended.svg');
    }
  }
  
  /* Right vector background */
  &::after {
    content: '';
    position: absolute;
    top: -45%;
    right: 0;
    width: 50%;
    height: 100%;
    background-image: url('/landing-page/2-background-vector-right.svg');
    background-size: contain;
    background-position: right center;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: 2;
  }
`;

const ServicesGlowTopRight = styled.div`
  position: absolute;
  top: -100px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(10, 251, 106, 0.15) 0%, rgba(10, 251, 106, 0.08) 40%, transparent 70%);
  z-index: 1;
  pointer-events: none;
`;

const ServicesGlowBottomLeft = styled.div`
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(10, 251, 106, 0.15) 0%, rgba(10, 251, 106, 0.08) 40%, transparent 70%);
  z-index: 1;
  pointer-events: none;
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
`;

const ServicesLabel = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 21px;
  line-height: 24px;
  color: #19D445;
  margin-bottom: 8px;
`;

const ServicesTitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 4.2rem);
  line-height: 1.04;
  text-align: center;
  text-transform: capitalize;
  color: #FFFFFF;
  max-width: 865px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ServiceCard = styled.div`
  background: linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, #171717 174.24%);
  border-radius: 16px;
  padding: 64px 40px 32px;
  text-align: center;
  position: relative;
  transition: opacity 0.2s ease-out;

  @media (max-width: 1024px) {
    padding: 60px 30px 28px;
  }
  
  @media (max-width: 768px) {
    padding: 64px 24px 32px;
  }

  @media (min-width: 769px) and (max-width: 844px) {
    &:last-child {
      grid-column: 1 / -1;
      justify-self: center;
      max-width: 250px;
    }
  } 

  &:hover {
    opacity: 0.9;
  }
`;

const ServiceIcon = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  background: linear-gradient(298.54deg, #0AFB6A -7.7%, #E6FF81 97.12%);
  border: 1px solid #19D445;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const ServiceTitle = styled.h3`
  &.subtitle {
    font-weight: 200;
    line-height: 1.13;
    font-size: clamp(16px, 2.5vw, 20px);
    color: #9A9A9A;
    text-shadow: 
        -2px -2px 0 #2A2A2A,  
        2px -2px 0 #2A2A2A,  
        -2px 2px 0 #2A2A2A,  
        2px 2px 0 #2A2A2A;
  }
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: clamp(20px, 2.5vw, 24px);
  line-height: 1.33;
  color: #FFFFFF;
  margin-bottom: 1rem;
`;

// Story Section
const StorySection = styled.section`
  position: relative;
  width: 100%;
  padding: 30px 2rem 300px;
  background: #0A0A0A;
  overflow: visible;
  
  @media (max-width: 1035px) {
    padding-top: 335px;
  }
  @media (max-width: 1024px) {
    padding: 60px 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 40px 1rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 632px;
    height: 632px;
    left: 30%;
    transform: translate(0%, 90%);
    background: radial-gradient(circle, rgba(10, 251, 106, 0.1) 0%, rgba(10, 251, 106, 0.05) 50%, transparent 70%);
  }

  &::after {
    content: '';
    position: absolute;
    width: 70%;
    height: 600px;
    top: 500px;
    left: 50%;
    transform: translateX(-50%);
    background-image: url(/landing-page/mesh.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
    opacity: 0.5;
    z-index: 0;
  }
  
  @media (max-width: 1320px) {
    &::before {
      display: none;
    }
    &::after {
      top: 240px;
    }
  }
  
`;

const StoryContainer = styled.div`
  max-width: 1268px;
  margin: 0 auto 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 3rem;
  isolation: isolate;
  
  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const StoryStep = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  
  /* First step - align to left */
  &:nth-child(2) {
    justify-content: flex-start;
    padding-left: 100px;
  }
  
  /* Second step - align to right */
  &:nth-child(3) {
    &::before {
      content: '';
      position: absolute;
      width: 632px;
      height: 632px;
      left: 30%;
      transform: translate(-30%, -25%);
      background: radial-gradient(circle, rgba(10, 251, 106, 0.15) 0%, rgba(10, 251, 106, 0.08) 40%, transparent 70%);
      @media (max-width: 1320px) {
        display: none;
      }
    }

    padding-left: 100px;
  }
  
  /* Third step - align to left */
  &:nth-child(4) {
    justify-content: flex-start;
    padding-left: 100px;
  }
  
  @media (max-width: 1024px) {
    
    &:nth-child(2) {
      padding-left: 50px;
    }
    
    &:nth-child(3) {
      padding-left: 50px;
    }
    
    &:nth-child(4) {
      padding-left: 50px;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column !important;
    align-items: center;
    text-align: center;
    padding-left: 0 !important;
    
    &:nth-child(2) {
      padding-left: 0;
    }
    
    &:nth-child(3) {
      padding-left: 0;
      
      &::before {
        display: none;
      }
    }
    
    &:nth-child(4) {
      padding-left: 0;
    }
  }
`;

const StepNumber = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: clamp(6rem, 12vw, 10rem);
  line-height: 1.05;
  text-align: center;
  letter-spacing: -0.01em;
  color: #FFFFFF;
  flex-shrink: 0;
  width: 120px;
  
  @media (max-width: 1024px) {
    font-size: clamp(5rem, 10vw, 8rem);
    width: 100px;
  }
  
  @media (max-width: 768px) {
    font-size: 4rem;
    width: auto;
  }
`;

const StepContent = styled.div`
  margin-top: 3.5rem;
  max-width: 1600px;
  flex: 1;
  
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const StepTitle = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: clamp(2rem, 4vw, 3.75rem);
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: #FFFFFF;
  margin-bottom: 1.5rem;
`;

const StepDescription = styled.p`
  max-width: 600px;
  display: block;
  margin: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.84;
  color: #D6D6D6;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
    max-width: 100%;
  }
`;

// Features Section
const FeaturesSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 120px 2rem;
  background: linear-gradient(63.75deg, #2A2B2B 17.86%, #171919 66.71%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1024px) {
    padding: 80px 1.5rem;
    min-height: auto;
  }
  
  @media (max-width: 768px) {
    padding: 60px 1rem;
    min-height: auto;
  }
`;

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const FeaturesTitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: clamp(3rem, 6vw, 5.3rem);
  line-height: 0.95;
  letter-spacing: -2.25px;
  background: linear-gradient(121.52deg, #FFF4D7 -22.23%, rgba(218, 222, 251, 0.982854) 49.03%, rgba(216, 255, 220, 0.972567) 91.79%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(78, 110, 192, 0.3);
  margin-bottom: -10px;
`;

const FeaturesSubtitle = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: clamp(2rem, 4vw, 3.4rem);
  text-align: center;
  letter-spacing: -2.25px;
  background: linear-gradient(104.64deg, rgba(255, 255, 255, 0.9) 31.77%, rgba(255, 255, 255, 0.58) 130.47%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 120px;
`;

const FeaturesDescription = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1.25;
  text-align: center;
  letter-spacing: -0.3px;
  color: rgba(255, 255, 255, 0.7);
  max-width: 544px;
  margin: 0 auto 4rem;
`;

const FeatureCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 6rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
    margin-right: 4rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

const FeatureCard = styled.div`
  background: linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, #171717 174.24%);
  border-radius: 16px;
  padding: 2rem;
  text-align: left;
  transition: opacity 0.2s ease-out;

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  &:hover {
    opacity: 0.9;
  }
`;

const FeatureCardIcon = styled.div`
  width: 52px;
  height: 50px;
  background: ${props => props.$bgImage ? `url(${props.$bgImage}) no-repeat center center` : '#FFFFFF'};
  background-size: contain;
  margin-bottom: 2rem;
  border-radius: 4px;
`;

const FeatureCardTitle = styled.h4`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: clamp(1.5rem, 2vw, 1.75rem);
  line-height: 1.14;
  color: #FFFFFF;
  margin-bottom: 1rem;
`;

const FeatureCardDescription = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.44;
  color: #FFFFFF;
`;

// Floating Feature Tags
const FloatingTags = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  
  @media (max-width: 1320px) {
    display: none;
  }
`;

// Concentric Circles Component - outline only
const ConcentricCircles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  
  @media (max-width: 1024px) {
    transform: translate(-50%, -50%) scale(0.7);
  }
  
  @media (max-width: 768px) {
    transform: translate(-50%, -50%) scale(0.5);
  }
`;

// Individual circle components
const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1.5px solid rgba(0, 0, 0, 0.18);
  border-radius: 50%;
  background: transparent;
  
  @media (max-width: 768px) {
    border-width: 2px;
    border-color: rgba(0, 0, 0, 0.35);
  }
  
  &:nth-child(1) {
    width: 100px;
    height: 100px;
  }
  
  &:nth-child(2) {
    width: 180px;
    height: 180px;
  }
  
  &:nth-child(3) {
    width: 260px;
    height: 260px;
  }
  
  &:nth-child(4) {
    width: 340px;
    height: 340px;
  }
  
  &:nth-child(5) {
    width: 420px;
    height: 420px;
  }
  
  &:nth-child(6) {
    width: 500px;
    height: 500px;
  }
  
  &:nth-child(7) {
    width: 580px;
    height: 580px;
  }
  
  &:nth-child(8) {
    width: 660px;
    height: 660px;
  }
  
  &:nth-child(9) {
    width: 740px;
    height: 740px;
  }
  
  &:nth-child(10) {
    width: 820px;
    height: 820px;
  }
  
  &:nth-child(11) {
    width: 900px;
    height: 900px;
  }
  
  &:nth-child(12) {
    width: 980px;
    height: 980px;
  }
  
  &:nth-child(13) {
    width: 1060px;
    height: 1060px;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  &:nth-child(14) {
    width: 1140px;
    height: 1140px;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  &:nth-child(15) {
    width: 1220px;
    height: 1220px;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  &:nth-child(16) {
    width: 1300px;
    height: 1300px;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  &:nth-child(17) {
    width: 1380px;
    height: 1380px;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  &:nth-child(18) {
    width: 1460px;
    height: 1460px;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const FloatingTag = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7.5px 15px 7.5px 7.5px;
  background: linear-gradient(94.16deg, rgba(196, 254, 125, 0.95) 6.37%, rgba(77, 251, 112, 0.95) 85.84%);
  border-radius: 375px;
  font-family: 'Urbanist', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  color: #171919;
  white-space: nowrap;
  height: 44px;
  
  /* Allow wrapping for tag-6 */
  &.tag-6 {
    white-space: normal;
    top: 600px;
    left: 8rem;
    max-width: 465px;
    height: auto;
    min-height: 44px;
    padding: 12px 15px 12px 12px;
    line-height: 1.2;
  }

  /* Allow wrapping for tag-5 */
  &.tag-5 {
    white-space: normal;
    max-width: 465px;
    height: auto;
    min-height: 44px;
    padding: 12px 15px 12px 12px;
    line-height: 1.2;
  }
  
  /* Circle with green dot - on the right side (toward center) for left tags */
  &::before {
    content: '';
    position: absolute;
    right: -55px;
    width: 36px;
    height: 36px;
    border: 2px solid rgba(185, 254, 124, 0.4);
    border-radius: 50%;
    background: transparent;
  }
  
  /* Green circle on the right */
  &::after {
    content: '';
    width: 30.57px;
    height: 30.57px;
    background: #4DFB70;
    border-radius: 50%;
    margin-left: 0;
    flex-shrink: 0;
  }
  
  &.tag-1 {
    top: 20%;
    left: 134.71px;
  }
  
  &.tag-2 {
    top: 50%;
    left: 134.71px;
  }
  
  &.tag-3 {
    top: 20%;
    right: 134.71px;
    
    /* Move circle to left side (toward center) for right tags */
    &::before {
      right: auto;
      left: -55px;
    }
  }
  
  &.tag-4 {
    top: 70%;
    right: 134.71px;
    
    /* Move circle to left side (toward center) for right tags */
    &::before {
      right: auto;
      left: -55px;
    }
  }
  
  &.tag-5 {
    top: 45%;
    right: 134.71px;
    
    /* Move circle to left side (toward center) for right tags */
    &::before {
      right: auto;
      left: -55px;
    }
  }
`;

const TagDot = styled.div`
  position: absolute;
  right: -55px;
  width: 10px;
  height: 10px;
  background: #B9FE7C;
  border-radius: 50%;
  top: 50%;
  transform: translate(-13px, -50%);
  
  &.right {
    right: auto;
    left: -55px;
    transform: translate(13px, -50%);
  }
`;

const StoryStepsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 13rem;

  @media (max-width: 1024px) {
    margin-top: 10vh;
  }
`;

const DecorativeLine = styled.div`
  position: absolute;
  left: 50%;
  top: calc(-2% - 2vw);
  width: clamp(400px, 100%, 983px);
  height: calc(90% + 10vw);
  opacity: 1;
  pointer-events: none;
  z-index: 1;
  transform: translateX(-50%);
  
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  &::before {
     content: '';
     position: absolute;
     top: 0;
     left: 1.3%;
     width: clamp(18px, 2.6vw, 26px);
     height: clamp(18px, 2.6vw, 26px);
     background: #B9FE7C;
     border-radius: 50%;
     transform: translate(-50%, -50%);
  }
  
  @media (max-width: 1024px) {
    top: -5%;
  }  

  @media (max-width: 768px) {
    width: clamp(370px, 100%, 983px);
  }
  
  @media (max-width: 374px) {
    display: none;
  }
`;

export default function Home() {
  return (
    <Layout currentPage="home">
      <LandingContainer>
        {/* Hero Section */}
        <HeroSection>
          <HeroWrapper>
            <HeroContent>
              <HeroTitle>Defending Your Digital Nest</HeroTitle>
              <HeroSubtitle>
                Since the dawn of the millennium, cybercrime has exploded into an industry of its own.
                Where once we had viruses that crashed our computers, now our bank accounts, identities,
                cryptocurrency, important files, and sometimes our very lives are being stolen from us.
              </HeroSubtitle>
              <HeroSubtitle>
                At Hawksnest Software, we're building next generation, AI-powered online protection to keep you safe against all threats - known and unknown.
              </HeroSubtitle>
              <div style={{display: 'flex', gap: '1rem'}}>
              <Link href="/about" passHref legacyBehavior>
                <CTAButton as="a">About Us</CTAButton>
              </Link>
              <Link href="/product" passHref legacyBehavior>
                <CTAButton as="a">Product</CTAButton>
              </Link>
              </div>
            </HeroContent>
            <HeroImage />
          </HeroWrapper>
        </HeroSection>

        {/* Services Section */}
        <ServicesSection>
          <ServicesGlowTopRight />
          <ServicesGlowBottomLeft />
          <ServicesHeader>
            <ServicesLabel>SECURITY HAWK</ServicesLabel>
            <ServicesTitle>Consumer Cyber Protection for the AI Era</ServicesTitle>
          </ServicesHeader>

          <ServicesGrid>
            <ServiceCard>
              <ServiceIcon>🔒</ServiceIcon>
              <ServiceTitle>Realtime Malware, Phishing, and Scam Protection</ServiceTitle>
              <ServiceTitle className="subtitle">Introducing Concealed Threat Detection - an Industry First</ServiceTitle>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🤖</ServiceIcon>
              <ServiceTitle>AI-driven Zero-day Protection</ServiceTitle>
              <ServiceTitle className="subtitle">Block Even Unknown Threats with the Only AI Predictive Behavioral Threat Detection in the World</ServiceTitle>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>⚡</ServiceIcon>
              <ServiceTitle>Lightning Fast, Adaptive Scan Engine</ServiceTitle>
              <ServiceTitle className="subtitle">No Need to Wait for Hours on a Competitor</ServiceTitle>
            </ServiceCard>
          </ServicesGrid>
        </ServicesSection>


        {/* Story Section */}
        <StorySection>
          <StoryImage />
          <StoryContainer>
            <StoryStepsWrapper>
              <DecorativeLine>
                <svg width="983" height="2426" viewBox="0 0 983 2426" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.7" d="M12.5 0V709C12.5 725.569 25.9315 739 42.5 739H951.5C968.069 739 981.5 752.431 981.5 769V1514.5C981.5 1531.07 968.069 1544.5 951.5 1544.5H42.5C25.9314 1544.5 12.5 1557.93 12.5 1574.5V2411.5" stroke="#B9FE7C" strokeWidth="3" strokeDasharray="52 52"/>
                  <circle cx="13" cy="2413" r="13" fill="#B9FE7C"/>
                </svg>
              </DecorativeLine>
              <StoryStep>
                <StepNumber>1</StepNumber>
                <StepContent>
                  <StepTitle>The Evolution of Cyber Threats</StepTitle>
                  <StepDescription>
                    In the early days, antivirus tools protected us from viruses that crashed our computers. During the 00s, online threats became more dangerous and varied. We built new tools to protect ourselves against malware, spyware, ransomware, and more.
                  </StepDescription>
                  <StepDescription>
                    Today's digital world is even more dangerous. We now face a whole new category of threats called Social Engineering. Most people know of this as "phishing," but the truth is that phishing is just the beginning of these threats.
                  </StepDescription>
                </StepContent>
              </StoryStep>

              <StoryStep>
                <StepNumber>2</StepNumber>
                <StepContent>
                  <StepTitle>Brave New World: Human Viruses, AI Scammers</StepTitle>
                  <StepDescription>
                   Social engineering, or, the practice of manipulating people, has existed perhaps as long as humans have. Today, social engineering ranges from email phishing your bank account password, to "pig butchering scams" where AI, human traffickers, or even hostile governments fake relationships with real people to spy on and/or steal from their victims.
                  </StepDescription>
                  <StepDescription>
                    This threat is compounded by steganography, the art of hiding data. Bad actors are using traditionally "safe" files, such as images, PDFs, and videos, to disguise malicious software. A major component of a pig butchering scam is the use of attractive photos - how many of them could be not just bait, but poison?
                    When AI can write malware, pretend to be human, and send you a picture that infects your computer, how will you protect the nest?
                  </StepDescription>
                </StepContent>
              </StoryStep>

              <StoryStep>
                <StepNumber>3</StepNumber>
                <StepContent>
                  <StepTitle>Introducing: KiTE</StepTitle>
                  <StepDescription>
                    KiTE is the technology behind Security Hawk, protecting users against all the latest threats.
                  </StepDescription>
                  <FeatureCards>
                    <FeatureCard>
                      <FeatureCardIcon $bgImage="/landing-page/lightning-bolt.png" />
                      <FeatureCardTitle>Adaptive and Differential Scanning</FeatureCardTitle>
                      <FeatureCardDescription>
                        Security Hawk features the fastest scans in the industry, without sacrificing protection or usability. Scan on update prioritizes updated and new files, saving hours per scan. OS update adaptive scanning backfills missing patches, and leverages present patches.
                      </FeatureCardDescription>
                    </FeatureCard>

                    <FeatureCard>
                      <FeatureCardIcon $bgImage="/landing-page/book.png" />
                      <FeatureCardTitle>threat.ai Zero-day Protection</FeatureCardTitle>
                      <FeatureCardDescription>
                        AI-powered zero-day protection keeps you safe from even unknown threats, building a database that other vendors can whitelabel. Our AI prediction engine uses and creates heurisitics for understanding how tomorrow's threats behave.
                      </FeatureCardDescription>
                    </FeatureCard>

                    <FeatureCard>
                      <FeatureCardIcon $bgImage="/landing-page/hand-holding-checkmark.png" />
                      <FeatureCardTitle>Advanced Anti-Phishing/Anti-Social Engineering</FeatureCardTitle>
                      <FeatureCardDescription>
                        Stay safe from threats both machine and human. Block unsafe components of websites while allowing normal use.
                      </FeatureCardDescription>
                    </FeatureCard>
                  </FeatureCards>
                </StepContent>
              </StoryStep>
            </StoryStepsWrapper>
          </StoryContainer>
        </StorySection>

        {/* Features Section */}
        <FeaturesSection>
          <ConcentricCircles>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </ConcentricCircles>
          <FloatingTags>
            <FloatingTag className="tag-1">
              KiTE
              <TagDot />
            </FloatingTag>
            <FloatingTag className="tag-2">
              Real-Time Protection
              <TagDot />
            </FloatingTag>
            <FloatingTag className="tag-3">
              Advanced anti-phishing
              <TagDot className="right" />
            </FloatingTag>
            <FloatingTag className="tag-4">
              Parental Controls
              <TagDot className="right" />
            </FloatingTag>
            <FloatingTag className="tag-5">
              AI-based sharing shortens zero-day detection
              <TagDot className="right" />
            </FloatingTag>
            <FloatingTag className="tag-6">
              Adaptive Adware Protection
              <TagDot className="left" />
            </FloatingTag>
          </FloatingTags>

          <FeaturesContainer>
            <FeaturesTitle>Built with AI.</FeaturesTitle>
            <FeaturesSubtitle>Grounded in Human Insight.</FeaturesSubtitle>
            <FeaturesDescription className='feature-top'>
              Security Hawk native OS technologies with advanced AI-driven security to give you world-class protetion that evolves as threats do.
            </FeaturesDescription>
            <FeaturesDescription>
              Security Hawk: Defending the digital nest.
            </FeaturesDescription>
          </FeaturesContainer>
        </FeaturesSection>
      </LandingContainer>
    </Layout>
  );
}
