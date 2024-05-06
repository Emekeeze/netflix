import React from "react";
import Billboard from "../Components/Billboard";
import Navbar from "../Components/Navbar";

function BrowsePage() {
  return (
    <div>
      <Navbar />
      <Billboard />
      <div className="pb-5">
        <MovieList />
      </div>
    </div>
  );
}

export default BrowsePage;
