import React, { Component } from 'react';
import OnBoarding from "./OnBoarding"
import RubyToolSetup from "./RubyToolSetup"
import RubyToolDesign from "./RubyToolDesign"

class Help extends Component {
    render() {
        return (
            <div className="container-fluid">
                <OnBoarding />
                <RubyToolSetup />
                <RubyToolDesign />
            </div>
        );
    }
}

export default Help;