import React from "react";
import styles from "./styles.module.sass"
import {Button} from "semantic-ui-react";

const MessageInput = ({ value, onChange, onSubmit, onCancel }) => {
    return (
        <div className={`ui form ${styles.inputMessage}`}>
            <div>
                <textarea rows="6" placeholder="Write your message..." value={value}
                          onChange={onChange} />
            </div>
            <div className={styles.actionButtons}>
                <Button color={"grey"} type="button" onClick={onCancel}>
                    Cancel
                </Button>
                <Button primary type="button" onClick={onSubmit}>
                    Send
                </Button>
            </div>
        </div>
    );
};

export default MessageInput;
