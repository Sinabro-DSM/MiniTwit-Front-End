import React from "react";
import axios from "axios";
import "../../assets/style/profile/img.css";
const ImgUpload = () => {
  const changeImg = () => {
    const file = document.getElementById("file");

    const config = {
      headers: {
        "access-token": "",
        "Content-type": "application/x-www-form-urlencoded",
      },
    };

    const form = new FormData();
    form.append("file", file.files[0]);
    axios.post("", form, config);
  };

  return (
    <div>
      <form
        onClick={changeImg}
        action=""
        method="post"
        enctype="multiple/form-data"
      >
        <input multiple="multiple" id="file" name="file" type="file" />
      </form>
    </div>
  );
};

export default ImgUpload;
