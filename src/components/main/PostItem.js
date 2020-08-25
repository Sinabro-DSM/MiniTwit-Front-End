import React from 'react';
import PropTypes from 'prop-types'
import profile from '../../assets/img/profile.PNG'
import '../../assets/style/main/main.css'

const PostItem = ({email,nickname,userImg,content,uploadImg}) => {
    return (
        <div className="postItem">
            <img src={userImg}></img>
            <div className="contentsContainer">
                <div className="infoBox">
                    <div className="userNameBox">
                        <h3>{nickname}</h3>
                        <span>{email}</span>
                    </div>
                        <button>X</button>
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