import React, {useState} from 'react';
import axios from 'axios'
import profile from '../../assets/img/profile.PNG'
import '../../assets/style/main/main.css'
import like from "../../assets/img/like.png"
import unlike from "../../assets/img/unlike.png"

const PostItem = ({id, email,date,nickname,userImg,content,isLike,isMine,uploadImg = []}) => {
    let deleteButtonStyle = "";
    let likeButton = "";
    let src = "https://minitwit-sinabro.s3.ap-northeast-2.amazonaws.com/"

    if(isMine === false)
    {
        deleteButtonStyle = "none"
    }

    if(isLike === true)
    {
        likeButton = like;
    }
    else
    {
        likeButton = unlike;
    }

    let token = localStorage.getItem('accessToken')

    const config = {
        headers : {'access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3MzE1Y2Y1NjBhYWQ5ZjRiYzFkMWQxNzEwNzkyNjkwIiwiZW1haWwiOiJzZXVuZ2Jpbjk4NTBAZ21haWwuY29tIiwibmlja25hbWUiOiJ5c2IiLCJpYXQiOjE1OTg3OTAwNzYsImV4cCI6MTU5ODc5MTg3Nn0.TP7D8-S4tdBmcQcFzid9bS1tOH8PIn1cF9y9SIxRHHQ'}
    }

    const onRemove = async () => {
        await axios.delete("http://52.78.186.198:3000/timeline/" + id, config)
        setTimeout(function() {
            window.location.reload();
          }, 300);
    }

    const onSubmitLike = () => {
        if(isLike === false)
        {
            axios.get("http://52.78.186.198:3000/timeline/like/" + id, config)
            setTimeout(function() {
                window.location.reload();
              }, 300);
        }
        else
        {
            axios.delete("http://52.78.186.198:3000/timeline/like/" + id, config)
            setTimeout(function() {
                window.location.reload();
              }, 300);
        }
    }

    return (
        <div className="postItem">
            <img src={src + userImg}></img>
            <div className="contentsContainer">
                <div className="infoBox">
                    <div className="infoInnerBox">
                        <h3>{nickname}</h3>
                        <div className="userNameBox">
                            <span>{email}</span>
                            <span>{date}</span>
                        </div>
                    </div>
                        <button style={{display : deleteButtonStyle}} onClick={onRemove}>X</button>
                </div>
                <div className="contentsBox">
                    <p>{content}</p>
                    <div>{uploadImg.map((Img) => (<img key={Img.id} src={src + Img.img}></img>))}</div>
                        <img className="likeButton" src={likeButton} onClick={onSubmitLike}></img>
                </div>
            </div>
        </div>
    );
};



export default PostItem;