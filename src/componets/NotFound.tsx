import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white p-4">
      <button
        onClick={() => navigate("/")}
        className="flex items-start bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition"
      >
        <FontAwesomeIcon icon={faArrowCircleLeft} className="mr-2" />
        Go to Home
      </button>

      <img
        src="/animation.gif"
        alt="Not Found"
        className="mt-8 max-w-xs md:max-w-sm lg:max-w-md"
      />
    </div>
  );
}
