import React from 'react';
import axios from 'axios'
import profile from '../../assets/img/profile.PNG'
import '../../assets/style/main/main.css'

const PostItem = ({id, email,date,nickname,userImg,content,uploadImg = []}) => {
    const onRemove = () => {
        const config = {
            headers : {'access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRmOTg0NGFhMmZmMjA1M2E5NjAxMjYzMTIxOWRiNWI5IiwiZW1haWwiOiJzZXVuZ2Jpbjk4NTBAZ21haWwuY29tIiwibmlja25hbWUiOiJ5c2IiLCJpYXQiOjE1OTg1NTAxMzUsImV4cCI6MTU5ODU1MTkzNX0.tNvNE8qhdNEefeSg1vqqc5buZaaeyGxQxunPgDagcoI'}
        }
        const res = axios.delete("http://52.78.186.198:3000/timeline/" + id, config)
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="postItem">
            <img src={userImg}></img>
            <div className="contentsContainer">
                <div className="infoBox">
                    <div className="infoInnerBox">
                        <h3>{nickname}</h3>
                        <div className="userNameBox">
                            <span>{email}</span>
                            <span>{date}</span>
                        </div>
                    </div>
                        <button onClick={onRemove}>X</button>
                </div>
                <div className="contentsBox">
                    <p>{content}</p>
                    <img src={uploadImg}></img>
                </div>
            </div>
        </div>
    );
};



export default PostItem;