import React from 'react'
import styled from 'styled-components'
import { useHistory} from "react-router-dom"



const LoginDiv = styled.div`
// height: 747px;
// width: 800px;
`;
const Container = styled.div`
padding: 13% 24% 3% 24%;
`;
const LoginHead = styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 47px;
color: #149739;
`;
const MainContainer = styled.div`
// background: #E5E5E5;
border-radius: 15px;
box-shadow: 10px 10px 10px 10px #E5E5E5;
padding: 44px 0px;
`;
const Content = styled.div`
width: 32rem;`;
const ForgotPasswordContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`;
const ForgotPara = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
text-align: center;
color: #676767;`;
const LoginBtnDiv = styled.div`
margin-top: 7rem;`;
const LoginBtn = styled.button`
max-width: 539px;
width: 100%;
height: 60px;
background: #3AADE1;
border-radius: 10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 29px;
color: #FFFFFF;
`;
const ImageDiv = styled.div``;
const Image = styled.img``;
const PassSuccessfulComponent = () => {
    const history = useHistory();
    const handleClick = () =>{
      history.push("/Login")
    }
  return (
    <>
    <Container>
    <MainContainer>
    <ForgotPasswordContainer>
    <ImageDiv>
      <Image src="/reset.svg"/>
    </ImageDiv>
      <LoginDiv>
        <LoginHead>Password reset successful</LoginHead>
        </LoginDiv>
        <ForgotPara>Password reset has been done 
        successfullly!
        </ForgotPara>
        <Content>
        
        
        <LoginBtnDiv>
           <LoginBtn onClick={handleClick}>Go To Login Page</LoginBtn>
        </LoginBtnDiv>
        </Content>
        </ForgotPasswordContainer>
    </MainContainer>
    </Container>
    </>
     )
}

export default PassSuccessfulComponent
