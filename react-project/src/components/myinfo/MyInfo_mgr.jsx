import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Footermgr from "../footer/Footer_mgr";

const MyInfo_mgr = () => {
  const navigate = useNavigate();

  const handleProfileEdit = () => {
    navigate("/MyInfo_user_ProfileEdit");
  };

  const handlePWEdit = () => {
    navigate("/MyInfo_user_PWEdit");
  };

  const handleDevice = () => {
    navigate("/MyInfo_user_Device");
  };

  const handleFeedback = () => {
    navigate("/MyInfo_user_Feedback");
  };

  const handleResign = () => {};

  return (
    <div className="myinfo-container">
      <Header />
      <div className="myinfo-header">
        <div className="profile-image-section">
          <img
            src="/path/to/profile_icon.png"
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="user-info">
          <h2>홍길동</h2>
        </div>
      </div>
      <div className="myinfo-body">
        <p>기본정보</p>
        <button className="profile-button" onClick={handleProfileEdit}>
          프로필 변경
        </button>
        <button className="profile-button" onClick={handlePWEdit}>
          비밀번호 변경
        </button>
        <button className="profile-button" onClick={handleDevice}>
          등록 사용자 관리
        </button>
      </div>
      <div className="myinfo-body">
        <p>고객센터</p>
        <button className="profile-button" onClick={handleFeedback}>
          문의하기
        </button>
      </div>
      <div className="myinfo-body">
        <p>계정관리</p>
        <button className="profile-button">로그아웃</button>
        <button className="profile-button" onClick={handleResign}>
          회원 탈퇴
        </button>
      </div>
      <div className="footer">
        <Footermgr />
      </div>
    </div>
  );
};

export default MyInfo_mgr;