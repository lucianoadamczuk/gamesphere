"use client";

import { getPlatformDetails } from "@/services";
import { sButton } from "@/styles";
import { PlatformDetails } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const platformParam = searchParams.get("platform") || "pc";

  const [platform, setPlatform] = useState<undefined | PlatformDetails>(
    undefined,
  );
  useEffect(() => {
    async function details() {
      const data = await getPlatformDetails(platformParam);
      setPlatform(data);
    }
    details();
  }, [platformParam]);

  return (
    <header className="container flex flex-col items-center">
      <h2 className=" mb-5 text-5xl">
        Games for <span className=" text-secondary"> {platform?.name} </span>
      </h2>

      <div
        className={`relative flex flex-col items-center  duration-500 ${isOpen ? " max-h-40 overflow-y-scroll" : "max-h-10 overflow-hidden lg:max-h-20"} `}
      >
        {platform?.description && (
          <div
            dangerouslySetInnerHTML={{ __html: platform?.description }}
          ></div>
        )}
        {!isOpen && (
          <div className=" absolute inset-0 h-full bg-gradient-to-t from-dark-muted to-dark-muted/20"></div>
        )}
      </div>

      <button className={sButton} onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? "See more" : "Hide"}
      </button>
    </header>
  );
}
