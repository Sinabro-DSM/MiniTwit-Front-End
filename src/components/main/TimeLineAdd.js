import React from 'react';
import profile from '../../assets/img/profile.PNG'
import '../../assets/style/main/main.css'
import axios from 'axios'

const TimeLineAdd = ({userImg}) => {
    let src = "https://minitwit-sinabro.s3.ap-northeast-2.amazonaws.com/"
    const onSubmitPost = () =>
    {
        const timelineUrl = "http://15.164.213.251:3000/timeline"
        
        const content = document.getElementsByName('content')[0].value.trim();
        const file = document.getElementById("file").files;
        let token = localStorage.getItem('accessToken')
        let refreshToken = localStorage.getItem('refreshToken')
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
                <img src={src + userImg}></img>
                <form action="`${timelineUrl}`" method="post" enctype="multipart/form-data">
                    <input placeholder="무슨 일이 일어나고 있나요?" name="content" maxLength="140"></input>
                </form>
                
            </div>
            <div className="addPost">
            <form action="`${timelineUrl}`" method="post" enctype="multipart/form-data">
                <input multiple="multiple" id="file" type="file" name="file"/>
            </form>
                <button onClick={onSubmitPost}>트윗</button>
            </div>
        </div>
    );
};

export default TimeLineAdd;