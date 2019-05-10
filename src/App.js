import React from 'react';
import './App.css';
import Comparative from '../src/components/Comparative';
import NameQuestion from '../src/components/NameQuestion'
import SecondQuestion from '../src/components/SecondQuestion'
import ProgressBar from './components/ProgressBar'
import Header from '../src/components/header';

function App() {
  return (
    <div className="App">
     <Header/>
     <Comparative/>
     <ProgressBar />
     <NameQuestion />
     <SecondQuestion />
    </div>
  );
}

export default App;
