import React from "react";
import Message from "./Message";

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: props.messages }
    }

    render() {
        return (
            <div className="messageList">
                {this.state.messages.map(message => (
                    <Message message={message} />
                ))}
            </div>
        );
    }
}

export default MessageList
