import React from "react";
import moment from 'moment';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLiked: false};
        this.setIsLiked = this.setIsLiked.bind(this);
        this.handleSetEditedMessage = this.handleSetEditedMessage.bind(this);
    }

    setIsLiked() {
        this.setState({...this.state, isLiked: !this.state.isLiked});
    }

    handleSetEditedMessage() {
        this.props.onEditMessage(this.props.message);
    }

    render() {
        const createdAt = moment(this.props.message.createdAt).utc();
        const time = createdAt !== undefined ? createdAt.format("HH:mm") : null;
        const liked = this.state.isLiked ? "liked" : "";

        return (
            <div className="ui message">
              <div className="createdAt">
                  {time}
              </div>
              <img className="ui avatar image tiny rounded" src={this.props.message.avatar} />
              <div className="content">
                  {this.props.message.text}
              </div>
                <span className="item edit" onClick={this.handleSetEditedMessage}><i className="cog icon"/></span>
                <div className={"like " + liked} onClick={() => this.setIsLiked()}>
                    <i className="like icon" />
                </div>
            </div>
        );
    }
}

export default Message;
