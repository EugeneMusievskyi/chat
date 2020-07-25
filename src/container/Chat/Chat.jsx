import * as React from "react";
import Header from "../../components/Header";
import MessageList from "../../components/MessageList";
import MessageInput from "../../components/MessageInput";
import * as actions from "./actions";
import {connect} from "react-redux";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddMessage = this.handleAddMessage.bind(this);
        this.handleUpdateMessage = this.handleUpdateMessage.bind(this);
        this.handleDeleteMessage = this.handleDeleteMessage.bind(this);
    }

    /*addMessage(messageText) {
        const message = {
            id: uuidv4(),
            userId: this.props.currentUser.userId,
            user: this.props.currentUser.user,
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

    updateMessage(message) {
        const updatedMessages = this.state.messages.map(m => m.id === message.id ? message : m);
        this.setState({ ...this.state, messages: updatedMessages });
    }*/

    handleAddMessage(messageText) {
        this.props.addMessage(messageText);
    }

    handleUpdateMessage(message) {
        this.props.updateMessage(message);
    }

    handleDeleteMessage(message) {
        this.props.deleteMessage(message);
    }

    render() {
        const messages = this.props.messages;

        return (
            <div className="chat">
              <Header messages={messages} />
              <MessageList messages={messages} updateMessage={this.handleUpdateMessage} deleteMessage={this.handleAddMessage} />
              <MessageInput addMessage={this.handleAddMessage} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages: state.chat.messages
    }
};

const mapDispatchToProps = {
    ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
