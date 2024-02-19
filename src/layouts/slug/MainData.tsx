import { getDetails } from "@/services";
import { Counter } from "@/widgets";
import Image from "next/image";
import Link from "next/link";

export default async function MainData({ params }: { params: string }) {
  const data = await getDetails(params);

  const year = Number(data?.released?.split("-")[0]) || 0;
  const month = Number(data?.released?.split("-")[1]) || 0;
  const day = Number(data?.released?.split("-")[2]) || 0;

  const colors = ["bg-secondary", "bg-primary", "bg-warning", "bg-danger"];

  return (
    <div>
      <h1 className=" text-4xl font-bold uppercase"> {data?.name} </h1>
      <section className="mt-5 grid place-items-center gap-10 md:grid-cols-2">
        {/* image */}
        <article className=" relative h-96 w-full">
          <Image
            src={data?.background_image || ""}
            alt={`An image of ${data?.name}`}
            width={600}
            height={600}
            className=" size-full object-cover "
          />
          <Link
            href={data?.website || "#"}
            target="_blank"
            className=" absolute bottom-5 right-5 cursor-pointer rounded-xl bg-primary p-1 text-xs text-light hover:bg-primary-light active:scale-95"
          >
            Go to the website
          </Link>
          <div className="my-2 flex justify-around">
            <Counter
              prefix="Playtime: "
              suffix="hs"
              end={data?.playtime || 0}
            />
            <p>
              Release date: <Counter end={day} suffix="/" />
              <Counter end={month} suffix="/" />
              <Counter end={year} />
            </p>
          </div>
        </article>

        {/* description */}
        <article className=" max-h-96 overflow-y-scroll">
          {data && (
            <div
              className="space-y-5"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></div>
          )}
        </article>

        {/* rankings */}
        <article className="w-full space-y-5">
          <div className="flex w-full gap-1">
            {data?.ratings?.map((item, index) => (
              <div
                key={item.id + item.title}
                className={`h-20 ${colors[index]} `}
                style={{ width: `${item.percent}%` }}
              ></div>
            ))}
          </div>
          <section className="flex flex-wrap  justify-evenly gap-5">
            {data?.ratings?.map((item, index) => (
              <article key={item.id + index} className=" flex gap-2">
                <div className={`size-5 rounded-full ${colors[index]}`}></div>
                <p className=" capitalize"> {item.title} </p>
              </article>
            ))}
          </section>
        </article>

        {/* platforms and tags */}
        <article className="grid gap-5 md:grid-cols-2">
          <div>
            <b>Available on: </b>
            {data?.platforms?.map((platform, index) => (
              <span
                className=" text-light-muted"
                key={platform.platform.id + platform.platform.slug}
              >
                {platform.platform.name}
                {index !== data.platforms.length - 1 && ", "}
              </span>
            ))}
          </div>
          <div>
            <b>Tags: </b>
            {data?.tags.map((tag, index) => (
              <span className=" text-light-muted" key={tag.id + tag.slug}>
                {tag.name}
                {index !== data.tags.length - 1 && ", "}
              </span>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
