import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ImageCardProps {
  src: string;
  alt: string;
  href: string;
  description: string;
}

const MainImageCard = ({ src, alt, href, description }: ImageCardProps) => {
  return (
    <div>
      <Link
        href={href}
        className="flex justify-center items-center flex-col gap-4 mb-4"
      >
        <Image width={400} height={300} src={src} alt={alt} />
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default MainImageCard;
