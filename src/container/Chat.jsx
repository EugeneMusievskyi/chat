import * as React from "react";
import Header from "../components/Header";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";

class Chat extends React.Component {
    render() {
        return (
            <div className="chat">
              <Header messages={this.props.messages} />
              <MessageList messages={this.props.messages} />
              <MessageInput />
            </div>
        );
    }
}

export default Chat;
