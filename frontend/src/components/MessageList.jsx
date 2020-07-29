import React from "react";
import Message from "./Message";
import moment from "moment";
import DateDivider from "./DateDivider";
import UserMessage from "./UserMessage";
import {connect} from "react-redux";

class MessageList extends React.Component {
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

        if (!messages) {
            return null;
        }

        return messages.map(message => {
            let currentDate = moment(message.createdAt).format();
            let dividerLine;
            if (moment(currentDate).isAfter(previousDate, "day") || previousDate === undefined) {
                dividerLine = <DateDivider date={currentDate} />;
                previousDate = currentDate;
            }

            const mappedMessage = this.props.user.userId === message.userId ?
                <UserMessage message={message}
                             onEditMessage={this.props.setEditedMessage}
                             onDeleteMessage={this.props.deleteMessage}
                />
                : <Message message={message} onEditMessage={this.props.setEditedMessage} />;

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

const mapStateToProps = state => {
    return {
        user: state.profile.user
    }
};

export default connect(mapStateToProps)(MessageList);
