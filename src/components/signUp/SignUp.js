import React, { useState, useEffect } from 'react';
import { useHistory,Link } from 'react-router-dom';
import '../../assets/style/signUp/signUp.css';
import axios from 'axios';


const SignUp = () => {

    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    useEffect( () => {
        console.log({
            name,
            email,
            password
        });
    })

    const onChangeName = e =>{
        setName(e.target.value);
    };

    const onChangeEmail = e =>{
        setEmail(e.target.value);
    };

    const onChangePassword = e =>{
        setPassword(e.target.value);
    };
    
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
        const res = await axios.post("http://15.164.213.251:3000/user/email/send" , {email: data.email})
        console.log(res.data)
        history.push({
            pathname: "/signUpCheck",
            state: {
                name: name,
                email: email,
                password: password,
                randomNumber: res.data.randomNumber
            }
        });
    }


    return (
        <div className="app">
            <div>
                <div className="headIcon"></div>
                <div className="loginHeaderBox">
                    <p className="title">계정을 생성하세요</p>
                    <button className="nextBtn" onClick={onSignUp}>다음</button>
                </div>
                <div className="inputField">
                    <form>
                        <div className="nameContainer">
                            <label htmlFor="inputName" className="nameLabel">닉네임</label><br></br>
                            <input type="text" className="inputName" name="name" value={name} onChange={onChangeName}></input>
                        </div>
                        <div className="idContainer">
                            <label htmlFor="inputId" className="idLabel">이메일</label><br></br>
                            <input type="email" className="inputId" name="email" value={email} onChange={onChangeEmail}></input><br></br>
                        </div>
                        <div className="pwContainer">
                            <label htmlFor="inputPw" className="pwLabel">비밀번호</label><br></br>
                            <input type="password" className="inputPw" name="password" value={password} onChange={onChangePassword}></input>
                        </div>
                    </form>
                </div>
                    <Link to="/login" style={{textDecoration : "none"}}><p className="logIn">트위터 로그인하기</p></Link>
            </div>
        </div>
    );
};
export default SignUp;