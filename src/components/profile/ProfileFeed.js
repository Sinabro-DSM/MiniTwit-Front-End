import React from 'react';
import '../../assets/style/profile/profileFeed.css';
import like from '../../assets/img/like.png';
import unlike from '../../assets/img/unlike.png';
import axios from 'axios';


function ProfileFeed({id, email, name, imges, isLike, profileImg, content, baseUrl}) {
    let likeBtn = "";
    const imgUrl = "https://minitwit-sinabro.s3.ap-northeast-2.amazonaws.com/";
    let token = localStorage.getItem('accessToken')
    const config = {
        headers: {
            'access-token':  token
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
            axios.get(baseUrl + "timeline/like/" + id, config);
            setTimeout(function() {
                window.location.reload();
            },200);
        }
        else {
            axios.delete(baseUrl + "timeline/like/" + id, config);
            setTimeout(function() {
                window.location.reload();
            },200);
        }
    }
    const remove = () => {
        axios.delete(baseUrl + "timeline/" + id, config);
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