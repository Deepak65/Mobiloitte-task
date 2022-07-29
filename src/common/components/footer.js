import React from "react";
import styled from "styled-components";
const MainDiv = styled.div`
  background: #002e5b;
  width: 100%;
  padding: 74px 116px 57px 115px;
  position: relative;
  float: left;
`;
const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 34px;
`;
const PolicyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 34px;
`;
const JoinDiv = styled.div``;
const JoinP = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: white;
`;
const SubP = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: white;
`;
const Subscribe = styled.div`
  background: white;
  height: 75px;
  width: 729px;
  border-radius: 8px;
  display: flex;
`;
const TextInput = styled.input`
  background: white;
  height: 75px;
  width: 729px;
  padding: 10px;
  border: none;
`;
const SubscribeButton = styled.button`
  height: 54px;
  width: 240px;
  background: #3aade1;
  color: white;
  font-size: 14px;
  border: none;
  margin: 10px 8px 0 0;
  border-radius: 6px;
`;
const Horizontal = styled.div`
  border: 1px solid #3aade1;
`;
const FooterLink = styled.div``;
const About = styled.div`
  float: left;
  width: 25%;
  padding: 10px;
  height: 300px;
  padding-top: 101px;
  color: lightgrey;
  font-size: 13px;
`;
const QuickLinks = styled.div`
  float: left;
  width: 50%;
  padding: 10px;
  height: 300px;
`;
const DivOne = styled.div`
  float: left;
  width: 50%;
  padding: 10px;
  height: 300px;
`;
const Quick = styled.div`
  float: left;
  width: 25%;
  padding: 10px;
  height: 300px;
`;
const ContactInfo = styled.div`
  float: left;
  width: 25%;
  padding: 10px;
  height: 300px;
`;
const QuickLinksP = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;
  color: white;
`;
const QuickNavP = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-size: 14px;
  line-height: 35px;
  color: lightgrey;
`;
const ReservedP = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-size: 14px;
  line-height: 35px;
  color: lightgrey;
`;
const PolicyP = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-size: 14px;
  line-height: 35px;
  color: lightgrey;
`;
const SocialIconDiv = styled.div`
  display: flex;
  gap: 20px;`
  const SocialDiv = styled.div`
  margin-top: 14px;
`;
const SocialPara = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: #002e5b;
`;
  const FacBookImg = styled.img``;
const TwitterImg = styled.img``;
const InstagramImg = styled.img``;
const WhatsappImg = styled.img``;
function Footer() {
  return (
    <>
      <MainDiv>
        <ContentDiv>
          <JoinDiv>
            <JoinP>JOIN OUR NEWSLETTER</JoinP>
            <SubP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </SubP>
          </JoinDiv>
          <Subscribe>
            <TextInput placeholder="Enter your email address"></TextInput>
            <SubscribeButton>{"SUBSCRIBE NOW>"}</SubscribeButton>
          </Subscribe>
        </ContentDiv>
        <Horizontal />
        <br />
        
        <FooterLink>
          <About>
          Sed ut perspiciatis unde omnis iste natus error sit, 
            <br />
            eaque ipsa quae ab illo inventore veritatis et quas
            <br />
            totam rem aperiam, eaque ipsa quae ab illo inventore  

         
          <SocialDiv>
            <SocialIconDiv>
              <FacBookImg src="facebook.svg" />
              <TwitterImg src="twitterIcon.svg" />
              <InstagramImg src="instagram.svg" />
              <WhatsappImg src="whatsapp.svg" />
            </SocialIconDiv>
          </SocialDiv>
          </About>
          <QuickLinks>
            <QuickLinksP>QUICK LINKS</QuickLinksP>
            <Horizontal />
            <br />
            <br />
            <div style={{ display: "flex" }}>
              <DivOne>
                <QuickNavP>HOME</QuickNavP>
                <QuickNavP>ABOUT US</QuickNavP>
                <QuickNavP>INSURANCE</QuickNavP>
                <QuickNavP>OUR EVENTS</QuickNavP>
                <QuickNavP>OUR PACKAGES</QuickNavP>
              </DivOne>
              <Quick>
                <QuickNavP>OUR TEAM</QuickNavP>
                <QuickNavP>LATEST NEWS</QuickNavP>
                <QuickNavP>PRIVACY POLICY</QuickNavP>
                <QuickNavP>TERMS & CONDITIONS</QuickNavP>
                <QuickNavP>CONTACT US</QuickNavP>
              </Quick>
            </div>
          </QuickLinks>
          <ContactInfo>
            <QuickLinksP>CONTACT INFO</QuickLinksP>
            <Horizontal />
            <br />
            <br />
            <QuickNavP>location: 27 Di</QuickNavP>
            <QuickNavP>LATEST NEWS</QuickNavP>
            <QuickNavP>PRIVACY POLICY</QuickNavP>
            <QuickNavP>TERMS & CONDITIONS</QuickNavP>
            <QuickNavP>CONTACT US</QuickNavP>
          </ContactInfo>
        </FooterLink>
        {/* <Horizontal />
        <PolicyDiv>
          <ReservedP>2021 Pearo. All Rights Reserved by</ReservedP>
          <PolicyP>Privacy Policy | Terms & Conditions</PolicyP>
        </PolicyDiv> */}
      </MainDiv>
    </>
  );
}

export default Footer;
