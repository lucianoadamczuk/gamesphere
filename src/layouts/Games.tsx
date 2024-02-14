import { Card, CardSkeleton } from "@/components";
import { getGames } from "@/services";
import { sButton } from "@/styles";
import { Game } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Games() {
  const searchParams = useSearchParams();

  const [page, setPage] = useState<number>(1);
  const [games, setGames] = useState<Game[]>([]);

  const genre = searchParams.get("genre") || "action";
  const platform = searchParams.get("platform") || "4";
  const ordering = searchParams.get("ordering") || "rating";

  useEffect(() => {
    async function getData() {
      const data = await getGames({
        genre: genre,
        platform: platform,
        ordering: ordering,
        page: page.toString(),
      });
      data && setGames(data);
    }

    getData();
  }, [genre, platform, ordering, page]);

  useEffect(() => {
    
  }, [])
  
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <section className="container flex flex-col items-center">
      <article className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {!games.length ? (
          <>
            {[...Array(20)].map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </>
        ) : (
          games.map((item) => (
            <Card
              key={item.slug}
              slug={item.slug}
              image={item.background_image}
              name={item.name}
            />
          ))
        )}
      </article>

      {games.length > 0 && (
        <button className={sButton} onClick={loadMore}>
          Load more
        </button>
      )}
    </section>
  );
}
