import React from 'react';
import {Link} from 'react-router-dom'

function Conversation({chat,match}) {

  return (
  <div>
      <div className="newsfeed__popularlists__intro">
        <span className="list__title">Conversation</span>
        <Link to ={`/stocks/${match?.params?.name}/conversation`} style={{textDecoration:'none'}}><p>View All</p></Link>
        </div>
  </div>
  );
}

export default Conversation;
