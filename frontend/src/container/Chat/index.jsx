import * as React from "react";
import Header from "../../components/Header";
import MessageList from "../../components/MessageList";
import MessageInput from "../../components/MessageInput";
import * as actions from "./actions";
import {connect} from "react-redux";
import {v4 as uuidv4} from "uuid";
import moment from "moment";
import EditedMessage from "../../components/EditedMessage";

const Chat = ({
    user,
    messages,
    editedMessage,
    loadMessages,
    addMessage,
    editMessage,
    deleteMessage,
    setEditedMessage
}) => {

    const handleAddMessage = (messageText) => {
        const message = {
            id: uuidv4(),
            userId: user.userId,
            user,
            text: messageText,
            createdAt: moment().utc().add(3, "hours"),
            updatedAt: ""
        };

        addMessage(message);
    };

    const handleEditMessage = (message) => {
        editMessage(message);
    };

    const handleDeleteMessage = (message) => {
        deleteMessage(message);
    };

    const handleKeyPress = (e) => {
        if (e.key === "ArrowUp") {
            const messages = this.props.messages;
            let lastMessage = null;
            for (let i = messages.length - 1; i >= 0; i--) {
                if (messages[i].userId === user.userId) {
                    lastMessage = messages[i];
                    break;
                }
            }
            setEditedMessage(lastMessage);
        }
    };

    if (!messages) {
        loadMessages();
        // return null;
    }

    return (
        <div className="chat" onKeyDown={handleKeyPress}>
              <Header messages={messages} />
              <MessageList messages={messages} setEditedMessage={setEditedMessage}
                           deleteMessage={handleDeleteMessage} keyDown={handleKeyPress} />
              <MessageInput addMessage={handleAddMessage} />
            {editedMessage && <EditedMessage message={editedMessage} editMessage={handleEditMessage}
                                             setEditedMessage={setEditedMessage} />}
            </div>
    );
};

const mapStateToProps = state => {
    return {
        messages: state.chat.messages,
        user: state.profile.user,
        editedMessage: state.chat.editedMessage
    }
};

const mapDispatchToProps = {
    ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
