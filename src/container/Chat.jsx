import * as React from "react";
import Header from "../components/Header";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";
import {v4 as uuidv4} from 'uuid';
import {currentUser} from "../index";
import moment from "moment";
import ReactDOM from 'react-dom';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages: props.messages};
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

    render() {
        return (
            <div className="chat">
              <Header messages={this.props.messages} />
              <MessageList messages={this.props.messages} deleteMessage={() => this.deleteMessage} />
              <MessageInput addMessage={m => this.addMessage(m)} />
            </div>
        );
    }
}

export default Chat;
