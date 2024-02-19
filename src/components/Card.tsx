import Image from "next/image";
import Link from "next/link";

interface Props {
  slug: string;
  image: string;
  name: string;
}
export default function Card({ slug, image, name }: Props) {
  return (
    <Link
      href={`/${slug}`}
      className=" relative w-full cursor-pointer space-y-4 rounded-md bg-dark-soft p-4 shadow-md shadow-dark duration-100 hover:scale-105 active:scale-95 "
    >
      <Image
        src={image || ""}
        alt="An image of the game"
        width={300}
        height={200}
        className="h-40 w-full rounded-md object-cover"
      />
      <p className=" text-center"> {name} </p>
    </Link>
  );
}
