import React, { Component } from 'react';
import Footer from '../../common/components/footer';
import SecondHeader from '../../common/components/secondHeader';
import AddRoomComponent from './addRoom';

class AddRoom extends Component {
    constructor(props) {
        super(props);

    }



    componentDidMount() {

    }


    render() {
        return (
            <>
            <SecondHeader/>
            <AddRoomComponent/>
            <Footer/>
            </>
        );
    }
}



export default AddRoom;