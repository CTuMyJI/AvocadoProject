import React from 'react'
import { reduxForm } from 'redux-form'
import { Input, createField } from '../../components/common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login, logout } from '../../redux/Reducers/authReducer'
import { Redirect } from 'react-router-dom'
import styles from '../../components/common/FormsControls/FormsControls.module.css'

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", Input, "email", [required])}
            {createField("Password", Input, "password", [required], { type: "password" })}
            {createField(null, Input, "rememberMe", [], { type: "checkbox" }, "remember me")}

            {error && <div className={styles.formSummaryError}>
                {error}
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