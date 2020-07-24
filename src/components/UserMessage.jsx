import React, {useState} from "react";
import moment from "moment";

class UserMessage extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteMessage = this.handleDeleteMessage.bind(this);
    }

    handleDeleteMessage(message) {
        this.props.onDeleteMessage(message);
    }

    render() {
        const message = this.props.message;
        const createdAt = moment(this.props.message.createdAt).utc();
        const time = createdAt !== undefined ? createdAt.format("HH:mm") : null;

        return (
            <div className="ui message currentUserMessage">
                <div className="item"><i className="edit icon"/>Edit</div>
                <div className="item" onClick={() => this.handleDeleteMessage(message)}><i className="delete icon"/>Delete</div>
              <div className="createdAt">
                  {time}
              </div>
              <div className="content">
                  {this.props.message.text}
              </div>
            </div>
        );
    }
}

export default UserMessage;
