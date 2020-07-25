import React from "react";
import {Modal} from "semantic-ui-react";

class EditedMessage extends React.Component {
    render() {
        return (
            <div className="ui page modals dimmer transition visible active">
                <div className="ui scrolling modal transition visible active">
                {/*    <div className="ui modal active" >*/}
                    <div className="header">
                      Update message
                    </div>
                    <div className="content">
                        <div id="inputMessage" className="ui form">
                            <div className="field">
                                <textarea rows="6" placeholder="Write your message..." />
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="ui button">Cancel</div>
                        <div className="ui blue button">Send</div>
                    </div>
                </div>
             </div>
        );

    }
}

export default EditedMessage;
