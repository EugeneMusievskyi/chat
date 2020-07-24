import React from "react";

class UpdateMessageInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: this.props.initialText};
        this.setBody = this.setBody.bind(this);
        this.handleUpdateMessage = this.handleUpdateMessage.bind(this);
    }

    setBody(e) {
        this.setState({...this.state, body: e.target.value});
    }

    handleUpdateMessage() {
        this.props.onUpdateMessage(this.state.body);
    }

    render() {
        return (
            <div className="ui input updateMessageInput">
              <input type="text" value={this.state.body} onChange={this.setBody} />
              <button className="ui right icon button" onClick={this.handleUpdateMessage}>
                <i className="right arrow icon" />
              </button>
            </div>
        );
    }
}

export default UpdateMessageInput;
