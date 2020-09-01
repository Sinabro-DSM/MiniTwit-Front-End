import React,{useState, useCallback} from 'react';
import profile from '../../assets/img/profile.PNG'
import '../../assets/style/main/main.css'
import axios from 'axios'
import PostItem from './PostItem';

const TimeLineAdd = () => {
    
    const onSubmitPost = () =>
    {
        const timelineUrl = "http://15.164.50.105:3000/timeline"

        const content = document.getElementsByName('content')[0].value.trim();
        const file = document.getElementById("file").files;
        let token = localStorage.getItem('accessToken')
        console.log(file)

        if(content === '' && file.length === 0)
        {
            alert('글이나 사진을 업로드해보세요!')
        }

        else
        {
            const formdata = 
            {
                content : content,
                file : file
            };

            const config = {
                headers : { 'access-token' : token,
                'Content-type': 'application/x-www-form-urlencoded'
                }
            }
            console.log(token)
            
            let form = new FormData()
            form.append('content', formdata.content)
            for(let i = 0; i < 4; i++)
            {
                let uploadFile = file[i];
                form.append('file', uploadFile)
            }
            const res = axios.post(timelineUrl, form, config)
            .then((res) => {
                console.log(res)
                setTimeout(function() {
                    window.location.reload();
                  }, 300);
            })
        }
    }

    return (
        <div className="postAddContainer">
            <div className="addPostInput">
                <img src={profile}></img>
                <form action="http://15.164.50.105:3000/timeline" method="post" enctype="multipart/form-data">
                    <input placeholder="무슨 일이 일어나고 있나요?" name="content" maxLength="140"></input>
                </form>
                
            </div>
            <div className="addPost">
            <form action="http://15.164.50.105:3000/timeline" method="post" enctype="multipart/form-data">
                <input multiple="multiple" id="file" type="file" name="file"/>
            </form>
                <button onClick={onSubmitPost}>트윗</button>
            </div>
        </div>
    );
};

export default TimeLineAdd;