import React, {useState} from 'react'
import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react'
import {login} from "../../Profile/actions";
import {connect} from "react-redux";

const LoginForm = ({ login }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!username || !password)
            return;

        login({ username, password });
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
  login
};

export default connect(null, mapDispatchToProps)(LoginForm);
