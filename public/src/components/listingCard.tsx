import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ListingCard({ data }: any) {
  console.log({ data });
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-center cursor-pointer"
      onClick={() => router.push(`/listing/${data.id}`)}
    >
      <div className="flex flex-col gap-2">
        <div>
          <Image
            src={data?.photos[0]}
            height={300}
            width={300}
            alt="listing"
            className="rounded-lg"
          />
        </div>
        <div>
          <h3>{data.title}</h3>
          <span>${data.price} night</span>
        </div>
      </div>
    </div>
  );
}
