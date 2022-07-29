import React, { Component } from 'react';
import PassSuccessfulComponent  from './passSuccessfulComponent';
import Header from '../../common/components/header'; 
import FooterBar from '../../common/footerBar';



class ResetSuccessIndex extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }
    render() {
        return (
            <>
             <Header/>
             <PassSuccessfulComponent/>
             <FooterBar/>
            </>
        );
    }
}

export default ResetSuccessIndex;