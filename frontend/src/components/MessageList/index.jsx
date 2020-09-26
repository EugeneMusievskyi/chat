import React from "react";
import Message from "../Message";
import moment from "moment";
import DateDivider from "../DateDivider";
import {connect} from "react-redux";
import {deleteMessageRoutine, editMessageRoutine, setEditedMessageRoutine} from "../../sagas/chat/routines";
import styles from "./styles.module.sass";
import {CommentGroup} from "semantic-ui-react";

const MessageList = ({ user, messages, setEditedMessage, deleteMessage }) => {
    const mapMessages = (messages) => {
        let previousDate;

        return messages?.map(message => {
            let currentDate = moment(message.createdAt).format();
            let dividerLine;
            if (moment(currentDate).isAfter(previousDate, "day") || previousDate === undefined) {
                dividerLine = <DateDivider date={currentDate} />;
                previousDate = currentDate;
            }

            const mappedMessage = user?.id === message.userId ?
                <Message
                    message={message}
                    onEditMessage={setEditedMessage}
                    onDeleteMessage={deleteMessage}
                    currentUser
                />
                : <Message message={message} />;

            return (
                <div>
                    {dividerLine}
                    {mappedMessage}
                </div>
            );
        })
    };


    return (
        <>
            <CommentGroup size="large" className={styles.messageList}>
                {mapMessages(messages)}
                <div ref={messagesEndRef => {
                    // this.messagesEndRef = messagesEndRef
                }} />
            </CommentGroup>
        </>
    );
};

const mapStateToProps = state => {
    return {
        messages: state.chat.messages,
        editedMessage: state.chat.editedMessage,
        user: state.profile.user
    }
};

const mapDispatchToProps = {
    setEditedMessage: setEditedMessageRoutine,
    editMessage: editMessageRoutine,
    deleteMessage: deleteMessageRoutine
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
