import React from "react";
import CheackBox from "./CheackBox";
import Search from "./Search";

function SearchBar() {
  return (
    <>
      <div className="flex space-x-6 items-center py-5">
        <Search />
        <CheackBox />
      </div>
    </>
  );
}

export default SearchBar;
