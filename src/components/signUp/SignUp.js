import React from 'react';
import '../../assets/style/signUp/signUp.css';
import axios from 'axios'

const SignUp = () => {
    const onSignUp = async () => {

        const email = document.getElementsByName("email")[0].value.trim();
        const password = document.getElementsByName("password")[0].value.trim();
        const name = document.getElementsByName("name")[0].value.trim();

        const data = 
        {
            email : email,
            password : password,
            nickname : name,
        }
        
        console.log(data.email)
        const res = await axios.post("http://3.34.198.6:3000/user/email/send" , {email: data.email})
        console.log(res)
    }
    return (
        <div className="app">
            <div>
                <div className="headIcon"></div>
                <header className="loginHeader">
                    <p className="title">계정을 생성하세요</p>
                    <button className="nextBtn" onClick={onSignUp}>다음</button>
                </header>
                <div className="inputField">
                    <form>
                        <div className="nameContainer">
                            <label for="inputName" className="nameLabel">닉네임</label><br></br>
                            <input type="text" className="inputName" name="name"></input>
                        </div>
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
                    <p className="logIn">트위터 로그인하기</p>
            </div>
        </div>
    );
};
export default SignUp;