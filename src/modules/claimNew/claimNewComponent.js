import React from 'react'
import styled from "styled-components"

const MainDiv = styled.div`
width: 100%;
padding: 49px 67px 61px 58px;
`
const FormDiv = styled.div`
display: flex;
flex-direction: column;
`
const TextPara = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 30px;
color: #002E5B;
margin: 0 0 0px 0;
`
const ContractTextPara = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
color: #000000;

margin: 0 0 58px 0;
`
const LowerFormDiv = styled.div`
display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 62px 0 0;
`
const LowerInsuranceDiv = styled.div`
display: flex;
    flex-direction: column;
    width: 100%;
    // padding: 0 62px 0 0;
    max-width:546px;
`
const SecondLowerFormDiv = styled.div`
display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 62px 0 0;
`
const ThirdLowerFormDiv = styled.div`
display: flex;
    flex-direction: column;
    width: 100%;
`
const SecondDiv = styled.div`
display: flex;
    justify-content: space-between;
    margin-bottom:40px;
`;
const InputField = styled.input`
height: 50px;
background: rgba(181, 193, 204, 0.43);
border-radius: 5px;
border: none;
`
const CompanyInputField = styled.input`
height: 50px;
background: rgba(181, 193, 204, 0.43);
border-radius: 5px;
border: none;
width:100%;
// max-width: 397px;
`
const LabelText = styled.label`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
color: #000000;
`;
const SaveBtn = styled.button`
width: 257px;
height: 60px;
background: #3AADE1;
border-radius: 10px;
color:#fff;
border:none;
`;
const SaveBtnDiv = styled.div`
text-align: center;
margin-top:78px;
`;
const SpanText = styled.span`
  color: red;
  font-size: 14px;
  font-family: "Roboto";
  font-style: normal;
`;
export default function ClaimNewComponent(props) {
    const { state, formSubmit, onSubmit } = props;
  const handle = (e) => {
    formSubmit(e);
  };
  console.log(props.state, "props");
  return (
    <>
    <MainDiv>
        <FormDiv>
            <TextPara>Claim New
</TextPara>
<ContractTextPara>Contract - EMO1133698
</ContractTextPara>
        </FormDiv>
        <SecondDiv>
           <LowerFormDiv>
            <LabelText>Contract number
</LabelText>
            <InputField name="name"
              value={state.contractNo}
              onChange={(e) => handle(e)}/>
              <SpanText>{state?.contractNoError}</SpanText>
            </LowerFormDiv>
            <SecondLowerFormDiv>
            <LabelText>Dealer</LabelText>
            <InputField name="dealer"
              value={state.dealer}
              onChange={(e) => handle(e)}/>
               <SpanText>{state?.dealerError}</SpanText>
            </SecondLowerFormDiv>
            <ThirdLowerFormDiv>
            <LabelText>Costumer Name
</LabelText>
            <InputField name="costumerName"
              value={state.costumerName}
              onChange={(e) => handle(e)}/>
               <SpanText>{state?.costumerNameError}</SpanText>
            </ThirdLowerFormDiv>
        </SecondDiv>
        <SecondDiv>
           <LowerFormDiv>
            <LabelText>Address</LabelText>
            <InputField  name="address"
              value={state.address}
              onChange={(e) => handle(e)}/>
              <SpanText>{state?.addressError}</SpanText>
            </LowerFormDiv>
            <SecondLowerFormDiv>
            <LabelText>City</LabelText>
            <InputField name="city"
              value={state.city}
              onChange={(e) => handle(e)}/>
               <SpanText>{state?.cityError}</SpanText>
            </SecondLowerFormDiv>
            <ThirdLowerFormDiv>
            <LabelText>State </LabelText>
            <InputField placeholder='--Select State--' name="state"
              value={state.state}
              onChange={(e) => handle(e)}/>
               <SpanText>{state?.stateError}</SpanText>
            </ThirdLowerFormDiv>
        </SecondDiv>
        <SecondDiv>
           <LowerFormDiv>
            <LabelText>ZiP CODE</LabelText>
            <InputField name="zipCode"
              value={state.zipCode}
              onChange={(e) => handle(e)}/>
               <SpanText>{state?.zipCodeError}</SpanText>
            </LowerFormDiv>
            <SecondLowerFormDiv>
            <LabelText>Phone </LabelText>
            <InputField name="phone"
              value={state.phone}
              onChange={(e) => handle(e)}/>
               <SpanText>{state?.phoneError}</SpanText>
            </SecondLowerFormDiv>
            <ThirdLowerFormDiv>
            <LabelText>Phone Type </LabelText>
            <InputField placeholder='-- Select Phone Type --' name="phoneType"
              value={state.phoneType}
              onChange={(e) => handle(e)}/>
               <SpanText>{state?.phoneTypeError}</SpanText>
            </ThirdLowerFormDiv>
        </SecondDiv>
        <SecondDiv>
           <LowerFormDiv>
            <LabelText>Email</LabelText>
            <InputField name="email"
              value={state.email}
              onChange={(e) => handle(e)}/>
               <SpanText>{state?.emailError}</SpanText>
            </LowerFormDiv>
            <SecondLowerFormDiv>
            <LabelText>Date Of Loss </LabelText>
            <InputField name="dateofLoss"
              value={state.dateofLoss}
              onChange={(e) => handle(e)}/>
               <SpanText>{state?.dateofLossError}</SpanText>
            </SecondLowerFormDiv>
            <ThirdLowerFormDiv>
            <LabelText>Mileage at the time of loss</LabelText>
            <InputField name="mileage"
              value={state.mileage}
              onChange={(e) => handle(e)}/>
               <SpanText>{state?.mileageError}</SpanText>
            </ThirdLowerFormDiv>
        </SecondDiv>
      
        <SecondDiv>
           <LowerInsuranceDiv>
            <LabelText>Insurance Company
</LabelText>
            <CompanyInputField name="insurance"
              value={state.insurance}
              onChange={(e) => handle(e)}/>
               <SpanText>{state?.insuranceError}</SpanText>
            </LowerInsuranceDiv>
        </SecondDiv>
    
        
        <SaveBtnDiv>
        <SaveBtn onClick={onSubmit}>Submit</SaveBtn>
        </SaveBtnDiv>
        
    </MainDiv>
    </>
  )
}
