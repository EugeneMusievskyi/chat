import {connect} from "react-redux";
import styles from "../styles.module.sass";
import AuthField from "../AuthField/index";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import {registerRoutine} from "../../../sagas/auth/routines";
import { useHistory } from "react-router-dom";
import {Message} from "semantic-ui-react";

const registrationValidationSchema = Yup.object({
    username: Yup.string()
        .required('Enter username'),
    password: Yup.string()
        .min(6, "Use 6 characters or more for your password")
        .max(16, "Password too long")
        .matches(/[a-z]/, "Password must contain at least 1 lower case letter")
        .matches(/[A-Z]/, "Password must contain at least 1 upper case letter")
        .required('Enter password'),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password')], "Passwords must match")
        .required('Confirm password')
});

const RegistrationForm = ({register, isRegisteredSuccess, error}) => {
    const history = useHistory();
    useEffect(() => {
        if (isRegisteredSuccess) {
            history.push("/");
        }
    }, [history, isRegisteredSuccess]);

    return (
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={registrationValidationSchema}
            onSubmit={values => {
                const request = {
                    username: values.username,
                    password: values.password
            };
            register(request);
        }}>
             <div className={styles.authPage}>
                <Form className={styles.authForm}>
                    <AuthField label="Username" name="username" type="text" />
                    <AuthField label="Password" name="password" type="password" />
                    <AuthField label="Repeat password" name="repeatPassword" type="password" />
                    {error &&
                    <Message warning>
                            {error}
                        </Message>
                    }
                    <button type="submit">Register</button>
                    <p className={styles.message}>Already registered?
                        <Link to="/login">Sign In</Link>
                    </p>
                </Form>
             </div>
        </Formik>
    );
};

const mapStateToProps = state => {
    return {
        isRegisteredSuccess: state.profile.isRegisteredSuccess,
        error: state.profile.error?.registration
    }
};

const mapDispatchToProps = {
    register: registerRoutine
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
