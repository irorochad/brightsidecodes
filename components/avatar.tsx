import React from "react";
import Image from "next/image";
import { ImageField } from "@prismicio/client";

type AvatarProps = {
  name: string;
  picture: ImageField;
};

export default function Avatar({ name, picture }: AvatarProps) {
  const imageUrl = picture.url; // Assuming `url` is the property containing the image URL

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src={imageUrl}
          alt="Avatar"
          className="rounded-full"
          priority={true}
          width={100}
          height={40}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
