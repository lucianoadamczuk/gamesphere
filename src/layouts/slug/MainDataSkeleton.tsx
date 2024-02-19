import { getDetails } from "@/services";
import { Counter } from "@/widgets";
import Image from "next/image";
import Link from "next/link";

export default function MainDataSkeleton() {
  const rankings = ["Exceptional", "Recommended", "Meh", "Skip"];
  const colors = ["bg-secondary", "bg-primary", "bg-warning", "bg-danger"];

  return (
    <div>
      <div className="h-20 w-full animate-pulse bg-dark-soft"></div>
      <section className="mt-5 grid place-items-center gap-10 md:grid-cols-2">
        {/* image */}
        <article className=" h-96 w-full">
          <div className=" h-full w-full animate-pulse bg-dark-soft"></div>
          <div className="my-2 flex justify-around">
            <Counter prefix="Playtime: " suffix="hs" end={0} />
            <p>
              Release date: <Counter end={0} suffix="/" />
              <Counter end={0} suffix="/" />
              <Counter end={0} />
            </p>
          </div>
        </article>

        {/* description */}
        <article>
          <p className=" animate-pulse text-light-muted">
            Loading description...
          </p>
        </article>

        {/* rankings */}
        <article className="w-full space-y-5">
          <div className="flex h-20 w-full  animate-pulse gap-1 bg-dark-soft"></div>
          <section className="flex flex-wrap  justify-evenly gap-5">
            {rankings.map((item, index) => (
              <article key={index} className=" flex gap-2">
                <div className={`size-5 rounded-full ${colors[index]}`}></div>
                <p className=" capitalize"> {item} </p>
              </article>
            ))}
          </section>
        </article>

        {/* platforms and tags */}
        <article className="grid w-full gap-5  md:grid-cols-2">
          <div>
            <b>Available on: </b>
            <span className=" animate-pulse">loading...</span>
          </div>
          <div>
            <b>Tags: </b>
            <span className=" animate-pulse text-light-muted">loading...</span>
          </div>
        </article>
      </section>
    </div>
  );
}
