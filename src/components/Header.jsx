import React from "react";

function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold text-gray-800">StudyLog</div>
        <nav className="flex space-x-6 text-sm text-gray-600">
          <a href="#">게시판</a>
          <a href="#">로그인</a>
          <a href="#">회원가입</a>
          <a href="#">마이페이지</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;