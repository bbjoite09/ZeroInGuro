import React from 'react';
import styled from 'styled-components';

import Home from '../components/main/Home';
import ProblemInfo from '../components/main/ProblemInfo';
import ZeroInfo from '../components/main/ZeroInfo';
import ZeroWasteInfo from '../components/main/ZeroWasteInfo';
import Event from '../components/main/Event';
import Comment from '../components/main/Comment';

const Main = () => {
  return (
    <div
      className="App"
      style={{
        WebkitBleedingedgethingy: 1,
        bleedingedgethingy: 1,
        backgroundColor: 'gray',
      }}>
      <Container>
        <Home />
        <ProblemInfo />
        <ZeroWasteInfo />
        <ZeroInfo />
        <Event />
        <Comment />
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
export default Main;
