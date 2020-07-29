import React from "react";
import {Dimmer} from "semantic-ui-react";

export const Loader = () => {
    return (
        <Dimmer active inverted>
            <Loader size="massive" inverted />
        </Dimmer>
    );
};

export default Loader;
