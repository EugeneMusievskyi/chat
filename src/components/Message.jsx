import React from "react";
import moment from 'moment';

class Message extends React.Component {
    render() {
        const createdAt = moment(this.props.message.createdAt).utc();
        const time = createdAt !== undefined ? createdAt.format("HH:mm") : null;

        return (
            <div className="ui message">
              <div className="createdAt">
                  {time}
              </div>
              <img className="ui avatar image tiny rounded" src={this.props.message.avatar} />
              <div className="content">
                  {this.props.message.text}
              </div>
              <i className="like icon" />
            </div>
        );
    }
}

export default Message;
