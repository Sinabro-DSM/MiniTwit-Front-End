import React, { useState, useEffect } from 'react';
import '../../assets/style/signUp/signUp.css'
import SignUp from './SignUp';
import axios from 'axios';
import { useHistory, useLocation } from "react-router-dom";

const SignUpCheck = () => {

    let history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [randomNumber, setRandomNumber] = useState('');


    useEffect(() => {
        if (typeof (location.state) !== 'undefined' && location.state !== null) {
            const { name, email, password, randomNumber } = location.state;
            setName(name);
            setEmail(email);
            setPassword(password);
            setRandomNumber(randomNumber);
            console.log({
                name,
                email,
                password,
                randomNumber
            })
        } else {
            setName("default");
            setEmail("default");
            setPassword("default");
            setRandomNumber("default");
        }
    }, []);

    const SendNum = () => {
        const number = document.getElementsByName('number')[0].value.trim();
        const data =
            {
                email: email, 
                password: password,
                nickname: name
            };
        console.log(data);
        console.log(number);
        console.log(randomNumber);
        if(number == randomNumber){
                axios.post("http://13.209.47.153:3000/user/register", data)
            .then((res) => {
                console.log(res);
                history.push({
                    pathname: "/SignUpSuccess"
                })
            }).catch((error) => {
                console.log(error);
        })
        }
    }

    return (
        <div className="app">
            <div>
                <div className="headIcon"></div>
                <header className="loginHeader">
                    <p className="title">메일을 확인해주세요</p>                    
                    <button className="nextBtn" onClick={SendNum}>다음</button>
                </header>
                <div className="inputField">
                    <form>
                        <div className="nameContainer">
                            <label htmlFor="inputName" className="nameLabel">인증코드</label><br></br>
                            <input type="text" className="inputName" name="number"></input>
                        </div>
                    </form>
                    <p className="logIn">트위터 로그인하기</p>
                </div>
            </div>
        </div>
    );
};

export default SignUpCheck;