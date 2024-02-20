import { getTrailers } from "@/services";

export default async function Trailers({ slug }: { slug: string }) {
  const data = await getTrailers(slug);

  if (data?.length !== 0 && data !== undefined) {
    return (
      <section>
        <h5 className=" font-bold">Trailers:</h5>
        {data.map((item) => (
          <video
            key={item.id}
            poster={item.preview}
            controls
            className="w-full max-w-80"
          >
            <source src="item.data[480]" />
          </video>
        ))}
      </section>
    );
  }
}
