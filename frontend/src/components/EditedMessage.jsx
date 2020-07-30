import React, {useState} from "react";
import {Form} from "semantic-ui-react";
import {editMessage} from "../container/Chat/actions";
import {connect} from "react-redux";

const EditedMessage = ({ match, history, messages, editMessage }) => {
    const id = match.params.id.substring(1);
    const filteredMessages = messages.filter(mes => mes.id === id);
    const editedMessage = filteredMessages[0];

    const [body, setBody] = useState(editedMessage.text);

    const handleEditMessage = () => {
        editedMessage.text = body;
        editMessage(editedMessage);
        history.push("/");
    };

    const onCancel = () => {
        history.push("/");
    };

    return (
        <Form className="editMessage">
            <div className="header">Edit message</div>
                <div className="content">
                    <div id="inputMessage" className="ui form">
                        <div className="field">
                            <textarea rows="6" placeholder="Write your message..." value={body}
                                      onChange={e => setBody(e.target.value)} autoFocus={true} />
                        </div>
                    </div>
                </div>
            <div className="actions floating right">
                <div className="ui button" onClick={onCancel}>Cancel</div>
                <div className="ui blue button" onClick={handleEditMessage}>Send</div>
            </div>
        </Form>
    )
};

const mapStateToProps = state => {
    return {
        messages: state.chat.messages
    }
};

const mapDispatchToProps = () => {
    return {
        editMessage
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditedMessage);
