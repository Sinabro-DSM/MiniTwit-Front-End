import React from 'react';
import '../../assets/style/login/login.css'

const Login = () => {
    return (
        <div className="App">
            <header className="loginHeader">
                <div className="headIcon"></div>
                <h1 className="title">트위터 로그인</h1>
            </header>
            <div className="inputField">
                <form>
                    <div className="idContainer">
                        <label for="inputId" className="idLabel">이메일</label><br></br>
                        <input type="email" className="inputId"></input><br></br>
                    </div>
                    <div className="blank"></div>
                    <div className="pwContainer">
                        <label for="inputPw" className="pwLabel">비밀번호</label><br></br>
                        <input type="password" className="inputPw"></input>
                    </div>
                </form>
            </div>
            <div>
                <input type="button" className="summitBtn" value="로그인"></input>
                <p className="signUp">트위터 가입하기</p>
            </div>
        </div>
    );
};

export default Login;