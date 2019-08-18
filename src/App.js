import React from 'react';
import {PropTypes} from 'prop-types'

class Container extends React.Component {
  getChildContext() {
    return {
      color: 'blue',
      // size: '14px',
      // num: 100
    }
  }
  render() {
    return <MessageList messages = {this.props.messages} />
  }
}

Container.childContextTypes = {
  color: PropTypes.string
}


class MessageList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.messages.map((item, index) => {
            return <Message key={index} message={item} />
          })
        }
      </ul>  
    )
  }
  
}

class Message extends React.Component {
  render() {
    return <li style={{color: this.context.color}}>{this.props.message}</li>
  }
}
Message.contextTypes = {
  color: PropTypes.string
}

function App() {
  let messages = [1, 2, 3];
  return (
    <Container messages={messages} />
  );
}

export default App;
