// src/components/Button.jsx
import React from "react";

function Button({ label }) {
    const handleClick = () => {
        alert(`${label} 태그 클릭됨`);
    };

    return (
        <span
            className="bg-gray-200 hover:bg-gray-300 active:bg-gray-400 px-4 py-2 rounded cursor-pointer transition"
            onClick={handleClick}
        >
      #{label}
    </span>
    );
}

export default Button;
