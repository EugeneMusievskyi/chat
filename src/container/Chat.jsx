import * as React from "react";
import Header from "../components/Header";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";
import { v4 as uuidv4 } from 'uuid';
import {currentUser} from "../index";
import moment from "moment";

class Chat extends React.Component {
    constructor(props) {
        super(props);
       this.state = { messages: props.messages };
    }

    addMessage(messageText) {
        const message = {
            id: uuidv4(),
            userId: currentUser.userId,
            user: currentUser.user,
            text: messageText,
            createdAt: moment.now(),
            updatedAt: ""
        };

        const messages =  this.state.messages;
        messages.push(message);
        this.setState({ ...this.state, messages: messages })
    };

    render() {
        return (
            <div className="chat">
              <Header messages={this.state.messages} />
              <MessageList messages={this.state.messages} />
              <MessageInput messages={this.state.messages} addMessage={messageText => this.addMessage(messageText)}/>
            </div>
        );
    }
}

export default Chat;
