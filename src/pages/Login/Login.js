import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../../components/common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login, logout } from '../../redux/Reducers/authReducer'
import { Redirect } from 'react-router-dom'
import styles from '../../components/common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} component={Input} name={"email"}
                    validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} component={Input} name={"password"}
                    validate={[required]} type={"password"} />
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={"rememberMe"} /> запам'ятати мене
               </div>
            { props.error && <div className={styles.formSummaryError}>
            {props.error}
            </div>}
            <div>
                <button>Увійти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Авторизація</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, logout })(Login);