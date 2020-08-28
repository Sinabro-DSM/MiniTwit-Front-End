import React, { useState, Component } from "react";
import axios from "axios";
import "../../assets/style/profile/img.css";
class ImgUpload extends Component {
state = {
  file: '',
  imgUrl: '',
  imgFixUrl: "https://minitwit-sinabro.s3.ap-northeast-2.amazonaws.com/"
}

 changeImg = () => {
  const file = document.getElementById("file");

  const config = {
    headers: {
      "access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4YjA1NWE2NTZlMTE1ODg4NDJjNGMyNzBiZjU3Nzg2IiwiZW1haWwiOiJzZXVuZ2Jpbjk4NTBAZHNtLmhzLmtyIiwibmlja25hbWUiOiJuaWNrIiwiaWF0IjoxNTk4NjIzOTM3LCJleHAiOjE1OTg2MjU3Mzd9.tREop1W1-o5yHMDWSGXAoQTmiRhMVPRliyemB-RLn4c",
      "Content-type": "application/x-www-form-urlencoded",
    },
  };
  let form = new FormData();
  form.append("file", file.files[0]);

const res = axios.put("http://52.78.186.198:3000/profile", form, config)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    
};

handleFileOnChange = (event) => {
  event.preventDefault();
  let reader = new FileReader();
  let file = event.target.files[0];
  reader.onloadend = () => {
    this.setState({
      file : file,
      imgUrl : reader.result
    })
  }
  reader.readAsDataURL(file);
}

render() {
  const imgFixUrl = this.state;
  let profile = null;
  if (this.state.file !== '') {
    profile = <img src={this.state.imgUrl} ></img>
  }
  else {
    profile = <img src={imgFixUrl}/>
  }
  return (
    <React.Fragment>
      <div className="profileImg">
      {profile}
      </div>
      <form
        action="http://52.78.186.198:3000/profile"
        method="put"
        enctype="multipart/form-data"
      >
        <input multiple="multiple" id="file" name="file" type="file" accept="image/jpg,impge/png,image/jpeg,image/gif" onChange={this.handleFileOnChange} />
      </form>
    
      <button onClick={this.changeImg}>업로드</button>
    </React.Fragment>
  );
}
}

export default ImgUpload;
