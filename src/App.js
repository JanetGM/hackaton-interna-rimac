import React from 'react';
import './App.css';
import Comparative from '../src/components/Comparative';
import Questions from '../src/components/Questions'
import SecondQuestion from '../src/components/SecondQuestion'
import ProgressBar from './components/ProgressBar'

function App() {
  return (
    <div className="App">
     <Comparative/>
     <ProgressBar />
     <Questions />
     <SecondQuestion />
    </div>
  );
}

export default App;
