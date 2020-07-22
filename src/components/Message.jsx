import React from "react";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: props.message}
    }

    render() {
        return (
            <div className="ui message">
              <img className="ui avatar image tiny rounded" src={this.props.message.avatar} />
              <div className="content">
                  {this.state.message.text}
              </div>
              <i className="like icon" />
            </div>
        );
    }
}

export default Message;
