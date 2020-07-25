import React from "react";

class EditedMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {body: this.props.message.text};
        this.handleUpdateMessage = this.handleUpdateMessage.bind(this);
        this.setBody = this.setBody.bind(this);
    }

    setBody(e) {
        this.setState({...this.state, body: e.target.value});
    }

    handleUpdateMessage() {
        if (!this.state.body)
            return;

        const message = {
            ...this.props.message,
            text: this.state.body
        };
        this.props.updateMessage(message);
        this.props.setEditedMessage(null);
    }

    render() {
        return (
            <div className="ui page modals dimmer visible active">
                {/*<div className="ui modal transition visible active">*/}
                <div className="ui modal active" >
                    <div className="header">
                      Update message
                    </div>
                    <div className="content">
                        <div id="inputMessage" className="ui form">
                            <div className="field">
                                <textarea rows="6" placeholder="Write your message..."
                                          value={this.state.body}
                                          onChange={this.setBody} />
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="ui button" onClick={() => this.props.setEditedMessage(null)}>Cancel</div>
                        <div className="ui blue button" onClick={this.handleUpdateMessage}>Send</div>
                    </div>
                </div>
             </div>
        );

    }
}

export default EditedMessage;
