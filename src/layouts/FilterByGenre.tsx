"use client";
import { getGenres } from "@/services";
import { Genres } from "@/types";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

export default function FilterByGenre() {
  /* --------------------------- get and save genres -------------------------- */
  const [genres, setGenres] = useState<undefined | Genres[]>();
  useEffect(() => {
    async function getDataGenres() {
      const data = await getGenres();
      setGenres(data);
    }
    getDataGenres();
  }, []);

  /* --------------------------- Query params -------------------------- */
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  // change param
  function setQueryGenre(e: ChangeEvent<HTMLSelectElement>) {
    params.set("genre", e.target.value);
    router.replace(pathname + "?" + params);
  }

  if (genres) {
    return (
      <div className=" border-dark-soft flex flex-col justify-center gap-2 rounded-md border-b-2 bg-dark-muted p-4">
        <h5>Filter by Genre</h5>
        <select
          className="bg-dark-soft "
          defaultValue={params.get("genre") || ""}
          onChange={setQueryGenre}
        >
          {genres?.map((item) => (
            <option key={item.id + item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
