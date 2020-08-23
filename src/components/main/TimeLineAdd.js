import React from 'react';
import profile from '../../assets/img/profile.PNG'
import '../../assets/style/main/main.css'
import axios from 'axios'

const TimeLineAdd = () => {

    const onSubmitPost = () =>
    {
        const content = document.getElementsByName('content')[0].value.trim();
        const file = document.getElementById("file");

        console.log(content)
        console.log(file)
        if(content === "")
        {
            alert('내용을 입력하세요!')
        }

        const formdata = 
        {
            content : content,
            file : file
        };

        const config = {
            headers : { 'access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ2NWZjZGJiNTZkNTE0NmQ4NjNmMTNiNTViMzQ3YjIxIiwiZW1haWwiOiJzZXVuZ2Jpbjk4NTBAZ21haWwuY29tIiwibmlja25hbWUiOiJ5c2IiLCJpYXQiOjE1OTgyMDgzNjMsImV4cCI6MTU5ODIxMDE2M30.U1TIGaYo14fng49OJYrbPXS3BFQC8aRaADxgVMgYSfM',
            'Content-type': 'application/x-www-form-urlencoded'
            }
        }
        
        let form = new FormData()
        form.append('content', formdata.content)
        form.append('file',file.files[0])
        axios.post('http://54.180.97.98:3000/timeline', form, config)
    }

    return (
        <div className="postAddContainer">
            <div className="addPostInput">
                <img src={profile}></img>
                <form action="http://54.180.97.98:3000/timeline" method="post" enctype="multipart/form-data">
                    <input placeholder="무슨 일이 일어나고 있나요?" name="content"></input>
                </form>
                
            </div>
            <div className="addPost">
            <form action="http://54.180.97.98:3000/timeline" method="post" enctype="multipart/form-data">
                <input multiple="multiple" id="file" type="file" name="file" />
            </form>
                <button onClick={onSubmitPost}>트윗</button>
            </div>
        </div>
    );
};

export default TimeLineAdd;