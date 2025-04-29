import React from "react";

function SearchBar() {
  return (
    <div className="flex items-center border border-gray-300 rounded px-4 py-2 w-full max-w-md shadow-sm">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        className="flex-grow outline-none text-sm placeholder-gray-400"
      />
      <button className="ml-2 text-sm py-1 px-3 bg-gray-100 hover:bg-gray-200 rounded">
        검색
      </button>
    </div>
  );
}

export default SearchBar;