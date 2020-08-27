import React from "react";
import axios from "axios";
import "../../assets/style/profile/img.css";
const ImgUpload = () => {
  const changeImg = () => {
    const file = document.getElementById("file");

    const config = {
      headers: {
        "access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ2NWZjZGJiNTZkNTE0NmQ4NjNmMTNiNTViMzQ3YjIxIiwiZW1haWwiOiJzZXVuZ2Jpbjk4NTBAZ21haWwuY29tIiwibmlja25hbWUiOiJ5c2IiLCJpYXQiOjE1OTgyNzY5MDAsImV4cCI6MTU5ODI3ODcwMH0.5CVmZeQDs7z1g_mTylhDzulDgheab-qO0QQefY0-2gI",
        "Content-type": "application/x-www-form-urlencoded",
      },
    };
    console.log(file.files[0]);
    let form = new FormData();
    form.append("file", file.files[0]);
    axios
      .put("http://3.34.197.24:3000/profile", form, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form
        action="http://3.34.197.24:3000/profile"
        method="put"
        enctype="multipart/form-data"
      >
        <input multiple="multiple" id="file" name="file" type="file" />
      </form>
      <button onClick={changeImg}>설정</button>
    </div>
  );
};

export default ImgUpload;
