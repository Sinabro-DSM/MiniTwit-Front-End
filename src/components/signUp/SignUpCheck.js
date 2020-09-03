import React from 'react';
import '../../assets/style/signUp/signUp.css'

const SignUpCheck = () => {
    return (
        <div className="app">
            <div>
                <div className="headIcon"></div>
                <header className="loginHeader">
                    <p className="title">메일을 확인해주세요</p>
                    
                    <button className="nextBtn">다음</button>
                </header>
                <div className="inputField">
                    <form>
                        <div className="nameContainer">
                            <label for="inputName" className="nameLabel">인증코드</label><br></br>
                            <input type="text" className="inputName"></input>
                        </div>
                    </form>
                    <p className="logIn">트위터 로그인하기</p>
                </div>
            </div>
        </div>
    );
};

export default SignUpCheck;