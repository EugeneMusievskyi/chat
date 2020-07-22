import React from "react";
import moment from "moment";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: props.messages }
    }

    render() {
        const messages = this.state.messages;
        return (
            <div className="ui block header">
             <h3>My Chat</h3>
             <h3>23 participants</h3>
             <h3>{messages?.length} messages</h3>
             <h3>last message at {moment.utc(messages[messages.length - 1].createdAt).format("HH:mm")}</h3>
            </div>
        );
    }
}

export default Header;
