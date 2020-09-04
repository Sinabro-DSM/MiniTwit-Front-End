import React from 'react';
import './../../assets/style/firstView/firstView.css';
import  axios from 'axios';

const FirstView = () => {

    const onSubmitLogin = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log(email);
        const data = {email, password};
        axios.post('http://3.34.198.6:3000/user/login',data)
        .then((res) => {
            console.log(res);
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('refreshToken', res.data.refreshToken);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="App">
            <article className="left">
                <p>관심사를 팔로우하세요.</p>
                <p>사람들이 무엇에 대해 이야기하고 있는지 알아보세요.</p>
                <p>대화에 참여하세요.</p>
            </article>
            <article className="right">
                <header>
                    <div className="inputEmail">
                        <p className="headerText">이메일</p>
                        <input type="email" id="email"></input>
                    </div>
                    <div className="inputPw">
                        <p className="headerText">비밀번호</p>
                        <input type="password" id="password"></input>
                    </div>
                    <button onClick={onSubmitLogin}>로그인</button>
                </header>
                    <div className="introContainer">
                        <h1>지금 전 세계에서 무슨 일<br></br>이 일어나고 있는지 알아<br></br>보세요</h1>
                        <p>오늘 트위터에 가입하세요.</p>
                        <button className="signUp">가입하기</button>
                        <button className="logIn">로그인</button>
                    </div>

            </article>
        </div>
    );
};
export default FirstView;