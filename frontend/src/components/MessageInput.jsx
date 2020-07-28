import React from "react";

class MessageInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {body: ""};
    }

    handleChangeBody(ev) {
        this.setState({...this.state, body: ev.target.value});
    }

    handleSubmit() {
        if (!this.state.body)
            return;

        this.props.addMessage(this.state.body);
        this.setState({...this.state, body: ""});
    }

    render() {
        return (
            <div id="inputMessage" className="ui form">
                <div className="field">
                    <textarea rows="6" placeholder="Write your message..." value={this.state.body}
                              onChange={(ev) => this.handleChangeBody(ev)} />
                </div>
                <button className="ui primary button right floated" type="button" onClick={(() => this.handleSubmit())}>
                      Send
                </button>
            </div>
        );
    }
}

export default MessageInput;
