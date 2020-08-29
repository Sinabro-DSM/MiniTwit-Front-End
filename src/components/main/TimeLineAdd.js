import React,{useState, useCallback} from 'react';
import profile from '../../assets/img/profile.PNG'
import '../../assets/style/main/main.css'
import axios from 'axios'
import PostItem from './PostItem';

const TimeLineAdd = () => {
    const onSubmitPost = () =>
    {
        const content = document.getElementsByName('content')[0].value.trim();
        const file = document.getElementById("file").files;
        
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
                headers : { 'access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3MzE1Y2Y1NjBhYWQ5ZjRiYzFkMWQxNzEwNzkyNjkwIiwiZW1haWwiOiJzZXVuZ2Jpbjk4NTBAZ21haWwuY29tIiwibmlja25hbWUiOiJ5c2IiLCJpYXQiOjE1OTg2ODc2NTYsImV4cCI6MTU5ODY4OTQ1Nn0.QykYkrX6Kn83b_3Xvz4wNo0Ek0zisSEREMJyjTPwuuo',
                'Content-type': 'application/x-www-form-urlencoded'
                }
            }
            
            let form = new FormData()
            form.append('content', formdata.content)
            for(let i = 0; i < 4; i++)
            {
                let uploadFile = file[i];
                form.append('file', uploadFile)
            }
            const res = axios.post('http://52.78.186.198:3000/timeline', form, config)
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
                <form action="http://54.180.97.98:3000/timeline" method="post" enctype="multipart/form-data">
                    <input placeholder="무슨 일이 일어나고 있나요?" name="content" maxLength="140"></input>
                </form>
                
            </div>
            <div className="addPost">
            <form action="http://54.180.97.98:3000/timeline" method="post" enctype="multipart/form-data">
                <input multiple="multiple" id="file" type="file" name="file"/>
            </form>
                <button onClick={onSubmitPost}>트윗</button>
            </div>
        </div>
    );
};

export default TimeLineAdd;