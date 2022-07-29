import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 100%;
  padding: 49px 67px 61px 58px;
`;
const FormDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TextPara = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #002e5b;
  margin: 0 0 58px 0;
`;
const ButtonDiv = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #3aade1;
  height: 23px;
  background: transparent;
  border: none;
`;
const LowerFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 62px 0 0;
`;
const SecondLowerFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 62px 0 0;
`;
const ThirdLowerFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const SecondDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const InputField = styled.input`
  height: 50px;
  background: rgba(181, 193, 204, 0.43);
  border-radius: 5px;
  border: none;
`;
const LabelText = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
`;
const InputFieldDate = styled.input`
  height: 50px;
  background: rgba(181, 193, 204, 0.43);
  border-radius: 5px;
  border: none;
  padding: 0 16px 0 18px;
`;
const SaveBtn = styled.button`
  width: 257px;
  height: 60px;
  background: #3aade1;
  border-radius: 10px;
  color: #fff;
  border: none;
`;
const SaveBtnDiv = styled.div`
  text-align: center;
  margin-top: 78px;
`;
const SpanText = styled.span`
  color: red;
  font-size: 14px;
  font-family: "Roboto";
  font-style: normal;
`;
export default function VehicleServiceComponent(props) {
  const { state, formSubmit, onSubmit } = props;
  const handle = (e) => {
    console.log("sachin");
    formSubmit(e);
  };
  console.log(props.state, "props");
  return (
    <>
      <MainDiv>
        <FormDiv>
          <TextPara>Paintless Dent Repair</TextPara>
          <ButtonDiv>+ NewAgreement</ButtonDiv>
        </FormDiv>
        <SecondDiv>
          <LowerFormDiv>
            <LabelText>Customer Name</LabelText>
            <InputField
              name="name"
              value={state.name}
              onChange={(e) => handle(e)}
            />
            <SpanText>{state?.nameError}</SpanText>
          </LowerFormDiv>
          <SecondLowerFormDiv>
            <LabelText>Customer Address</LabelText>
            <InputField
              name="address"
              value={state.address}
              onChange={(e) => handle(e)}
            />
            <SpanText>{state?.addressError}</SpanText>
          </SecondLowerFormDiv>
          <ThirdLowerFormDiv>
            <LabelText>Vehicle Year</LabelText>
            <InputField
              name="vehicleYear"
              value={state.vehicleYear}
              onChange={(e) => handle(e)}
            />
            <SpanText>{state?.vehicleYearError}</SpanText>
          </ThirdLowerFormDiv>
        </SecondDiv>
        <SecondDiv>
          <LowerFormDiv>
            <LabelText>Vehicle Name</LabelText>
            <InputField
              name="vehicleName"
              value={state.vehicleName}
              onChange={(e) => handle(e)}
            />
            <SpanText>{state?.vehicleNameError}</SpanText>
          </LowerFormDiv>
          <SecondLowerFormDiv>
            <LabelText>Vehicle Model</LabelText>
            <InputField
              name="vehicleModel"
              value={state.vehicleModel}
              onChange={(e) => handle(e)}
            />
            <SpanText>{state?.vehicleModelError}</SpanText>
          </SecondLowerFormDiv>
          <ThirdLowerFormDiv>
            <LabelText>VIN Number</LabelText>
            <InputField
              name="VinNumber"
              value={state.VinNumber}
              onChange={(e) => handle(e)}
            />
            <SpanText>{state?.VinNumberError}</SpanText>
          </ThirdLowerFormDiv>
        </SecondDiv>
        <SecondDiv>
          <LowerFormDiv>
            <LabelText>Odo Meter</LabelText>
            <InputField
              name="odoMeter"
              value={state.odoMeter}
              onChange={(e) => handle(e)}
            />
            <SpanText>{state?.odoMeterError}</SpanText>
          </LowerFormDiv>
          <SecondLowerFormDiv>
            <LabelText>Dealers Name</LabelText>
            <InputField
              name="dealerName"
              value={state.dealerName}
              onChange={(e) => handle(e)}
            />
            <SpanText>{state?.dealerNameError}</SpanText>
          </SecondLowerFormDiv>
          <ThirdLowerFormDiv>
            <LabelText>Dealers Address</LabelText>
            <InputField
              name="dealerAddress"
              value={state.dealerAddress}
              onChange={(e) => handle(e)}
            />
            <SpanText>{state?.dealerAddressError}</SpanText>
          </ThirdLowerFormDiv>
        </SecondDiv>
        <SecondDiv>
          <LowerFormDiv>
            <LabelText>Customer Phone No.</LabelText>
            <InputField
              name="customerNo"
              value={state.customerNo}
              onChange={(e) => handle(e)}
            />
            <SpanText>{state?.customerNoError}</SpanText>
          </LowerFormDiv>
          <SecondLowerFormDiv>
            <LabelText>Lien Holder </LabelText>
            <InputField
              name="lienHolder"
              value={state.lienHolder}
              onChange={(e) => handle(e)}
            />
            <SpanText>{state?.lienHolderError}</SpanText>
          </SecondLowerFormDiv>
          <ThirdLowerFormDiv>
            <LabelText>Original In Service Date</LabelText>
            <InputField
              name="originalServiceDate"
              value={state.originalServiceDate}
              onChange={(e) => handle(e)}
            />
            <SpanText>{state?.originalServiceDateError}</SpanText>
          </ThirdLowerFormDiv>
        </SecondDiv>
        <SecondDiv>
          <LowerFormDiv>
            <LabelText>Dealers Phone number</LabelText>
            <InputField
              name="dealerNo"
              value={state.dealerNo}
              onChange={(e) => handle(e)}
            />
            <SpanText>{state?.dealerNoError}</SpanText>
          </LowerFormDiv>
          <ThirdLowerFormDiv>
            <LabelText>Effective Date</LabelText>
            <InputField
              name="effectiveDate"
              value={state.effectiveDate}
              onChange={(e) => handle(e)}
            />
            <SpanText>{state?.effectiveDateError}</SpanText>
          </ThirdLowerFormDiv>
        </SecondDiv>
        <SecondDiv>
          <LowerFormDiv>
            <LabelText>Deductible </LabelText>
            <InputFieldDate
              name="deductible"
              value={state.deductible}
              onChange={(e) => handle(e)}
              type="date"
            />
            <SpanText>{state?.deductibleError}</SpanText>
          </LowerFormDiv>
          <ThirdLowerFormDiv>
            <LabelText>Form</LabelText>
            <InputFieldDate
              name="form"
              value={state.form}
              onChange={(e) => handle(e)}
              type="date"
            />
            <SpanText>{state?.formError}</SpanText>
          </ThirdLowerFormDiv>
        </SecondDiv>
        <SecondDiv>
          <LowerFormDiv>
            <LabelText>Start Time </LabelText>
            <InputFieldDate
              name="startTime"
              value={state.startTime}
              onChange={(e) => handle(e)}
              type="time"
            />
            <SpanText>{state?.startTimeError}</SpanText>
          </LowerFormDiv>
          <ThirdLowerFormDiv>
            <LabelText>End Time</LabelText>
            <InputFieldDate
              name="endTime"
              value={state.endTime}
              onChange={(e) => handle(e)}
              type="time"
            />
            <SpanText>{state?.endTimeError}</SpanText>
          </ThirdLowerFormDiv>
        </SecondDiv>
        <SecondDiv>
          <LowerFormDiv>
            <LabelText>Agreement Purchase Price </LabelText>
            <InputFieldDate
              name="agreementPurchasePrice"
              value={state.agreementPurchasePrice}
              onChange={(e) => handle(e)}
              placeholder="Choose File"
            />
            <SpanText>{state?.agreementPurchasePriceError}</SpanText>
          </LowerFormDiv>
          <ThirdLowerFormDiv>
            <LabelText>Coverage Type </LabelText>
            <InputFieldDate
              name="coverageType"
              value={state.coverageType}
              onChange={(e) => handle(e)}
              placeholder="Choose File"
            />
            <SpanText>{state?.coverageTypeError}</SpanText>
          </ThirdLowerFormDiv>
        </SecondDiv>
        <SaveBtnDiv>
          <SaveBtn onClick={onSubmit}>Submit</SaveBtn>
        </SaveBtnDiv>
      </MainDiv>
    </>
  );
}
