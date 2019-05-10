import React, { Component } from 'react';
import ProgressBar from './ProgressBar'
import NameQuestion from './NameQuestion'
import AddressQuestion from './AddressQuestion'
import OwnerQuestion from './OwnerQuestion'
import IndoorsQuestion from './IndoorsQuestion'

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
                                <div className="col-12"><NameQuestion updateScreen={this.updateScreen} /> </div>;
                                </div>
                            </div>
            case 2: return <div className="col-12">
                                <ProgressBar />
                                <div className="row">
                                <div className="col-12"><AddressQuestion updateScreen={this.updateScreen} /> </div>;
                                </div>
                            </div>
            case 3: return <div className="col-12">
                                <ProgressBar />
                                <div className="row">
                                <div className="col-12"><OwnerQuestion updateScreen={this.updateScreen} /></div>;
                                </div>
                            </div>
            case 4: return <div className="col-12">
                                <ProgressBar />
                                <div className="row">
                                <div className="col-12"><IndoorsQuestion updateScreen={this.updateScreen} /></div> ;
                                </div>
                            </div>                
            default : return <div className="col-12">
                                <ProgressBar />
                                <div className="row">
                                <div><NameQuestion updateScreen={this.updateScreen} /></div>;
                                </div>
                            </div>
        }   
    }
}

export default Estimate;