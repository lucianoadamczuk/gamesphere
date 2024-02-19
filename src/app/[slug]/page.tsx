import { MainData, MainDataSkeleton } from "@/layouts/slug";
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
    </main>
  );
}
