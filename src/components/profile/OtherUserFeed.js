import React from "react";
import '../../assets/style/profile/profileFeed.css';
import '../../assets/style/main/main.css';
import like from '../../assets/img/like.png'
import unlike from '../../assets/img/unlike.png';   
import axios from "axios";

function OtherUserFeed({id, isLike, user, email, content, userImg, imges=[], nickname,baseUrl}) {
    const fixUrl = "https://minitwit-sinabro.s3.ap-northeast-2.amazonaws.com/";
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
            axios.get(baseUrl + "timeline/like/" + id, config);
           setTimeout(function() {
               window.location.reload();
           }, 200);
        }
        else {
            axios.delete(baseUrl + "timeline/like/" + id, config);
            setTimeout(function() {
                window.location.reload();
            }, 200);
        }
    }

    return(
        <div className="postsItem">
             <img src={fixUrl + userImg} />
            <div className="contentsContainer">
                <div className="infoBox">
                    <div className="infoInnerBox">
                      <h3>{nickname}</h3>
                  <div className="userNameBox">
                 <span>{email}</span>
                </div>
                </div>
                </div>
            <div className="contentsBox">
                <p>{content}</p>
                <div>
                {imges.map((img)=>(                    
                <img key={img.id} src={fixUrl + img.img}/>
                ))}
                </div>
                <img className="likeButton" src={likeButton} onClick={onLike}></img>
            </div>
            </div>
        </div>
    );
}

export default OtherUserFeed;