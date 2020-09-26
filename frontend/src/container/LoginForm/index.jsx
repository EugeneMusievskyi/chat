import React, {useState} from 'react'
import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react'
import {connect} from "react-redux";
import {compose} from "redux";
import { useHistory } from "react-router-dom";
import {loginRoutine} from "../../sagas/auth/routines";

const LoginForm = ({ login }) => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!username || !password)
            return;

        const userLogin = { username, password };

        login(userLogin);
        history.push("/");
    };

    return (
        <Grid textAlign="center" style={{height: '100vh'}} verticalAlign="middle">
          <Grid.Column style={{maxWidth: 450}}>
            <Header as="h2" color="teal" textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large" onSubmit={handleLogin}>
              <Segment stacked>
                <Form.Input fluid icon="user" iconPosition="left"
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                />
                <Form.Input fluid icon="lock" iconPosition="left"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                />

                <Button color="teal" fluid size="large" type="submit">
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
    )
};

const mapDispatchToProps = {
  login: loginRoutine
};

export default compose(
    connect(null, mapDispatchToProps)
)(LoginForm);
