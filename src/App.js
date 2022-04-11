import './App.css';
import React from 'react';
import styled from 'styled-components';

import Home from './pages/Home';
import ProblemInfo from './pages/ProblemInfo';
import ZeroInfo from './pages/ZeroInfo';
import ZeroWasteInfo from './pages/ZeroWasteInfo';

const App = () => {
  return (
    <div
      className="App"
      style={{
        '-webkit-bleedingedgethingy': 1,
        bleedingedgethingy: 1,
        backgroundColor: 'gray',
      }}>
      <Container>
        <Home />
        <ProblemInfo />
        <ZeroInfo />
        <ZeroWasteInfo />
      </Container>
    </div>
  );
};
const Container = styled.div`
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  overflow-y: auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: white;
`;

export default App;
