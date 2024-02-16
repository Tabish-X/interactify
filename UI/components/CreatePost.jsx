"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCaretDown, FaEarthAsia, FaX } from "react-icons/fa6";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "@/styles/module.components.css";
import UploadPostImages from "./UploadPostImages";

export default function CreatePost({ close }) {
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const disable =
    (content.substring(3).length > 4 && content.substring(3) != "<br></p>") ||
    images.length > 0;

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <main className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-1 ">
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-65 blur-md -z-1 " />
      <div className="flex justify-center min-w-0 items-start px-2 min-h-[500px] py-14">
        <div className=" max-w-full flex flex-col relative z-0 outline-none rounded-lg bg-white shadow-div-overlay ">
          <form>
            <div className="h-[490px] w-[500px] relative flex flex-col justify-between">
              <div className="relative">
                <button
                  onClick={() => close(false)}
                  type="button"
                  className="absolute text-xl top-3 right-3 p-2 rounded-full bg-gray-100 transition-colors hover:bg-hover-overlay-3 text-placeholder-1"
                >
                  <FaX />
                </button>
                <div className="w-full h-15 flex items-center justify-center border-b">
                  <h3 className="text-2xl font-bold text-black">Create Post</h3>
                </div>
                <div className="p-4 flex gap-2 items-center ">
                  <div className="w-12 h-12 block rounded-full overflow-hidden">
                    <Image
                      height={40}
                      width={40}
                      alt="user"
                      src={"/images/AvatarBlue.jpg"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-sm text-black font-semibold">
                      Tabish Web
                    </h3>
                    <button
                      type="button"
                      className="flex items-center justify-between px-2 py-1 bg-gray-200 rounded-md gap-1"
                    >
                      <span className="text-sm text-black ">
                        <FaEarthAsia />
                      </span>
                      <span className="text-xs text-black font-semibold">
                        Public
                      </span>
                      <span className="text-xs text-black">
                        <FaCaretDown />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="scrolling max-h-[280px] h-full overflow-y-auto ">
                <ReactQuill
                  modules={{
                    toolbar: [
                      [{ header: "1" }, { header: "2" }],

                      ["bold", "italic", "underline", "blockquote"],
                      ["link"],
                      ["clean"],
                    ],
                  }}
                  onChange={setContent}
                  theme="snow"
                  placeholder="What's on your mind, Tabish?"
                />
                <UploadPostImages images={images} setImages={setImages} />
              </div>

              <div className="p-4 space-y-4 ">
                <button
                  disabled={!disable}
                  className="btn-primary w-full disabled:bg-body-overlay disabled:select-none disabled:cursor-not-allowed disabled:hover:bg-body-overlay disabled:text-placeholder-1"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
