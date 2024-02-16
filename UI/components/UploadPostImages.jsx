"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FaImages, FaX } from "react-icons/fa6";

export default function UploadPostImages({ images, setImages }) {
  const [imagesPreview, setImagesPreview] = useState([]);
  const imageRef = useRef();

  const handleImagesPreview = async (e) => {
    const image = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(image);
    fileReader.onload = () => {
      setImagesPreview([...imagesPreview, fileReader.result]);
    };
    fileReader.onerror = () => {
      alert("Error: " + fileReader.result);
    };

    setImages([...images, image]);
  };

  return (
    <>
      <div className="py-4 pl-4 pr-2 mt-3">
        <div className="mb-0 overflow-hidden flex items-center justify-center relative border rounded-lg">
          <div className="flex min-h-0 max-w-full flex-shrink flex-col relative z-0 flex-grow">
            <div className="flex min-h-0 flex-col relative z-0 flex-grow ">
              <div
                className="mt-0 max-w-full flex flex-col flex-shrink-0 relative z-0 "
                style={{ padding: imagesPreview.length ? "10px" : "16px" }}
              >
                <input
                  ref={imageRef}
                  onChange={handleImagesPreview}
                  type="file"
                  accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv"
                  hidden
                />

                {imagesPreview.length ? (
                  <>
                    <ImagesPreview
                      images={imagesPreview}
                      imagesRef={imageRef}
                    />
                    <button
                      onClick={() => {
                        setImagesPreview([]);
                        setImages([]);
                      }}
                      type="button"
                      className="absolute text-xl top-4 right-4 p-2 rounded-full bg-white border border-slate-200 transition-colors hover:bg-gray-100 text-placeholder-1 z-1"
                    >
                      <FaX />
                    </button>
                    {imagesPreview.length >= 4 ? (
                      ""
                    ) : (
                      <button
                        onClick={() => imageRef.current.click()}
                        type="button"
                        className="absolute top-4 left-4 px-2 py-1 rounded-md bg-white border border-slate-200 transition-colors hover:bg-gray-100 text-black text-sm font-semibold z-1"
                      >
                        Add More
                      </button>
                    )}
                  </>
                ) : (
                  <div
                    onClick={() => imageRef.current.click()}
                    className="p-0 m-0 min-w-0 min-h-0 bg-transparent touch-manipulation basis-auto inline-flex flex-shrink-0 cursor-pointer items-stretch flex-row relative z-0 "
                  >
                    <div className="w-full flex relative ">
                      <div className="w-full overflow-hidden relative z-0 max-h-[221px] h-[25vh] min-h-[150px] bg-[#f7f8fa] rounded-lg">
                        <div className="h-full max-w-full flex-col flex relative z-0 ">
                          <div className="min-h-0  flex justify-center relative z-0 flex-grow flex-col items-center ">
                            <div className="text-2xl h-10 w-10 flex items-center justify-center rounded-full text-black bg-gray-300 mb-2">
                              <FaImages />
                            </div>
                            <h3 className="text-lg font-semibold text-black">
                              Add Images or Pictures
                            </h3>
                            <span className="text-xs text-gray-400 ">
                              or drag and drop
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ImagesPreview({ images }) {
  const length = Object.values(images).length;
  const image_inset_01 =
    length === 1
      ? "calc(0% + 0px)"
      : length === 2
      ? "calc(0% + 0px) calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px)"
      : length === 3
      ? "calc(0% + 0px) calc(0% + 0px) calc(50% + 1.01px)"
      : "calc(0% + 0px) calc(50% + 1.01px) calc(50% + 1.01px) calc(0% + 0px)";

  const image_inset_02 =
    length === 2
      ? "calc(0% + 0px) calc(0% + 0px) calc(0% + 0px) calc(50% + 1.01px)"
      : length === 3
      ? "calc(50% + 1.01px) calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px)"
      : "calc(0% + 0px) calc(0% + 0px) calc(50% + 1.01px) calc(50% + 1.01px)";

  const image_inset_03 =
    length === 3
      ? "calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px) calc(50% + 1.01px)"
      : "calc(50% + 1.01px) calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px)";

  const image_inset_04 =
    "calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px) calc(50% + 1.01px)";

  const insets = [
    image_inset_01,
    image_inset_02,
    image_inset_03,
    image_inset_04,
  ];

  return (
    <div
      role="group"
      aria-label="attached-media"
      className="w-full overflow-hidden relative rounded-lg "
    >
      <div
        className="relative rounded-lg overflow-hidden"
        style={{ height: images.length == 2 ? "233px" : "466px" }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="flex overflow-hidden justify-center items-center absolute "
            style={{ inset: insets[i] }}
          >
            <div className="w-full h-full relative ">
              <Image
                width={40}
                height={50}
                src={img}
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
