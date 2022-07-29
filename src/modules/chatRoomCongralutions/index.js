import React, { Component } from 'react';
import Footer from '../../common/components/footer';
import SecondHeader from '../../common/components/secondHeader';
import RoomCongratsComponent from './congralutaionsRoom';

class CongratsRoom extends Component {
    constructor(props) {
        super(props);

    }



    componentDidMount() {

    }


    render() {
        return (
            <>
            <SecondHeader/>
            <RoomCongratsComponent/>
            <Footer/>
            </>
        );
    }
}



export default CongratsRoom;