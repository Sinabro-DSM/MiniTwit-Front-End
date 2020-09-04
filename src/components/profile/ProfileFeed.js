import React from 'react';
import '../../assets/style/profile/profileFeed.css';
import like from '../../assets/img/like.png';
import unlike from '../../assets/img/unlike.png';
import axios from 'axios';


function ProfileFeed({id, email, name, imges, isLike, profileImg, content}) {
    let likeBtn = "";
    const imgUrl = "https://minitwit-sinabro.s3.ap-northeast-2.amazonaws.com/";
    const urlLike = "http://13.209.67.14:3000/timeline/like/";
    const config = {
        headers: {
            'access-token':  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4YjA1NWE2NTZlMTE1ODg4NDJjNGMyNzBiZjU3Nzg2IiwiZW1haWwiOiJzZXVuZ2Jpbjk4NTBAZHNtLmhzLmtyIiwibmlja25hbWUiOiJuaWNrIiwiaWF0IjoxNTk5MTUzMzMyLCJleHAiOjE1OTkyMzk3MzJ9.NoE0Cr7TIz6IUTBDKJ9fDHx4-lnMxQyzmq0ejTd34eE",
        }
    }
    if(isLike === false) {
        likeBtn = unlike;
    }
    
    else {
        likeBtn = like;
    }
    console.log(isLike);
    const onLike = () => {
        if(isLike === false) {
            axios.get(urlLike + id, config);
            setTimeout(function() {
                window.location.reload();
            },200);
        }
        else {
            axios.delete(urlLike + id, config);
            setTimeout(function() {
                window.location.reload();
            },200);
        }
    }
    const remove = () => {
        axios.delete("http://13.209.67.14:3000/timeline/" + id, config);
        setTimeout(function() {
            window.location.reload();
        }, 200);
    }
    return(
        <div className="profileFeed">
            <div className="feedList">
            <div className="profileImge">
                <img src={imgUrl + profileImg} />
            </div>
            
            <p className="remove" onClick={remove}>X</p>
            <span id="name">{name}</span>
            <span id="email">{email}</span>
            <span id="content">{content}</span>
            <div className="feedImg">
                {imges.map((imge) => (
                    <img key={imge.id} src={imgUrl + imge.img}/>
                ))}
            </div>
            <img className="likeButton" src={likeBtn} onClick={onLike}/>
            </div>
        </div>
    );
}

export default ProfileFeed;