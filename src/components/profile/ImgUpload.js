import React, { useState, Component } from "react";
import axios from "axios";
import "../../assets/style/profile/img.css";
class ImgUpload extends Component {
state = {
  imgUrl: '',
  imgFixUrl: "https://minitwit-sinabro.s3.ap-northeast-2.amazonaws.com/"
}

 changeImg = () => {
  const file = document.getElementById("file");

  const config = {
    headers: {
      "access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ1OTk5MjllZjIxZTY3YmNhMzhhYzJkYzYzODNlYWRlIiwiZW1haWwiOiJzZXVuZ2Jpbjk4NTBAZHNtLmhzLmtyIiwibmlja25hbWUiOiJuaWNrbmFtZSIsImlhdCI6MTU5ODU0ODEwNywiZXhwIjoxNTk4NTQ5OTA3fQ.o0BkJQVs3-HOTV-uRerwBcmFAD9Y7XG04EFEP3D0rhk",
      "Content-type": "application/x-www-form-urlencoded",
    },
  };
  console.log(file.files[0]);
  let form = new FormData();
  form.append("file", file.files[0]);

const res = axios.put("http://52.78.186.198:3000/profile", form, config)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    
    const imgeUpload = document.getElementById('imge');
    this.setState({ imgUrl: file.files[0].name})
};
render() {
  const imgUrl = this.state;
  console.log(imgUrl);
  return (
    <React.Fragment>
      <img src="56790880_586425535094727_1181374868373897216_n.jpg" className="profileImg" id="imge" name="imge"></img>
      <form
        action="http://52.78.186.198:3000/profile"
        method="put"
        enctype="multipart/form-data"
      >
        <input multiple="multiple" id="file" name="file" type="file" />
      </form>
      <button onClick={this.changeImg}>업로드  </button>
    </React.Fragment>
  );
}
}

export default ImgUpload;
