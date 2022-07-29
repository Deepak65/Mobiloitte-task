import React, { Component } from 'react';
import Footer from '../../common/components/footer';
import SecondHeader from '../../common/components/secondHeader';
import ChatBoxComponent from './chatBox';

class ChatBox extends Component {
    constructor(props) {
        super(props);

    }

  
    componentDidMount() {

    }


    render() {
        return (
            <>
            <SecondHeader/>
            <ChatBoxComponent/>
            <Footer/>
            </>
        );
    }
}



export default ChatBox;