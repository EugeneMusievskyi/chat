import React from "react";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: props.message }
    }

    render() {
        return (
            <div className="ui message">
              <img className="ui avatar image tiny rounded" src={this.props.message.avatar} />
              <span className="content top aligned">
                  {this.state.message.text}
              </span>
            </div>
        );
    }

    /*render() {
        return (
            <div className="message">
                <div className="ui card">
                  <img className="ui small image left" src={this.props.message.avatar} />
                  <div className="content right">
                    <div className="description">
                      <p>{this.state.message.text}</p>
                    </div>
                  </div>
                  <div className="extra content">
                    <span className="right floated like">
                      <i className="like icon" />
                    </span>
                  </div>
                </div>
            </div>
        );
    };*/
}

export default Message;
