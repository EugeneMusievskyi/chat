import * as React from "react";
import Header from "../../components/Header";
import MessageList from "../../components/MessageList";
import MessageInput from "../../components/MessageInput";
import * as actions from "./actions";
import {connect} from "react-redux";
import {v4 as uuidv4} from "uuid";
import moment from "moment";
import EditedMessage from "../../components/EditedMessage";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddMessage = this.handleAddMessage.bind(this);
        this.handleUpdateMessage = this.handleUpdateMessage.bind(this);
        this.handleDeleteMessage = this.handleDeleteMessage.bind(this);
        this.setEditedMessage = this.setEditedMessage.bind(this);
    }

    handleAddMessage(messageText) {
        const message = {
            id: uuidv4(),
            userId: this.props.profile.userId,
            user: this.props.profile.user,
            text: messageText,
            createdAt: moment().utc().add(3, "hours"),
            updatedAt: ""
        };

        this.props.addMessage(message);
    }

    handleUpdateMessage(message) {
        this.props.updateMessage(message);
    }

    handleDeleteMessage(message) {
        this.props.deleteMessage(message);
    }

    setEditedMessage(message) {
        this.props.setEditedMessage(message);
    }

    render() {
        const messages = this.props.messages;
        const editedMessage = this.props.editedMessage;

        return (
            <div className="chat">
              <Header messages={messages} />
              <MessageList messages={messages} setEditedMessage={this.setEditedMessage} deleteMessage={this.handleDeleteMessage} />
              <MessageInput addMessage={this.handleAddMessage} />
              {editedMessage && <EditedMessage message={editedMessage} updateMessage={this.handleUpdateMessage}
                    setEditedMessage={this.setEditedMessage} />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages: state.chat.messages,
        profile: state.chat.profile,
        editedMessage: state.chat.editedMessage
    }
};

const mapDispatchToProps = {
    ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
