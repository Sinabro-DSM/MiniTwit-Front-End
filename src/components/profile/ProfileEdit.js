import React from "react";
import "../../assets/style/profile/edit.css";

function ProfileEdit({ isOpen, close }) {
  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <div className="modalLayout" onClick={close}></div>
          <div className="modal">
            <button className="closeBtn" onClick={close}>
              지금은 넘어가기
            </button>
            <div className="icon"></div>
            <p className="title">프로필 사진 선택하기</p>
            <p className="content">
              마음에 드는 사진이 있나요? 지금 업로드 하세요.
            </p>
            <div className="profileImg"></div>
            <button className="upload">업로드</button>
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}

export default ProfileEdit;
