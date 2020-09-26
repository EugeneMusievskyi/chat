import React from "react";
import moment from "moment";
import {Item} from "semantic-ui-react";

const UserMessage = ({ message, onDeleteMessage, onEditMessage }) => {
    const handleDeleteMessage = () => {
        onDeleteMessage(message);
    };

    const handleSetEditedMessage = () => {
        onEditMessage(message);
    };

    const createdAt = moment(message.createdAt).utc();
    const time = createdAt !== undefined ? createdAt.format("HH:mm") : null;

    return (
        <Item className="currentUserMessage">
            <div className="item edit" onClick={handleSetEditedMessage}><i className="cog icon"/></div>
            <div className="item delete" onClick={handleDeleteMessage}><i className="delete icon" /></div>
            <div className="createdAt">
                {time}
            </div>
            <Item.Content className="content">
                {message.body}
            </Item.Content>
        </Item>
    );
};

export default UserMessage;
