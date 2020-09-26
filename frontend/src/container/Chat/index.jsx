import * as React from "react";
import Header from "../../components/Header";
import MessageList from "../../components/MessageList";
import MessageInput from "../../components/MessageInput";
import {connect} from "react-redux";
import EditedMessage from "../../components/EditedMessage";
import {loadAllUsersRoutine} from "../../sagas/users/routines";
import {useEffect} from "react";
import {
    addMessageRoutine,
    deleteMessageRoutine,
    editMessageRoutine,
    loadMessagesRoutine
} from "../../sagas/chat/routines";
import styles from "./styles.module.sass";

const Chat = ({
         history,
         user,
         messages,
         editedMessage,
         loadMessages,
         addMessage,
         editMessage,
         deleteMessage,
         setEditedMessage
}) => {
        useEffect(() => {
            loadMessages();
        }, [loadMessages]);

        const handleAddMessage = (messageText) => {
            addMessage(messageText);
        };

        const handleEditMessage = (message) => {
            editMessage(message);
        };

        const handleSetEditedMessage = (id) => {
            history.push(`/edit/:${id}`);
        };

        const handleDeleteMessage = (message) => {
            deleteMessage(message);
        };

        const handleKeyPress = (e) => {
            if (e.key === "ArrowUp") {
                let lastMessage;
                for (let i = messages.length - 1; i >= 0; i--) {
                    if (messages[i].userId === user.id) {
                        lastMessage = messages[i];
                        break;
                    }
                }
                handleSetEditedMessage(lastMessage.id);
            }
        };

        return (
            <div className={styles.chat} onKeyDown={handleKeyPress}>
              {/*<Button color="green" className="switch-users" onClick={handleSwitchUsers}>Users</Button>*/}
              <Header messages={messages} />
              <MessageList messages={messages} setEditedMessage={handleSetEditedMessage}
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
    loadAllUsers: loadAllUsersRoutine,
    loadMessages: loadMessagesRoutine,
    addMessage: addMessageRoutine,
    editMessage: editMessageRoutine,
    deleteMessage: deleteMessageRoutine
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
