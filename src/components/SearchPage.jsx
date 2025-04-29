import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

const tags = ["태그 1", "태그 2", "태그 3", "태그 4", "태그 5"];

function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center gap-6 px-4 text-center">
        <h1 className="text-4xl font-bold">STUDYLOG</h1>
        <SearchBar />
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 px-4 py-1 rounded-full"
            >
              {tag} ✕
            </span>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SearchPage;