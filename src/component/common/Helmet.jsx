import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>Clarence Portfolio Page</title>
                    <meta name="description" content="Clarence Portfolio Page" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
