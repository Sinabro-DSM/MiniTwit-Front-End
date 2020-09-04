import React from "react";
import '../../assets/style/profile/OtherUserFeed.css';
import like from '../../assets/img/like.png'
import unlike from '../../assets/img/unlike.png';   
import axios from "axios";

function OtherUserFeed({id, isLike, user, email, content, userImg, imges=[], nickname }) {
    const fixUrl = "https://minitwit-sinabro.s3.ap-northeast-2.amazonaws.com/";
    const likeUrl = "http://13.209.67.14:3000/timeline/like/";
    let likeButton = "";
    let token = localStorage.getItem('accessToken')
    if(isLike === false) {
        likeButton = unlike;
    }
    else {
        likeButton = like;
    }
    console.log(isLike);
    const config = {
        headers: {
            'access-token':
                token,
        }
    }
    const onLike = () => {
        if(isLike === false) {
            axios.get(likeUrl + id, config);
           setTimeout(function() {
               window.location.reload();
           }, 200);
        }
        else {
            axios.delete(likeUrl + id, config);
            setTimeout(function() {
                window.location.reload();
            }, 200);
        }
    }

    return(
        <div className="otherFeed">
            <div className="otherFeedList">
                <div className="userProfile">
                <img src={fixUrl + userImg} />
                </div>
                <span id="nickname">{nickname}</span>
                <span id="email">{email}</span>
                <span id="content">{content}</span>
                <div className="contentImg">
                {imges.map((img)=>(                    
                <img key={img.id} src={fixUrl + img.img}/>
                ))}
                </div>
                <img className="likeBtn" src={likeButton} onClick={onLike}></img>
            </div>
        </div>
    );
}

export default OtherUserFeed;