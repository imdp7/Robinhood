import React from "react";
import Newsfeed from './Newsfeed.js';
import Stats from './Stats.js';

function Main() {
  return (
    <div className="app__container">
      <Newsfeed />
      <Stats />
    </div>
  );
}

export default Main;
