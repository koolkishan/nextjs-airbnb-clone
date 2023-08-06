"use client";
import React, { useState } from "react";
import ImageUpload from "../common/ImageUpload";
import { userAppStore } from "airbnb/store/store";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

export default function Photos() {
  const { photos, setPhotos } = userAppStore();
  const handleUpload = (data) => {
    setPhotos([...photos, data.info.secure_url]);
  };
  return (
    <div className="flex gap-5 items-center justify-center flex-col h-full">
      <h2 className="font-semibold text-4xl">Add some photos of your house</h2>
      <p>
        You'll need 5 photos to get started. You can add more or make changes
        later.
      </p>
      <CldUploadButton
        options={{ multiple: true }}
        onUpload={handleUpload}
        uploadPreset="lxgz9s60"
      >
        <span className="bg-airbnb-gradient py-3 mt-5  px-5 text-white text-base font-medium rounded-md cursor-pointer">
          Upload
        </span>
      </CldUploadButton>

      <div className="grid grid-cols-3 gap-4 h-[55vh] overflow-auto pb-10 no-scrollbar">
        {photos.map((photo) => (
          <div className="relative h-36 w-[200px]" key={photo}>
            <Image src={photo} fill alt="upload" />
          </div>
        ))}
      </div>
    </div>
  );
}
