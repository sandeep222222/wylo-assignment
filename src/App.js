import React from 'react';

import CreatePost from './components/CreatePost';
import PostsDisplay from './components/PostsDisplay';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1 className='heading'>Post Manager Application</h1>
      <CreatePost />
      <PostsDisplay />
    </div>
  );
};

export default App;