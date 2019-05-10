import React from 'react';
import './App.css';
import Header from '../src/components/header'
import Comparative from '../src/components/Comparative';
import Estimate from './components/Estimate'

// import NameQuestion from './components/NameQuestion'
// import AddressQuestion from './components/AddressQuestion'
// import ProgressBar from './components/ProgressBar'
// import OwnerQuestion from './components/OwnerQuestion'

function App() {
  return (
    <div className="App">
     <Header/>
     <Comparative/>
     <Estimate />
     {/* <ProgressBar /> */}
     {/* <NameQuestion /> */}
     {/* <AddressQuestion /> */}
     {/* <OwnerQuestion /> */}
    </div>
  );
}

export default App;
