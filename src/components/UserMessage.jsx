import React from "react";
import moment from "moment";
import UpdateMessageInput from "./UpdateMessageInput";

class UserMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { updateMessage: false };
        this.handleUpdateMessage = this.handleUpdateMessage.bind(this);
        this.handleDeleteMessage = this.handleDeleteMessage.bind(this);
        this.setEditMessage = this.setEditMessage.bind(this);
    }

    handleDeleteMessage() {
        this.props.onDeleteMessage(this.props.message);
    }

    setEditMessage() {
        this.setState({...this.state, editMessage: !this.state.editMessage});
    }

    handleUpdateMessage(text) {
        const message = { ...this.props.message, text};
        this.props.onUpdateMessage(message);
        this.setEditMessage();
    }

    render() {
        const message = this.props.message;
        const createdAt = moment(message.createdAt).utc();
        const time = createdAt !== undefined ? createdAt.format("HH:mm") : null;

        return (
            <div className="ui message currentUserMessage">
                <div className="item" onClick={this.setEditMessage}><i className="edit icon" />Edit</div>
                <div className="item" onClick={this.handleDeleteMessage}><i className="delete icon" />Delete</div>
              <div className="createdAt">
                  {time}
              </div>
              <div className="content">
                  {this.state.editMessage ? <UpdateMessageInput initialText={message.text} onUpdateMessage={this.handleUpdateMessage} /> : message.text}
              </div>
            </div>
        );
    }
}

export default UserMessage;
