
import { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function Whatsapp() {
  return (
    <button
      className="fixed bottom-5 max-lg:bottom-5 text-4xl p-3 right-6 z-50 bg-green-500 text-white 
        rounded-full shadow-lg  transition"
      aria-label="Scroll to top"
    >
      <a href="https://wa.me/919039353000" target="_blank" rel="noopener noreferrer">
        <BsWhatsapp />
      </a>
    </button>
  );
}
