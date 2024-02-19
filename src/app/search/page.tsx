import { Card } from "@/components";
import { getSearched } from "@/services";

export default async function Search({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const response = await getSearched(searchParams.query);
  const data = response?.results;

  if (data === undefined) {
    return (
      <main className="container">
        <section className="flex h-screen flex-col items-center justify-center">
          <h5>
            <span className=" text-danger">Ups</span>, it seems to be you
            didn&apos;t search something
          </h5>
          <p>Why don&apos;t you try to write something?</p>
        </section>
      </main>
    );
  }

  if (data.length === 0) {
    return (
      <main className="container min-h-screen ">
        {data.length === 0 ? (
          <>
            <section className="flex h-screen flex-col items-center justify-center">
              <h5>
                <span className=" text-danger">Ups</span>, there are no matches
                for ...
              </h5>
              <p>Why don&apos;t you try with other word?</p>
            </section>
          </>
        ) : (
          <></>
        )}
      </main>
    );
  }

  if (data.length > 1) {
    return (
      <main className=" container">
        <section className="grid w-full gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {data.map((item) => (
            <Card
              key={item.slug}
              slug={item.slug}
              name={item.name}
              image={item.background_image}
            />
          ))}
        </section>
      </main>
    );
  }
}
