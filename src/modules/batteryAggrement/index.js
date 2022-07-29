import React, { Component } from "react";
import BatteryAggrementComponent from "./batteryAggrementComponent";
import Footer from "../../common/components/footer";
import SecondHeader from "../../common/components/secondHeader";

class BatteryAggrement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameError: "",
      address: "",
      addressError: "",
      vehicleYear: "",
      vehicleYearError: "",
      vehicleName: "",
      vehicleNameError: "",
      vehicleModel: "",
      vehicleModelError: "",
      VinNumber: "",
      VinNumberError: "",
      odoMeter: "",
      odoMeterError: "",
      dealerName: "",
      dealerNameError: "",
      dealerAddress: "",
      dealerAddressError: "",
      customerNo: "",
      customerNoError: "",
      lienHolder: "",
      lienHolderError: "",
      originalServiceDate: "",
      originalServiceDateError: "",
      dealerNo: "",
      dealerNoError: "",
      effectiveDate: "",
      effectiveDateError: "",
      deductible: "",
      deductibleError: "",
      form: "",
      formError: "",
      startTime: "",
      startTimeError: "",
      endTime: "",
      endTimeError: "",
      agreementPurchasePrice: "",
      agreementPurchasePriceError: "",
      coverageType: "",
      coverageTypeError: "",
    };
  }

  componentDidMount() {}
  formSubmit = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = () => {
    const nameError = !this.state.name ? "Please enter the name" : "";
    const addressError = !this.state.address ? "Please enter the address" : "";
    const vehicleYearError = !this.state.vehicleYear
      ? "Please enter the vehicle year"
      : "";
    const vehicleNameError = !this.state.vehicleName
      ? "Please enter the vehicle name"
      : "";
    const vehicleModelError = !this.state.vehicleModel
      ? "Please enter the vehicle model"
      : "";
    const VinNumberError = !this.state.VinNumber
      ? "Please enter the VIN number"
      : "";
    const odoMeterError = !this.state.odoMeter
      ? "Please enter the odometer"
      : "";
    const dealerNameError = !this.state.dealerName
      ? "Please enter the dealer name"
      : "";
    const dealerAddressError = !this.state.dealerAddress
      ? "Please enter the dealer address"
      : "";
    const customerNoError = !this.state.customerNo
      ? "Please enter the customer number"
      : "";
    const lienHolderError = !this.state.lienHolder
      ? "Please enter the lien holder"
      : "";
    const originalServiceDateError = !this.state.originalServiceDate
      ? "Please enter the original service date"
      : "";
    const dealerNoError = !this.state.dealerNo
      ? "Please enter the dealer number"
      : "";
    const effectiveDateError = !this.state.effectiveDate
      ? "Please enter the effective date"
      : "";
    const deductibleError = !this.state.deductible
      ? "Please enter the deductible"
      : "";
    const formError = !this.state.form ? "Please enter the form" : "";
    const startTimeError = !this.state.startTime
      ? "Please enter the start time"
      : "";
    const endTimeError = !this.state.endTime ? "Please enter the end time" : "";
    const agreementPurchasePriceError = !this.state.agreementPurchasePrice
      ? "Please enter the agreement purchase price"
      : "";
    const coverageTypeError = !this.state.coverageType
      ? "Please enter the coverage type"
      : "";

    this.setState({
      nameError: nameError,
      addressError: addressError,
      vehicleYearError: vehicleYearError,
      vehicleNameError: vehicleNameError,
      vehicleModelError: vehicleModelError,
      VinNumberError: VinNumberError,
      odoMeterError: odoMeterError,
      dealerNameError: dealerNameError,
      dealerAddressError: dealerAddressError,
      customerNoError: customerNoError,
      lienHolderError: lienHolderError,
      originalServiceDateError: originalServiceDateError,
      dealerNoError: dealerNoError,
      effectiveDateError: effectiveDateError,
      deductibleError: deductibleError,
      formError: formError,
      startTimeError: startTimeError,
      endTimeError: endTimeError,
      agreementPurchasePriceError: agreementPurchasePriceError,
      coverageTypeError: coverageTypeError,
    });
  };
  componentDidMount() {}

  render() {
    return (
      <>
      <SecondHeader/>
        <BatteryAggrementComponent
          state={this.state}
          formSubmit={this.formSubmit}
          onSubmit={this.onSubmit}
        />
        <Footer />
      </>
    );
  }
}

export default BatteryAggrement;
