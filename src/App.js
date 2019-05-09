import React from 'react';
import './App.css';
import Comparative from '../src/components/Comparative';
import Questions from '../src/components/Questions'
import SecondQuestion from '../src/components/SecondQuestion'
import ProgressBar from './components/ProgressBar'
import Header from '../src/components/header';

function App() {
  return (
    <div className="App">
     <Header/>
     <Comparative/>
     <ProgressBar />
     <Questions />
     <SecondQuestion />
    </div>
  );
}

export default App;
