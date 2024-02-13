"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container flex flex-col items-center">
      <h2 className=" text-5xl">
        Games for <span className=" text-secondary">Playstation</span>
      </h2>

      <div
        className={`relative flex flex-col items-center  duration-300 ${isOpen ? " max-h-40 overflow-y-scroll" : "max-h-10 overflow-hidden"} `}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto et
          hic nesciunt earum tenetur vel animi, excepturi nobis necessitatibus
          ipsam, quae modi quo! Rem recusandae quia et, quasi deleniti
          provident? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto et hic nesciunt earum tenetur vel animi, excepturi nobis
          necessitatibus ipsam, quae modi quo! Rem recusandae quia et, quasi
          deleniti provident? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Architecto et hic nesciunt earum tenetur vel animi, excepturi
          nobis necessitatibus ipsam, quae modi quo! Rem recusandae quia et,
          quasi deleniti provident?
        </p>

        {!isOpen && (
          <div className=" absolute inset-0 h-auto bg-gradient-to-t from-dark-muted to-dark-muted/20"></div>
        )}
      </div>

      <button
        className=" mt-5 w-full rounded-md bg-primary px-5 py-2 duration-300 hover:bg-primary-light active:scale-90 md:w-fit"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? "See more" : "Hide"}
      </button>
    </header>
  );
}
