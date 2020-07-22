import React from "react";

class MessageInput extends React.Component {
    render() {
        return (
            <div id="inputMessage" className="ui form">
              <div className="field">
                <textarea rows="6" placeholder="Write your message..."/>
              </div>
              <button className="ui primary button right floated" type="submit">
                  Send
              </button>
            </div>
        );
    }
}

export default MessageInput;
