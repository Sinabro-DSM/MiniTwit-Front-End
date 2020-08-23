import React from 'react';
import './signUp.css';

const SignUp = () => {
    return (
        <div className="App">
            <header className="loginHeader">
                <div className="headIcon"></div>
                <input type="button" className="nextBtn" value="다음"></input>
                <p className="title">계정을 생성하세요</p>
            </header>
            <div className="inputField">
                <form>
                    <div className="nameContainer">
                        <label for="inputName" className="nameLabel">닉네임</label><br></br>
                        <input type="text" className="inputName"></input>
                    </div>
                    <div className="blank"></div>
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
                <p className="logIn">트위터 로그인하기</p>
            </div>
        </div>
    );
};

export default SignUp;