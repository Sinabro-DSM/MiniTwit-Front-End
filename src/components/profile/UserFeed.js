import React from "react";
import '../../assets/style/profile/userFeed.css';

function UserFeed({user, email, content, userImg, imges=[], nickname }) {
    const fixUrl = "https://minitwit-sinabro.s3.ap-northeast-2.amazonaws.com/";
    return(
        <div className="otherFeed">
            <div className="otherFeedList">
                <img id="userImge" src={fixUrl + userImg} />
                <span id="nickname">{nickname}</span>
                <span id="email">{email}</span>
                <span id="content">{content}</span>
                <div className="contentImg">
                {imges.map((img)=>(                    
                <img key={img.id} src={fixUrl + img.img}/>
                ))}
                </div>
            </div>
        </div>
    );
}

export default UserFeed;