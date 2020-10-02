import React from "react";
import Message from "../Message";
import moment from "moment";
import DateDivider from "../DateDivider";
import styles from "./styles.module.sass";
import {CommentGroup, Loader} from "semantic-ui-react";

const MessageList = (
    {
        user,
        messages,
        setEditedMessage,
        deleteMessage,
        messagesEndRef,
        isLoading
    }) => {
    const mapMessages = (messages) => {
        let previousDate;
        let key = 0;

        return messages?.map(message => {
            let currentDate = moment(message.createdAt).format();
            let dividerLine;
            if (moment(currentDate).isAfter(previousDate, "day") || previousDate === undefined) {
                dividerLine = <DateDivider date={currentDate} />;
                previousDate = currentDate;
            }

            const mappedMessage = user?.id === message.userId
                ? <Message
                    message={message}
                    onEditMessage={setEditedMessage}
                    onDeleteMessage={deleteMessage}
                    currentUser
                />
                : <Message
                    message={message}
                />;

            return (
                <div key={++key}>
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
                <div ref={messagesEndRef}/>
                <Loader active={isLoading} />
            </CommentGroup>
        </>
    );
};

export default MessageList;
