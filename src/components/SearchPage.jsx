// src/components/SearchPage.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import Button from "./Button"; // ✅ 요거 빠졌던 거야!

const tags = ["자격증준비", "공무원시험", "수능공부", "토익", "임용고시"];

function SearchPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow flex flex-col items-center justify-center gap-6 px-4 text-center">
                <h1 className="text-4xl font-bold">STUDYLOG</h1>
                <SearchBar />

                {/* 태그 버튼 */}
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                    {tags.map((tag, index) => (
                        <Button key={index} label={tag} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default SearchPage;
