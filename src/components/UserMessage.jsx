import React, {useState} from "react";
import moment from "moment";

class UserMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: props.message };
        // this.content = this.content.bind(this);
    }

    render() {
        const createdAt = moment(this.props.message.createdAt).utc();
        const time = createdAt !== undefined ? createdAt.format("HH:mm") : null;

        return (
            <div className="ui message currentUserMessage">
                <div className="item"><i className="edit icon"/>Edit</div>
                <div className="item" onClick={() => this.props.deleteMessage(this.props.message)}><i className="delete icon"/>Delete</div>
              <div className="createdAt">
                  {time}
              </div>
              <div className="content">
                  {this.props.message.text}
              </div>
            </div>
        );
    }
}

export default UserMessage;
