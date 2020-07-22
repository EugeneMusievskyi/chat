import React from "react";
import Message from "./Message";
import moment from "moment";
import DateDivider from "./DateDivider";

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: props.messages }
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.messagesEndRef.scrollIntoView({ behavior: 'smooth' });
    };



    render() {
        let previousDate;

        return (
            <div className="messageList" onLoad={() => this.scrollToBottom}>
                {this.state.messages.map(message => {
                    let currentDate = moment(message.createdAt).format();
                    let dividerLine;
                    if (moment(currentDate).isAfter(previousDate, "day") || previousDate === undefined) {
                        dividerLine = <DateDivider date={currentDate} />;
                        previousDate = currentDate;
                    }
                    return (
                        <div>
                            {dividerLine}
                            <Message message = {message} />
                        </div>
                    );
                })}
                <div ref={messagesEndRef => { this.messagesEndRef = messagesEndRef }} />
            </div>
        );
    }
}

export default MessageList;
