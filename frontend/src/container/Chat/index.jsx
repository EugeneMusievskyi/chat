import * as React from "react";
import Header from "../../components/Header";
import MessageList from "../../components/MessageList";
import MessageInput from "../../components/MessageInput";
import {connect} from "react-redux";
import {loadAllUsersRoutine} from "../../sagas/users/routines";
import {useEffect} from "react";
import {
    addMessageRoutine,
    deleteMessageRoutine,
    editMessageRoutine,
    loadMessagesRoutine, setEditedMessageRoutine
} from "../../sagas/chat/routines";
import styles from "./styles.module.sass";
import {useState} from "react";

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
        useEffect(() => {
            loadMessages();
        }, [loadMessages]);

        useEffect(() => {
            setBody(editedMessage ? editedMessage.body : "")
        }, [editedMessage]);

        const [body, setBody] = useState("");

        const handleSubmit = () => {
            if (!body)
                return;

            const submit = editedMessage ? editMessage : addMessage;
            submit({ body });
            setBody("");
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
                setEditedMessage(lastMessage);
            }
            if (e.ctrlKey && e.keyCode === 13) {
                handleSubmit();
            }
        };

        return (
            <div className={styles.chat} onKeyDown={handleKeyPress}>
              <Header messages={messages} />
              <MessageList messages={messages} setEditedMessage={setEditedMessage}
                           deleteMessage={deleteMessage} keyDown={handleKeyPress} />
              <MessageInput
                  value={body}
                  onChange={e => setBody(e.target.value)}
                  onSubmit={handleSubmit}
                  onCancel={editedMessage
                      ? () => setEditedMessage(null)
                      : () => setBody("")
                  }
              />
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
    deleteMessage: deleteMessageRoutine,
    setEditedMessage: setEditedMessageRoutine
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
