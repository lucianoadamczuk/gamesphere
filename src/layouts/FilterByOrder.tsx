"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

export default function FilterByOrder() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  function setParams(e: ChangeEvent<HTMLSelectElement>) {
    params.set("ordering", e.target.value);
    router.replace(pathname + "?" + params);
  }

  const data = [
    "Rating",
    "Name",
    "Released",
    "Added",
    "Created",
    "Updated",
    "Metacritic",
  ];

  return (
    <div className="flex items-end gap-2">
      <div className="flex w-full flex-col justify-center gap-2 rounded-md border-b-2 border-dark-soft bg-dark-muted p-4">
        <h5>Filter by Order</h5>
        <select
          className="bg-dark-soft "
          defaultValue={params.get("ordering") || ""}
          onChange={setParams}
        >
          {data.map((item, index) => (
            <option
              className="capitalize"
              key={index + item}
              value={item.toLowerCase()}
            >
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
