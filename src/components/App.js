import React from 'react';
import TweetForm from './TweetForm';
import TweetList from './TweetList';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <TweetForm />
      <TweetList />
    </React.Fragment>
  );
}

export default App;
