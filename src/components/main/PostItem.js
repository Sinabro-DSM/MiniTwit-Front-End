import React from 'react';
import profile from '../../assets/img/profile.PNG'
import '../../assets/style/main/main.css'

const PostItem = () => {
    return (
        <div className="postItem">
            <div className="infoBox">
                <div className="userNameBox">
                    <img src={profile}></img>
                    <h3>nickname</h3>
                    <span>@asdfasdf</span>
                </div>
                    <button>X</button>
            </div>
            <div className="contentsBox">
                <p>어쩌구 저쩌구</p>
                <img src={profile}></img>
            </div>
        </div>
    );
};

export default PostItem;