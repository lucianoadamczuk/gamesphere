import { MainData, MainDataSkeleton, Trailers } from "@/layouts/slug";
import { Suspense } from "react";

interface Props {
  params: {
    slug: string;
  };
}

export default function page({ params }: Props) {
  return (
    <main className="container">
      <Suspense fallback={<MainDataSkeleton />}>
        <MainData params={params.slug} />
      </Suspense>
      <Suspense
        fallback={<p className=" animate-pulse">Searching trailers...</p>}
      >
        <Trailers slug={params.slug} />
      </Suspense>
    </main>
  );
}
