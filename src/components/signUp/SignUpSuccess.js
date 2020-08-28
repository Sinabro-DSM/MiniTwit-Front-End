import React from 'react';
import '../../assets/style/signUp/signUp.css'
import friend from '../../assets/img/friend.png'

const SignUpSuccess = () => {
    return (
        <div className="app">
            <div className="successBox">
                <div className="headIcon"></div>
                    <h1>환영합니다!</h1>
                    <img src={friend}></img>
                    <p className="logIn">트위터 로그인하기</p>
                </div>
            </div>
    );
};

export default SignUpSuccess;