import React from 'react'

class CommentBox extends React.Component {
  constructor(props) {
    supre(props);
  }

  render() {
    return(
        <div className='commentBox'>
          Hello, world! I am a CommentBox.
        </div>
        );
  }
}

React.render(
    <CommentBox />,
    document.getElementById('container')
);
