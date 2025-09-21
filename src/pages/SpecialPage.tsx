import React from "react";
import { Link } from "react-router-dom";

const SpecialPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-3xl gap-6">
      <p>Astro Talk page</p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#ff6600] text-white text-lg rounded-lg shadow-md hover:bg-[e65c00] transition"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default SpecialPage;
