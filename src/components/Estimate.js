import React, { Component } from 'react';
import ProgressBar from './ProgressBar'
import NameQuestion from './NameQuestion'
import AddressQuestion from './AddressQuestion'
import OwnerQuestion from './OwnerQuestion'

class Estimate extends Component {
    state = {
        screen: 1
    }
    updateScreen = () => {
        const {screen} = this.state
        let newScreen = screen + 1;
        this.setState({screen: newScreen})
    }
    render() {
        const {screen} = this.state;

        switch(screen){
            case 1: return <div className="col-12">
                                <ProgressBar />
                                <div className="row">
                                <NameQuestion updateScreen={this.updateScreen} /> ;
                                </div>
                           </div>
            case 2: return <div className="col-12">
                                <ProgressBar />
                                <div className="row">
                                <AddressQuestion updateScreen={this.updateScreen} /> ;
                                </div>
                            </div>
            case 3: return <div className="col-12">
                                <ProgressBar />
                                <div className="row">
                                <OwnerQuestion updateScreen={this.updateScreen} /> ;
                                </div>
                            </div>
            default : return <div className="col-12">
                                <ProgressBar />
                                <div className="row">
                                <NameQuestion updateScreen={this.updateScreen} /> ;
                                </div>
                            </div>
        }   
    }
}

export default Estimate;