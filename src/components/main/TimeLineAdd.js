import React from 'react';
import profile from '../../assets/img/profile.PNG'
import '../../assets/style/main/main.css'

const TimeLineAdd = () => {
    return (
        <div className="postAddContainer">
            <div className="addPostInput">
                <img src={profile}></img>
                <input placeholder="무슨 일이 일어나고 있나요?"></input>
            </div>
            <div className="addPost">
                <input type="file"></input>
                <button>트윗</button>
            </div>
        </div>
    );
};

export default TimeLineAdd;