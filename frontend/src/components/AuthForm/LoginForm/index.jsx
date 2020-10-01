import React, {useEffect} from "react";
import {Form, Formik} from "formik";
import AuthField from "../AuthField/index";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import styles from "../styles.module.sass";
import {loginRoutine} from "../../../sagas/auth/routines";
import {connect} from "react-redux";
import { useHistory } from "react-router-dom";
import {Message} from "semantic-ui-react";

const loginValidationSchema = Yup.object({
    username: Yup.string()
        .required('Enter username'),
    password: Yup.string()
        .required('Enter password')
});

const LoginForm = ({ login, isLoginSuccess, error }) => {
    const history = useHistory();
    useEffect(() => {
        if (isLoginSuccess) {
            history.push("/");
        }
    }, [history, isLoginSuccess]);

    return (
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={loginValidationSchema}
            onSubmit={values => {
                const request = {
                    username: values.username,
                    password: values.password
                };
                login(request);
            }}>
             <div className={styles.authPage}>
                <Form className={styles.authForm}>
                    <AuthField label="Username" name="username" type="text" />
                    <AuthField label="Password" name="password" type="password" />
                    {error &&
                        <Message warning>
                            {error}
                        </Message>
                    }
                    <button type="submit">Login</button>
                    <p className={styles.message}>
                        <Link to="/registration" onClick={() => history.push("/registration")}>Sign Up</Link>
                    </p>
                </Form>
             </div>
        </Formik>
    )
};

const mapStateToProps = state => {
    return {
        isLoginSuccess: state.profile.isLoginSuccess,
        error: state.profile.error?.login
    }
};

const mapDispatchToProps = {
    login: loginRoutine
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
