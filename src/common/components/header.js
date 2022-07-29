import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from "react-router";
const MainDiv = styled.div`
  background: #002e5b;
  width: 100%;
  height: 170px;
  padding: 13px 249px 0 249px;
  position: relative;
  float: left;
`;
const ContentDiv = styled.div`
  padding-left: 36%;
`;
const SpaceDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ContactDiv = styled.div`
  display: flex;
`;
const RegisterDiv = styled.div`
  display: flex;
`;
const MailDiv = styled.div`
  display: flex;
  font-size: 11px;
  //   font-weight: 600;
  color: white;
`;
const CallDiv = styled.div`
  display: flex;
  font-size: 11px;
  //   font-weight: 600;
  color: white;
`;
const RegisterButton = styled.button`
  padding-left: 45px;
  padding-right: 44px;
  height: 40px;
  background: #3aade1;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: white;
`;
const LoginButton = styled.button`
  height: 40px;
  background: #3aade1;
  border-radius: 10px;
  padding-left: 33px;
  padding-right: 32px;
  font-size: 14px;
  font-weight: 600;
  color: white;
`;
const Nav = styled.div`
  background: white;
  overflow: hidden;
  height: 109px;
  padding: 43px 46px;
  -webkit-box-shadow: -8px 16px 5px 0px lightgrey;
  -moz-box-shadow: -8px 16px 5px 0px lightgrey;
  box-shadow: -8px 16px 5px 0px lightgrey;
  margin-top: 14px;
`;
const Logo = styled.div`
  float: left;
`;
const Section = styled.div`
  float: right;
  display: flex;
`;
const Anchors = styled.p`
  padding: 0px 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #707070;
`;

const HamImg = styled.img`
  padding: 0px 20px;
`;
function Header() {
  const history = useHistory();
  const handleBlog = () => {
    history.push("/blogs")
  }
  const handleRegister = () => {
    history.push("/sign-up")
  }
  const handleLogin = () => {
    history.push("/")
  }
  return (
    <MainDiv>
      <ContentDiv>
        <SpaceDiv>
          <ContactDiv>
            <MailDiv>
              <img src="#"></img>&nbsp;&nbsp;
              <p>
                Drop us an email:
                <br />
                info@gmail.com
              </p>
            </MailDiv>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <CallDiv>
              <img src="#"></img>&nbsp;&nbsp;
              <p>
                Call us:
                <br />
                +91 5245-5245-25
              </p>
            </CallDiv>
          </ContactDiv>
          <RegisterDiv>
            <RegisterButton onClick={handleRegister}>REGISTER</RegisterButton>
            &nbsp;&nbsp;&nbsp;
            <LoginButton onClick={handleLogin}>LOGIN</LoginButton>
          </RegisterDiv>
        </SpaceDiv>
      </ContentDiv>
      {/* navbar */}
      <Nav>
        <Logo>CompanyLogo</Logo>
        <Section>
          <Anchors>Home</Anchors>
          {/* &nbsp;&nbsp;&nbsp; */}
          <Anchors>About</Anchors>
          <Anchors>Administrator</Anchors>
          <Anchors>Customer</Anchors>
          <Anchors>Delears</Anchors>
          <Anchors onClick={handleBlog}>Blogs</Anchors>
          <SearchIcon />
          <MenuIcon />
        </Section>
      </Nav>
    </MainDiv>
  );
}

export default Header;
