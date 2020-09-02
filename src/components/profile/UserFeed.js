import React from "react";
import '../../assets/style/profile/userFeed.css';
import like from '../../assets/img/like.png'
import unlike from '../../assets/img/unlike.png';   
import axios from "axios";

function UserFeed({id, isLike, user, email, content, userImg, imges=[], nickname }) {
    const fixUrl = "https://minitwit-sinabro.s3.ap-northeast-2.amazonaws.com/";
    const likeUrl = "http://54.180.103.146:3000/timeline/like/";
    let likeButton = "";

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
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4YjA1NWE2NTZlMTE1ODg4NDJjNGMyNzBiZjU3Nzg2IiwiZW1haWwiOiJzZXVuZ2Jpbjk4NTBAZHNtLmhzLmtyIiwibmlja25hbWUiOiJuaWNrIiwiaWF0IjoxNTk5MDYwMDgyLCJleHAiOjE1OTkxNDY0ODJ9.ogkGqcypBK6gQQE_19zfAKy2wH6OpgiNtiJNWe2IqIo",
        }
    }
    const onLike = () => {
        if(isLike === false) {
            axios.get(likeUrl + id, config);
        }
        else {
            axios.delete(likeUrl + id, config);
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

export default UserFeed;