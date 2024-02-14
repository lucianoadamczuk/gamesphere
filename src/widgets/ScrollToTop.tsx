"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const arrow = (
    <svg
      className="h-full w-full"
      data-testid="geist-icon"
      fill="none"
      height="24"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 12l-4-4-4 4" />
      <path d="M12 16V8" />
    </svg>
  );

  return (
    <div
      className="fixed bottom-6 right-6 z-10 h-16 w-16 animate-bounce cursor-pointer rounded-full bg-gradient-to-tr from-primary to-primary-light p-2 opacity-20 shadow-inner shadow-dark/20 hover:opacity-100 "
      onClick={() => scrollTop()}
    >
      {arrow}
    </div>
  );
}
