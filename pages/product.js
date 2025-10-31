import styled from 'styled-components';
import Layout from '../components/Layout';
import Image from 'next/image';

const FeaturedSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 1040px;
  background: #171717;
  padding: 111px 0 100px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: auto;
    padding: 60px 20px;
  }
`;

const VectorLeft = styled.div`
  position: absolute;
  width: 725.47px;
  height: 487.2px;
  left: -345px;
  top: -58px;
  opacity: 0.3;
  transform: rotate(-90deg);
  
  img {
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 768px) {
    width: 400px;
    height: 270px;
    left: -200px;
    top: -30px;
  }
`;

const VectorRight = styled.div`
  position: absolute;
  width: 725.47px;
  height: 487.2px;
  left: calc(100% - 554px);
  top: 600.05px;
  opacity: 0.4;
  transform: matrix(0, -1, -1, 0, 0, 0);
  
  img {
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 768px) {
    width: 400px;
    height: 270px;
    left: calc(100% - 300px);
    top: 950px;
  }
  @media (max-width: 414px) {
    height: 370px;
    top: 58%;
  }
`;

const GlowLeft = styled.div`
  position: absolute;
  width: 533px;
  height: 533px;
  left: -254px;
  top: 161px;
  background: radial-gradient(circle, rgba(47, 202, 219, 0.12) 0%, rgba(47, 202, 219, 0.06) 50%, transparent 70%);
  border-radius: 50%;
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    left: -150px;
  }
`;

const GlowRight = styled.div`
  position: absolute;
  width: 533px;
  height: 533px;
  right: -260px;
  top: 333px;
  background: radial-gradient(circle, rgba(47, 202, 219, 0.12) 0%, rgba(47, 202, 219, 0.06) 50%, transparent 70%);
  border-radius: 50%;
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    right: -150px;
    top: 700px;
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;
  width: 479px;
  margin: 65px auto 0;
  z-index: 10;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 90%;
    margin: 30px auto 0;
    gap: 16px;
  }
`;

const FeatureLabel = styled.div`
  font-family: 'Titillium Web', sans-serif;
  font-weight: 600;
  font-size: 21px;
  line-height: 24px;
  color: #19D445;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

const MainTitle = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 67px;
  line-height: 70px;
  text-transform: capitalize;
  color: #FFFFFF;
  text-align: center;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 34px;
  }
`;

const FeaturesGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 302px);
  gap: 40px;
  margin: 276px auto 100px;
  width: fit-content;
  height: fit-content;
  z-index: 10;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin: 80px auto 50px;
    padding: 0 20px;
    width: 100%;
    max-width: 400px;
  }
`;

const FeatureCard = styled.div`
  width: 302px;
  background: linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, #171717 174.24%);
  backdrop-filter: blur(25px);
  border-radius: 16px;
  padding: 40px 32px;
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 32px 24px;
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 30px;
  background: #D9D9D9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 30px;
    height: 30px;
    fill: #FFFFFF;
  }
`;

const CardTitle = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  color: #FFFFFF;
  margin: 0 0 16px 0;
  
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

const CardDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #FFFFFF;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export default function Products() {
  return (
    <Layout currentPage="product">
      <FeaturedSection>
        <VectorLeft>
          <Image
            src="/product-page/vector-left.svg"
            alt=""
            width={725}
            height={487}
            style={{transform: 'rotate(90deg)', position: 'absolute', bottom: '-100px'}}
          />
        </VectorLeft>
        <VectorRight>
          <Image
            src="/product-page/vector-right.svg"
            alt=""
            width={725}
            height={487}
            style={{transform: 'rotate(90deg) rotateY(180deg)', position: 'absolute', right: '80%'}}
          />
        </VectorRight>
        <GlowLeft />
        <GlowRight />
        
        <HeaderText>
          <FeatureLabel>KEY FEATURES</FeatureLabel>
          <MainTitle>How We Stem the Tide</MainTitle>
        </HeaderText>

        <FeaturesGrid>
          <FeatureCard>
            <IconWrapper>
              <svg viewBox="0 0 50 50" fill="none">
                <path d="M24.9999 33.3334C25.5902 33.3334 26.085 33.1338 26.4843 32.7345C26.8836 32.3351 27.0833 31.8404 27.0833 31.2501C27.0833 30.6598 26.8836 30.165 26.4843 29.7657C26.085 29.3664 25.5902 29.1667 24.9999 29.1667C24.4096 29.1667 23.9148 29.3664 23.5155 29.7657C23.1162 30.165 22.9166 30.6598 22.9166 31.2501C22.9166 31.8404 23.1162 32.3351 23.5155 32.7345C23.9148 33.1338 24.4096 33.3334 24.9999 33.3334ZM24.9999 25.0001C25.5902 25.0001 26.085 24.8004 26.4843 24.4011C26.8836 24.0018 27.0833 23.507 27.0833 22.9167V16.6667C27.0833 16.0765 26.8836 15.5817 26.4843 15.1824C26.085 14.7831 25.5902 14.5834 24.9999 14.5834C24.4096 14.5834 23.9148 14.7831 23.5155 15.1824C23.1162 15.5817 22.9166 16.0765 22.9166 16.6667V22.9167C22.9166 23.507 23.1162 24.0018 23.5155 24.4011C23.9148 24.8004 24.4096 25.0001 24.9999 25.0001ZM24.9999 45.6251C24.7569 45.6251 24.5312 45.6077 24.3228 45.573C24.1145 45.5383 23.9062 45.4862 23.6978 45.4167C19.0103 43.8542 15.2777 40.9636 12.4999 36.7449C9.72214 32.5261 8.33325 27.9862 8.33325 23.1251V13.2813C8.33325 12.4133 8.58499 11.632 9.08846 10.9376C9.59193 10.2431 10.243 9.73966 11.0416 9.42716L23.5416 4.73966C24.0277 4.56605 24.5138 4.47925 24.9999 4.47925C25.486 4.47925 25.9721 4.56605 26.4583 4.73966L38.9583 9.42716C39.7569 9.73966 40.4079 10.2431 40.9114 10.9376C41.4148 11.632 41.6666 12.4133 41.6666 13.2813V23.1251C41.6666 27.9862 40.2777 32.5261 37.4999 36.7449C34.7221 40.9636 30.9895 43.8542 26.302 45.4167C26.0937 45.4862 25.8853 45.5383 25.677 45.573C25.4687 45.6077 25.243 45.6251 24.9999 45.6251Z" fill="white"/>
              </svg>
            </IconWrapper>
            <CardTitle>Detection and Blocking</CardTitle>
            <CardDescription>
              Simple but sophisticated techniques detect threats the competition does not, quickly and easily.
            </CardDescription>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper>
              <svg viewBox="0 0 512 512" fill="none">
                <path d="M487.1,251c-1.1-1.3-26.2-32.8-67.2-64.7c-54.7-42.6-111.3-65-163.9-65s-109.3,22.5-163.9,65    c-41,31.9-66.2,63.4-67.2,64.7c-2.3,2.9-2.3,7,0,10c1.1,1.3,26.2,32.8,67.2,64.7c54.7,42.6,111.3,65,163.9,65s109.3-22.5,163.9-65    c41-31.9,66.2-63.4,67.2-64.7C489.4,258.1,489.4,253.9,487.1,251z M317.4,318.2c0,7.4-6,13.5-13.5,13.5h-95.8    c-7.5,0-13.5-6-13.5-13.5v-78.7c0-7.3,5.7-13.2,12.9-13.5V179c0-1.7,0.2-3.4,0.5-5.1c2.4-12.4,13.4-21.5,26.1-21.5h43.8    c14.6,0,26.6,11.9,26.6,26.6v47.1c7.2,0.3,12.9,6.2,12.9,13.5V318.2z M41.6,256c8.7-10,30.4-33.8,60.6-57.3    c21.5-16.7,50.1-35.3,82.7-47.6c-33.6,22.8-55.6,61.3-55.6,104.9s22.1,82.1,55.6,104.9c-32.6-12.3-61.2-30.9-82.7-47.6    C72,289.8,50.3,266,41.6,256z M409.8,313.3c-21.5,16.7-50.1,35.3-82.7,47.6c33.6-22.8,55.6-61.3,55.6-104.9s-22.1-82.1-55.6-104.9    c32.6,12.3,61.2,30.9,82.7,47.6c30.2,23.5,51.9,47.2,60.6,57.3C461.7,266,440,289.8,409.8,313.3z" fill="white"/>
                <path d="M277.9,168.4h-43.8c-5,0-9.4,3.6-10.4,8.5c-0.1,0.7-0.2,1.4-0.2,2v47.1h64.9V179    C288.5,173.1,283.7,168.4,277.9,168.4z" fill="white"/>
                <path d="M256,254.2c-10.2,0-18.5,8.3-18.5,18.6c0,0.5,0,1,0.1,1.4c0,0.2,0,0.3,0,0.5c0,0.3,0.1,0.6,0.1,1    c1,6.1,4.9,11.2,10.3,13.8v14.2c0,4.4,3.6,8,8,8s8-3.6,8-8v-14.2c5.7-2.7,9.8-8.2,10.5-14.8c0-0.2,0-0.3,0-0.5    c0.1-0.5,0.1-1,0.1-1.4C274.6,262.4,266.3,254.2,256,254.2z" fill="white"/>
              </svg>
            </IconWrapper>
            <CardTitle>Concealed threat removal</CardTitle>
            <CardDescription>
              Block threats concealed via steganography in traditionally "safe" files like PDFs and images.
            </CardDescription>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper>
              <svg viewBox="0 0 50 50" fill="none">
                <path d="M27.6038 45.8334C27.2219 45.8334 26.866 45.7379 26.5361 45.5469C26.2062 45.3559 25.9545 45.1042 25.7809 44.7917C25.6073 44.4792 25.5205 44.132 25.5205 43.75C25.5205 43.3681 25.6246 43.0035 25.833 42.6563L34.6871 28.073C34.8955 27.7257 35.1559 27.4653 35.4684 27.2917C35.7809 27.1181 36.1107 27.0313 36.458 27.0313C36.8052 27.0313 37.135 27.1181 37.4475 27.2917C37.76 27.4653 38.0205 27.7257 38.2288 28.073L47.083 42.6563C47.2913 43.0035 47.3955 43.3681 47.3955 43.75C47.3955 44.132 47.3087 44.4792 47.135 44.7917C46.9614 45.1042 46.7184 45.3559 46.4059 45.5469C46.0934 45.7379 45.7288 45.8334 45.3121 45.8334H27.6038ZM36.458 43.75C36.7357 43.75 36.9788 43.6459 37.1871 43.4375C37.3955 43.2292 37.4996 42.9861 37.4996 42.7084C37.4996 42.4306 37.3955 42.1875 37.1871 41.9792C36.9788 41.7709 36.7357 41.6667 36.458 41.6667C36.1802 41.6667 35.9371 41.7709 35.7288 41.9792C35.5205 42.1875 35.4163 42.4306 35.4163 42.7084C35.4163 42.9861 35.5205 43.2292 35.7288 43.4375C35.9371 43.6459 36.1802 43.75 36.458 43.75ZM16.8226 41.6667C16.4406 41.6667 16.0847 41.5712 15.7548 41.3802C15.425 41.1893 15.1732 40.9202 14.9996 40.573L10.9371 33.3334H13.958L16.0413 37.5H20.833V35.4167H17.2913L15.208 31.25H9.7913L6.82255 26.0417C6.75311 25.8681 6.69234 25.6945 6.64026 25.5209C6.58818 25.3473 6.56213 25.1737 6.56213 25C6.56213 24.8612 6.64894 24.5139 6.82255 23.9584L9.7913 18.75H15.208L17.2913 14.5834H20.833V12.5H16.0413L13.958 16.6667H10.9371L14.9996 9.42712C15.1732 9.0799 15.425 8.8108 15.7548 8.61983C16.0847 8.42886 16.4406 8.33337 16.8226 8.33337H21.8746C22.4649 8.33337 22.9597 8.53303 23.359 8.93233C23.7583 9.33164 23.958 9.82643 23.958 10.4167V18.75H20.833L18.7496 20.8334H23.958V27.0834H19.3746L17.2913 22.9167H12.4996L10.4163 25H16.0413L18.1246 29.1667H23.958V37.7084L22.2392 40.5209C22.135 40.6945 22.0482 40.8768 21.9788 41.0677C21.9094 41.2587 21.8399 41.4584 21.7705 41.6667H16.8226ZM35.4163 39.5834H37.4996V33.3334H35.4163V39.5834ZM26.0413 34.2709V20.8334H31.2496L29.1663 18.75H26.0413V10.4167C26.0413 9.82643 26.241 9.33164 26.6403 8.93233C27.0396 8.53303 27.5344 8.33337 28.1246 8.33337H33.1767C33.5587 8.33337 33.9146 8.42886 34.2444 8.61983C34.5743 8.8108 34.826 9.0799 34.9996 9.42712L39.0621 16.6667H36.0413L33.958 12.5H29.1663V14.5834H32.708L34.7913 18.75H40.208L43.1767 23.9584C43.2809 24.132 43.3503 24.3056 43.3851 24.4792C43.4198 24.6528 43.4371 24.8264 43.4371 25C43.4371 25.0348 43.3503 25.382 43.1767 26.0417L42.5517 27.1355L41.7705 25.9375C41.1802 25 40.425 24.2535 39.5048 23.698C38.5847 23.1424 37.5691 22.8646 36.458 22.8646C35.3469 22.8646 34.3312 23.1424 33.4111 23.698C32.491 24.2535 31.7357 25 31.1455 25.9375L26.0413 34.2709Z" fill="white"/>
              </svg>
            </IconWrapper>
            <CardTitle>AI threat prediction</CardTitle>
            <CardDescription>
              Leverage AI to identify and predict undiscovered threats across all areas.
            </CardDescription>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper>
              <svg viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </IconWrapper>
            <CardTitle>Phishing and Scam Protection</CardTitle>
            <CardDescription>
              Protect against social engineering attacks of all sizes, without breaking websites or apps.
            </CardDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturedSection>
    </Layout>
  );
}
