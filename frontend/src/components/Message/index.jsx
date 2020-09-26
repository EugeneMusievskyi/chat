import React from "react";
import moment from 'moment';
import styles from "./styles.module.sass"
import {Comment, Dropdown} from "semantic-ui-react";

const Message = ({ message }) => {
    const createdAt = moment(message.createdAt).utc();
    const time = createdAt !== undefined ? createdAt.format("HH:mm") : null;

    return (
        <Comment className={styles.message}>
            <Comment.Avatar className={styles.messageAvatar} src={message.avatar} />
            <Comment.Content>
                <Comment.Author>
                    {message.user}
                    <Comment.Metadata>
                        {time}
                    </Comment.Metadata>
                    <Dropdown className={styles.rightFloat} pointing="top right" icon="ellipsis vertical">
                        <Dropdown.Menu>
                            <Dropdown.Item icon="item edit" text="Edit" />
                            <Dropdown.Item icon="item delete" text="Delete" />
                        </Dropdown.Menu>
                    </Dropdown>
                </Comment.Author>
                <Comment.Text className={styles.messageText}>
                    {message.body}
                </Comment.Text>
                {/*<div className={`${styles.like} ${liked}`} onClick={() => this.setIsLiked()}>
                                 <i className="like icon" />
                </div>*/}
            </Comment.Content>
        </Comment>
    );
};

export default Message;
