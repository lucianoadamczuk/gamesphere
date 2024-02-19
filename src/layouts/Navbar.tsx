"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const searchedValue = e.target.value;

      const params = new URLSearchParams(searchParams);

      if (searchedValue.length === 0) {
        router.back();
      }

      // Go to search page
      if (searchedValue.length > 0) {
        router.push("search");
      }

      // set query params
      if (pathname === "/search") {
        params.set("query", searchedValue);
        router.replace(pathname + "?" + params.toString());
      }
    },
    500,
  );

  return (
    <nav className=" fixed top-0 z-50 w-full bg-dark/80 py-2 backdrop-blur-sm">
      <div className=" container flex items-center justify-between">
        <h1 className=" text-primary-light">Gamesphere</h1>
        <input
          onChange={handleSearch}
          type="text"
          className=" rounded-sm bg-dark-muted px-2 outline-none "
          placeholder="Search a game"
        />
      </div>
    </nav>
  );
}
