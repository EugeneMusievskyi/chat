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
        this.handleEditMessage = this.handleEditMessage.bind(this);
        this.handleDeleteMessage = this.handleDeleteMessage.bind(this);
        this.setEditedMessage = this.setEditedMessage.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
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

    handleEditMessage(message) {
        this.props.editMessage(message);
    }

    handleDeleteMessage(message) {
        this.props.deleteMessage(message);
    }

    setEditedMessage(message) {
        this.props.setEditedMessage(message);
    }

    handleKeyPress(e) {
        if (e.key === "ArrowUp") {
            const messages = this.props.messages;
            let lastMessage = null;
            for (let i = messages.length - 1; i >= 0; i--) {
                if (messages[i].userId === this.props.profile.userId) {
                    lastMessage = messages[i];
                    break;
                }
            }
            this.props.setEditedMessage(lastMessage);
        }
    };

    render() {
        const messages = this.props.messages;
        const editedMessage = this.props.editedMessage;

        return (
            <div className="chat" onKeyDown={this.handleKeyPress}>
              <Header messages={messages} />
              <MessageList messages={messages} setEditedMessage={this.setEditedMessage} deleteMessage={this.handleDeleteMessage} keyDown={this.handleKeyPress} />
              <MessageInput addMessage={this.handleAddMessage} />
              {editedMessage && <EditedMessage message={editedMessage} editMessage={this.handleEditMessage}
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
