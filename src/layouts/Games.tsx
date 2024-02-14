import { Card, CardSkeleton } from "@/components";
import { getGames } from "@/services";
import { sButton } from "@/styles";
import { Game } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Games() {
  const searchParams = useSearchParams();

  const [games, setGames] = useState<Game[]>([]);

  const genre = searchParams.get("genre") || "action";
  const platform = searchParams.get("platform") || "4";
  const ordering = searchParams.get("ordering") || "rating";
  const [page, setPage] = useState<number>(1);

  // When genre, platform, ordering change
  useEffect(() => {
    async function getData() {
      const data = await getGames({
        genre: genre,
        platform: platform,
        ordering: ordering,
        page: "1",
      });

      data && setGames(data);
    }

    getData();
  }, [genre, platform, ordering]);

  // When the use wants more results
  useEffect(() => {
    async function getData() {
      const data = await getGames({
        genre: genre,
        platform: platform,
        ordering: ordering,
        page: page.toString(),
      });

      data && setGames((prevState) => [...prevState, ...data]);
    }

    getData();
  }, [page]);

  return (
    <section className="container flex flex-col items-center">
      <article className="grid w-full gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {games.length === 0 && (
          <>
            {[...Array(20)].map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </>
        )}
        {games.map((item) => (
          <Card
            key={item.slug}
            slug={item.slug}
            image={item.background_image}
            name={item.name}
          />
        ))}
      </article>

      {games.length > 0 && (
        <button
          className={sButton}
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Load more
        </button>
      )}
    </section>
  );
}
