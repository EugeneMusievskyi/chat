import React from "react";
import {useField} from "formik";
import styles from "./styles.module.sass";

const AuthField = ({ label, name, type }) => {
    const [field, meta] = useField(name);
    return (
        <div className={styles.registrationField}>
           <label htmlFor={name}>{label}</label>
           <input {...field} type={type ? type : "text"} />
            {meta.touched && meta.error ? (
                <div className={styles.validationMessage}>{meta.error}</div>
            ) : null}
        </div>
    );
};

export default AuthField;
