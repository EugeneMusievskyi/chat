import * as React from "react";
import Header from "../components/Header";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";
import {v4 as uuidv4} from 'uuid';
import {currentUser} from "../index";
import moment from "moment";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages: props.messages};
        this.addMessage = this.addMessage.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
    }

    addMessage(messageText) {
        const message = {
            id: uuidv4(),
            userId: currentUser.userId,
            user: currentUser.user,
            text: messageText,
            createdAt: moment().utc().add(3, "hours"),
            updatedAt: ""
        };

        const messages = this.state.messages;
        messages.push(message);
        this.setState({...this.state, messages: messages});
    };

    deleteMessage(message) {
        const updatedMessages = this.state.messages.filter(m => m.id !== message.id);
        this.setState({ ...this.state, messages: updatedMessages });
    }

    render() {
        const messages = this.state.messages;

        return (
            <div className="chat">
              <Header messages={messages} />
              <MessageList messages={messages} onDeleteMessage={this.deleteMessage} />
              <MessageInput addMessage={this.addMessage} />
            </div>
        );
    }
}

export default Chat;
