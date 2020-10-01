import * as React from "react";
import Header from "../../components/Header";
import MessageList from "../../components/MessageList";
import MessageInput from "../../components/MessageInput";
import {connect} from "react-redux";
import {loadAllUsersRoutine} from "../../sagas/users/routines";
import {useEffect} from "react";
import {
    addMessageRoutine, addMessageToStateRoutine, deleteMessageFromStateRoutine,
    deleteMessageRoutine,
    editMessageRoutine, editMessageStateRoutine,
    loadMessagesRoutine, setEditedMessageRoutine
} from "../../sagas/messages/routines";
import styles from "./styles.module.sass";
import {useState} from "react";
import {useStomp} from "../../helpers/websocket.helper";
import {useRef} from "react";
import {loadChatInfoRoutine} from "../../sagas/chatInfo/routines";

const Chat = ({
     user,
     messages,
     editedMessage,
     loadMessages,
     loadChatInfo,
     addMessage,
     addMessageToState,
     editMessage,
     editMessageState,
     deleteMessage,
     deleteMessageFromState,
     setEditedMessage,
     isMessagesLoading
}) => {
        useEffect(loadMessages, [loadMessages]);
        useEffect(loadChatInfo, [loadChatInfo]);

        useEffect(() => {
            setBody(editedMessage ? editedMessage.body : "")
        }, [editedMessage]);

        useStomp("addMessage", addMessageToState);
        useStomp("updateMessage", editMessageState);
        useStomp("deleteMessage", deleteMessageFromState);

        const [body, setBody] = useState("");

        const messagesEndRef = useRef();
        const scrollToBottom = (behavior) => {
            messagesEndRef.current.scrollIntoView({ behavior })
        };

        const [isMessagesLoaded, setMessagesLoaded] = useState(false);
        // const [isSubmit, setSubmit] = useState(false);
        // const [messagesLength, setMessagesLength] = useState(0);
        useEffect(() => {
            if (messages && !isMessagesLoaded) {
                scrollToBottom();
                setMessagesLoaded(true);
            }
        }, [messagesEndRef, messages, isMessagesLoaded]);

        /*useEffect(() => {
            if (isSubmit && messages.length > messagesLength) {
                scrollToBottom();
                setSubmit(false);
                setMessagesLength(messages.length);
            }
        }, [isSubmit, messages, messagesLength] );*/

        const handleSubmit = () => {
            if (!body)
                return;

            const submit = editedMessage ? editMessage : addMessage;
            submit({ body });
            setBody("");
            scrollToBottom("smooth")
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
              <MessageList
                  user={user}
                  messages={messages}
                  setEditedMessage={setEditedMessage}
                  deleteMessage={deleteMessage}
                  messagesEndRef={messagesEndRef}
                  isLoading={isMessagesLoading}
              />
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
        isMessagesLoading: state.chat.isLoading,
        user: state.profile.user,
        editedMessage: state.chat.editedMessage
    }
};

const mapDispatchToProps = {
    loadAllUsers: loadAllUsersRoutine,
    loadMessages: loadMessagesRoutine,
    loadChatInfo: loadChatInfoRoutine,
    addMessage: addMessageRoutine,
    addMessageToState: addMessageToStateRoutine,
    editMessage: editMessageRoutine,
    editMessageState: editMessageStateRoutine,
    deleteMessage: deleteMessageRoutine,
    deleteMessageFromState: deleteMessageFromStateRoutine,
    setEditedMessage: setEditedMessageRoutine
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
