"use client";
import { getPlatforms } from "@/services";
import { Platforms } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

export default function FilterByPlatform() {
  /* ------------------------- get and save platforms ------------------------- */
  const [platforms, setPlatforms] = useState<undefined | Platforms[]>();

  useEffect(() => {
    async function getDataPlatforms() {
      const data = await getPlatforms();
      setPlatforms(data);
    }
    getDataPlatforms();
  }, []);

  /* ---------------------------- Query params ---------------------------- */
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  // change query param
  function setParams(e: ChangeEvent<HTMLSelectElement>) {
    params.set("platform", e.target.value);
    router.replace(pathname + "?" + params);
  }

  if (platforms) {
    return (
      <div className="border-dark-soft flex flex-col justify-center gap-2 rounded-md border-b-2 bg-dark-muted p-4">
        <h5>Filter by Platform</h5>
        <select
          className="bg-dark-soft "
          defaultValue={params.get("platform") || ""}
          onChange={setParams}
        >
          {platforms?.map((item) => (
            <option key={item.id + item.slug} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
