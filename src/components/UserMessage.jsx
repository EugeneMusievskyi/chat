import React from "react";
import moment from "moment";

class UserMessage extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteMessage = this.handleDeleteMessage.bind(this);
        this.handleSetEditedMessage = this.handleSetEditedMessage.bind(this);
    }

    handleDeleteMessage() {
        this.props.onDeleteMessage(this.props.message);
    }

    handleSetEditedMessage() {
        this.props.onEditMessage(this.props.message);
    }

    render() {
        const message = this.props.message;
        const createdAt = moment(message.createdAt).utc();
        const time = createdAt !== undefined ? createdAt.format("HH:mm") : null;

        return (
            <div className="ui message currentUserMessage">
                <div className="item" onClick={this.handleSetEditedMessage}><i className="edit icon" />Edit</div>
                <div className="item" onClick={this.handleDeleteMessage}><i className="delete icon" />Delete</div>
              <div className="createdAt">
                  {time}
              </div>
              <div className="content">
                  {message.text}
              </div>
            </div>
        );
    }
}

export default UserMessage;
