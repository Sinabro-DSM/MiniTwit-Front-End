import React from 'react';
import '../../assets/style/login/login.css';
import axios from 'axios';
import {Link,useHistory} from "react-router-dom"

const Login = () => {
    let history = useHistory();
    const onSubmitLogin = () => {
        const email = document.getElementsByName("email")[0].value.trim();
        const password = document.getElementsByName("password")[0].value.trim();
        console.log(email);
        console.log(password);
        const data = {
            email : email,
            password : password
        }

        axios.post('http://15.164.213.251:3000/user/login',data)
        .then((res) => {
            console.log(res)
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('refreshToken', res.data.refreshToken);
            history.push({
                pathname: "/timeLine"
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="allContainer">
            <div>
                <div className="loginHeader">
                    <div className="headIcon"></div>
                    <h1 className="title">트위터 로그인</h1>
                </div>
                <div className="inputField">
                    <form>
                        <div className="idContainer">
                            <label for="inputId" className="idLabel">이메일</label><br></br>
                            <input type="email" className="inputId" name="email"></input><br></br>
                        </div>
                       
                        <div className="pwContainer">
                            <label for="inputPw" className="pwLabel">비밀번호</label><br></br>
                            <input type="password" className="inputPw" name="password"></input>
                        </div>
                    </form>
                </div>
                <div>
                    <button className="submitBtn" onClick={onSubmitLogin}>로그인</button>
                    <Link to="/signUp" style={{textDecoration : "none"}}><p className="signUpLink">트위터 가입하기</p></Link>
                </div>    
            </div>
            
        </div>
    );
};

export default Login;