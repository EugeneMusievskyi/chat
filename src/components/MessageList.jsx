import React from "react";
import Message from "./Message";

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
        return (
            <div className="messageList" onLoad={() => this.scrollToBottom}>
                {this.state.messages.map(message => (
                    <Message message={message} />
                    ))}
                <div ref={messagesEndRef => { this.messagesEndRef = messagesEndRef }} />
            </div>
        );
    }
}

export default MessageList;
