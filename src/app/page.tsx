"use client";
import {
  FilterByGenre,
  FilterByOrder,
  FilterByPlatform,
  Games,
  Header,
} from "@/layouts";
import { ScrollToTop } from "@/widgets";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  /* --------------------------- set initial query params --------------------------- */
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  // set initial params
  const genre = params.get("genre") || "action";
  const platform = params.get("platform") || "3";
  const ordering = params.get("ordering") || "rating";

  useEffect(() => {
    function setParams() {
      if (!genre && !platform && ordering) {
        params.set("genre", "action");
        params.set("platform", "3");
        params.set("ordering", "rating");
        // push to URL
        router.replace(pathname + "?" + params);
      }
    }
    setParams();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="container grid gap-2 py-5 md:grid-cols-3">
          <FilterByGenre />
          <FilterByPlatform />
          <FilterByOrder />
        </section>
        <Games />
      </main>
      <ScrollToTop />
    </>
  );
}
