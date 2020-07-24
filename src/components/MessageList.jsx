import React from "react";
import Message from "./Message";
import moment from "moment";
import DateDivider from "./DateDivider";
import {currentUser} from "../index";
import UserMessage from "./UserMessage";

class MessageList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.messagesEndRef.scrollIntoView({behavior: 'smooth'});
    };

    mapMessages = (messages) => {
        let previousDate;

        return messages.map(message => {
            let currentDate = moment(message.createdAt).format();
            let dividerLine;
            if (moment(currentDate).isAfter(previousDate, "day") || previousDate === undefined) {
                dividerLine = <DateDivider date={currentDate} />;
                previousDate = currentDate;
            }

            const mappedMessage = currentUser.userId === message.userId ?
                <UserMessage message={message}
                             onUpdateMessage={this.props.updateMessage}
                             onDeleteMessage={this.props.deleteMessage}
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


    render() {
        return (
            <div className="messageList" onLoad={() => this.scrollToBottom}>
                {this.mapMessages(this.props.messages)}
                <div ref={messagesEndRef => {
                    this.messagesEndRef = messagesEndRef
                }} />
            </div>
        );
    }
}

export default MessageList;
