import * as React from "react";
import Header from "../../components/Header";
import MessageList from "../../components/MessageList";
import MessageInput from "../../components/MessageInput";
import * as actions from "./actions";
import {connect} from "react-redux";
import {v4 as uuidv4} from "uuid";
import moment from "moment";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddMessage = this.handleAddMessage.bind(this);
        this.handleUpdateMessage = this.handleUpdateMessage.bind(this);
        this.handleDeleteMessage = this.handleDeleteMessage.bind(this);
    }

    handleAddMessage(messageText) {
        const message = {
            id: uuidv4(),
            userId: this.props.profile.userId,
            user: this.props.profile.user,
            text: messageText,
            createdAt: moment().utc().add(3, "hours"),
            updatedAt: ""
        };

        this.props.addMessage(message);
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
              <MessageList messages={messages} updateMessage={this.handleUpdateMessage} deleteMessage={this.handleDeleteMessage} />
              <MessageInput addMessage={this.handleAddMessage} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages: state.chat.messages,
        profile: state.chat.profile
    }
};

const mapDispatchToProps = {
    ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
