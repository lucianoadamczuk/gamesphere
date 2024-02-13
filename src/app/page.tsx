import {
  FilterByGenre,
  FilterByOrder,
  FilterByPlatform,
  Games,
  Header,
} from "@/layouts";

export default function Home() {
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
    </>
  );
}
