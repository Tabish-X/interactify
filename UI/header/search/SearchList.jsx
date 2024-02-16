import { recentSearches } from "@/data/placeholder";
import Link from "next/link";
import { FaCaretUp, FaRegClock, FaX } from "react-icons/fa6";

export default function SearchList() {
  return (
    <div className="absolute top-16 left-1/2 -translate-x-1/2 h-fit w-80 z-1">
      <span className='text-[30px] absolute -top-4 left-1/2 -translate-x-1/2 text-white '><FaCaretUp /> </span>
      <div className="w-full h-full bg-white rounded-md shadow-md ">
        <div className="flex flex-col items-center justify-center w-full h-full py-2">
          <div className="flex items-center justify-between w-full h-10 px-4">
            <h3 className="text-base font-semibold text-black">Recent Searches</h3>
            <button type="button" className="text-xs font-lite text-blue-600 transition-colors duration-75 hover:bg-hover-overlay-1 p-[6px] rounded-sm">Clear</button>
          </div>

          <div className="flex flex-col gap-0 w-full h-fit px-2">
            {
              recentSearches.map(({ link, search }) => (
                <Link href={link} className="h-12 bg-transparent hover:bg-hover-overlay-2 rounded-md" key={search}>
                  <div className="h-full flex flex-grow items-center justify-center px-2">
                    <div className="flex flex-grow gap-2 items-center">
                      <span className="rounded-full p-1 text-xl text-placeholder-1 bg-body-overlay">
                        <FaRegClock />
                      </span>

                      <span className="text-sm text-black font-semibold ">
                        {search}
                      </span>
                    </div>

                    <span className="p-[6px] hover:bg-hover-overlay-3 rounded-full text-xs text-placeholder-1">
                      <FaX />
                    </span>
                  </div>
                </Link>
              ))
            }
          </div>

        </div>
        

        {/* <p className="text-sm text-placeholder-1 p-4 text-center">
          No recent searches
        </p> */}
      </div>
    </div>
  )
}
