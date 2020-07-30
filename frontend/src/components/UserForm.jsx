import React from "react";
import {Button, Segment} from 'semantic-ui-react'

const UserSegment = ({ user }) => {
    return (
        <Segment>
            <div className="userForm">
                <div className="username">
                    user.username
                </div>
                <div className="buttons">
                    <Button primary>Edit</Button>
                    <Button secondary>Delete</Button>
                </div>
            </div>
        </Segment>
    )
};

export default UserSegment;
