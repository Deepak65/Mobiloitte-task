import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";

const MainDiv = styled.div`
  width: 100%;
  padding: 203px 67px 180px 58px;
`;
const RoomDiv = styled.div`
  text-align: center;
  width: 100%;
  max-width: 557px;
  margin: 0 auto;
`;
const CreateImg = styled.img`
  width: 498px;
  height: 292px;
  left: 471px;
  top: 152px;
  // margin-bottom: 45px;
`;
const RoomPara = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #000000;
  margin-bottom: 33px;
`;
const Ahref = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #3aade1;
  margin-bottom: 33px;
`;
const CongoPara = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  /* identical to box height */

  color: #149739;
`;
const CopyDiv = styled.div`
display: flex;
    justify-content: space-evenly;
}
`;
const CopyImg = styled.img`
  align-self: start;
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BtnCopy = styled.button`
  width: 257px;
  height: 60px;
  left: 458px;
  top: 673px;

  background: #ffffff;
  border: 2px solid #3aade1;
  border-radius: 10px;
  color: #3aade1;
  // border:none;
`;
const RoomBtn = styled.button`
  width: 257px;
  height: 60px;
  left: 758px;
  top: 673px;

  background: #3aade1;
  border-radius: 10px;
  color: #fff;
  border: none;
`;
const SocialDiv = styled.div`
  margin-top: 63px;
`;
const SocialPara = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: #002e5b;
`;
const SocialIconDiv = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
const FacBookImg = styled.img``;
const TwitterImg = styled.img``;
const InstagramImg = styled.img``;
const WhatsappImg = styled.img``;
export default function RoomCongratsComponent() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/chat-box");
  };
  const handleCopyToClipboard = () => {
    alert("Link Copied!!");
  };
  return (
    <>
      <MainDiv>
        <RoomDiv>
          <CreateImg src="congrulationImage.svg"></CreateImg>
          <CongoPara>Congratulations!</CongoPara>
          <RoomPara>
            You have successfully created a new Virtual room on Sterling. You
            can now invite users from any social media or platform to your room
            using the invite link we provide.
          </RoomPara>
          <CopyDiv>
            {" "}
            <Ahref>
              https://sterling_chatroom123Xeecrwdfjvrjr.com/r/319571
            </Ahref>
            <CopyToClipboard
              text={"https://sterling_chatroom123Xeecrwdfjvrjr.com/r/319571"}
            >
              <CopyImg onClick={handleCopyToClipboard} src="CopyIcon.svg" />
            </CopyToClipboard>
          </CopyDiv>

          <BtnDiv>
            {" "}
            <CopyToClipboard
              text={"https://sterling_chatroom123Xeecrwdfjvrjr.com/r/319571"}
            >
              <BtnCopy onClick={handleCopyToClipboard}>
                Copy Invite Link
              </BtnCopy>
            </CopyToClipboard>
            <RoomBtn onClick={handleClick}>Enter Your Room</RoomBtn>
          </BtnDiv>

          <SocialDiv>
            <SocialPara>Share your Room link</SocialPara>
            <SocialIconDiv>
              <FacBookImg src="facebook.svg" />
              <TwitterImg src="twitterIcon.svg" />
              <InstagramImg src="instagram.svg" />
              <WhatsappImg src="whatsapp.svg" />
            </SocialIconDiv>
          </SocialDiv>
        </RoomDiv>
      </MainDiv>
    </>
  );
}
