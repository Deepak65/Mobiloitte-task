import React, { Component } from 'react';
import Footer from '../../common/components/footer';
import SecondHeader from '../../common/components/secondHeader';
import BlogsComponent from './blogsComponent';

class Blogs extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }

 

    render() {
        return (
            <>
            <SecondHeader/>
                <BlogsComponent/>
                <Footer/>
            </>
        );
    }
}



export default Blogs;