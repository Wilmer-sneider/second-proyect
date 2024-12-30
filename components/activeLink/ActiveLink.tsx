"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type activeLinK = {
  patch: string;
  text: string;
};

const ActiveLink = ({ patch, text }: activeLinK) => {
  const usePatch = usePathname();
  /* console.log(usePatch); */
  const isActive = usePatch === patch;

  return (
    <Link
      href={patch}
      className={`flex items-center ${isActive ? "text-blue-500" : ""}`}
    >
      {text}
    </Link>
  );
};

export default ActiveLink;
