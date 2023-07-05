import React, { useState } from "react";
import ImageUpload from "../common/ImageUpload";
import { userAppStore } from "airbnb/store/store";

export default function Photos() {
  const { photos, setPhotos } = userAppStore();
  return (
    <div className="flex gap-5 items-center justify-center flex-col h-full">
      <h2 className="font-semibold text-4xl">Add some photos of your house</h2>
      <p>
        You'll need 5 photos to get started. You can add more or make changes
        later.
      </p>
      <ImageUpload files={photos} setFile={setPhotos} />
    </div>
  );
}
