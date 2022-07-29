import React, { Component } from 'react';
import ClaimNewComponent from "./claimNewComponent"
import Footer from '../../common/components/footer';
import SecondHeader from '../../common/components/secondHeader';
class ClaimNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contractNo: "",
            contractNoError: "",
            dealer: "",
            dealerError: "",
            costumerName: "",
            costumerNameError: "",
            address: "",
            addressError: "",
            city: "",
            cityError: "",
            state: "",
            stateError: "",
            zipCode: "",
            zipCodeError: "",
            phone: "",
            phoneError: "",
            phoneType: "",
            phoneTypeError: "",
            email: "",
            emailError: "",
            dateofLoss: "",
            dateofLossError: "",
            mileage: "",
            mileageError: "",
            insurance: "",
            insuranceError: "",
          };
    }

   

    componentDidMount() {

    }
    formSubmit = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = () => {
        const contractNoError = !this.state.contractNo ? "Please enter the Contract no." : "";
        const dealerError = !this.state.dealer ? "Please enter the Dealer" : "";
        const costumerNameError = !this.state.costumerName
          ? "Please enter the costumer Name"
          : "";
        const addressError = !this.state.address
          ? "Please enter the address"
          : "";
        const cityError = !this.state.city
          ? "Please enter the city"
          : "";
        const stateError = !this.state.state
          ? "Please enter the state"
          : "";
        const zipCodeError = !this.state.zipCode
          ? "Please enter the odometer"
          : "";
        const phoneError = !this.state.phone
          ? "Please enter the phone"
          : "";
        const phoneTypeError = !this.state.phoneType
          ? "Please enter the phoneType"
          : "";
        const emailError = !this.state.email
          ? "Please enter the email"
          : "";
        const dateofLossError = !this.state.dateofLoss
          ? "Please enter the Date Of Loss"
          : "";
        const mileageError = !this.state.mileage
          ? "Please enter the mileage"
          : "";
        const insuranceError = !this.state.insurance
          ? "Please enter the insurance"
          : "";
        
    
        this.setState({
            contractNoError: contractNoError,
          addressError: addressError,
          dealerError: dealerError,
          costumerNameError: costumerNameError,
          cityError: cityError,
          stateError: stateError,
          zipCodeError: zipCodeError,
          phoneError: phoneError,
          phoneTypeError: phoneTypeError,
          emailError: emailError,
          dateofLossError: dateofLossError,
          mileageError: mileageError,
          insuranceError: insuranceError,
        });
      };
    render() {
        return (
            <>
            <SecondHeader/>
            <ClaimNewComponent   state={this.state}
          formSubmit={this.formSubmit}
          onSubmit={this.onSubmit}/>
            <Footer/>
            </>
        );
    }
}



export default ClaimNew;