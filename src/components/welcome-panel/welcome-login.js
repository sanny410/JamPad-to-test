import React from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {Field, reduxForm} from "redux-form";
import { useForm } from "react-hook-form";
import {loginFetchData} from "../../store/actions";
import {useNavigate} from "react-router-dom";



const LoginForm = (prop) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { register, formState: { errors } } = useForm();

    const loginPost = (email, password) => {
        axios.post('https://api.jampad.ml/api/hrs/login', {email: email, password: password}, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
            }
        })
            .then((response) => {
                const token = response.data.token;
                console.log(token)
                if (response.status === 200) {
                    dispatch(loginFetchData())
                    navigate('/funnel')
                } else {

                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const onSubmit = (data) => {
        console.log(data)
       loginPost(data.email, data.password)

    }


        // For tests, use the account: (hr@gmail.com, 12345678qQ)

    return (
        <form onSubmit={prop.handleSubmit(onSubmit)} className="form-login">
            <h2 className="login-title">Authorization</h2>
            <label> Your email</label>
            <div className="input-login">
                <Field name={"login"}
                       type="email"
                       placeholder="example@example.com"
                       component={"input"}
                       {...register("email", { required: "Required field",
                           maxLength: {value: 320, message: "Maximum login length 320 characters"},
                           minLength: {value: 4, message: "Minimum login length 4 characters"},
                           pattern: /^[A-Za-z]+$/i })}/>
                <img className="icon" src={require("../../assets/svg/email.png")} alt={''}/>
            </div>
            <img className="line" src={require("../../assets/svg/line.png")} alt={''}/>
            <div>{errors?.email && <p>{errors?.email?.message}</p>}</div>
            <label> Your password</label>
            <div className="input-login">
                <Field name={"password"}
                       type="password"
                       component={"input"}
                       {...register("password", { required: "Required field",
                           maxLength: {value: 30, message: "Maximum password length 30 characters"},
                           minLength: {value: 6, message: "Minimum password length 6 characters"},
                       })}
                />
                <img className="icon" src={require("../../assets/svg/eye.png")} alt={''}/>
            </div>
            <img className="line" src={require("../../assets/svg/line.png")} alt=""/>
            <div>{errors?.password && <p>{errors?.password?.message}</p>}</div>
            <button id="submit-authorization-form" >Log in</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const WelcomeLogin = () => {

    return (

            <div className="authorization-form">
                <LoginReduxForm />
            </div>
    )
}

export default WelcomeLogin;