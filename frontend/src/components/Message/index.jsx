import React from "react";
import moment from 'moment';
import styles from "./styles.module.sass"
import {Comment, Dropdown} from "semantic-ui-react";

const Message = ({ message, onEditMessage, onDeleteMessage, currentUser }) => {
    const createdAt = moment(message.createdAt).utc();
    const time = createdAt !== undefined ? createdAt.format("HH:mm") : null;

    return (
        <Comment className={`${styles.message} ${currentUser && styles.currentUserMessage}`}>
            <Comment.Avatar className={styles.messageAvatar} src={message.avatar} />
            <Comment.Content>
                <Comment.Author>
                    {message.user}
                    <Comment.Metadata>
                        {time}
                    </Comment.Metadata>
                    {currentUser &&
                        <Dropdown className={styles.rightFloat} pointing="right" icon="ellipsis vertical">
                            <Dropdown.Menu>
                                <Dropdown.Item icon="edit" text="Edit" onClick={() => onEditMessage(message)} />
                                <Dropdown.Item icon="delete" text="Delete" onClick={() => onDeleteMessage(message)} />
                            </Dropdown.Menu>
                        </Dropdown>
                    }
                </Comment.Author>
                <Comment.Text className={styles.messageText}>
                    {message.body}
                </Comment.Text>
            </Comment.Content>
        </Comment>
    );
};

export default Message;
