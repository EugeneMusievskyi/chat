import React, {useState} from "react";
import {Form} from "semantic-ui-react";
import {connect} from "react-redux";
import {editMessageRoutine} from "../../sagas/chat/routines";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.sass"

const EditedMessage = ({ editedMessage, editMessage }) => {
    const [body, setBody] = useState(editedMessage.text);
    const history = useHistory();

    const handleEditMessage = () => {
        editedMessage.body = body;
        editMessage(editedMessage);
        history.push("/");
    };

    const onCancel = () => {
        history.push("/");
    };

    return (
        <Form className={styles.editMessage}>
            <div className={styles.header}>Edit message</div>
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
        editedMessage: state.chat.editedMessage
    }
};

const mapDispatchToProps = () => {
    return {
        editMessage: editMessageRoutine
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditedMessage);
