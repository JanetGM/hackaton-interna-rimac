import React from 'react';
import './App.css';
import './Style.css';
import Comparative from '../src/components/Comparative';
import NameQuestion from './components/NameQuestion'
import AddressQuestion from './components/AddressQuestion'
import ProgressBar from './components/ProgressBar'
import Header from '../src/components/header'
import OwnerQuestion from './components/OwnerQuestion'
import Banner from './components/banner';

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Comparative/>
     <ProgressBar />
     <NameQuestion />
     <AddressQuestion />
     <OwnerQuestion />
    </div>
  );
}

export default App;
