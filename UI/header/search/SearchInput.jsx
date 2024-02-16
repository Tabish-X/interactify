"use client"

import { useRef, useState } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"
import SearchList from "./SearchList"

export default function SearchInput() {
    const [searchList, setSearchList] = useState(false)
    const ref = useRef()

    return (
        <div className="relative z-1 w-full">
            <label onClick={() => ref.current.focus()} id="search-div" className="w-72 h-10 bg-body-overlay flex items-center relative rounded-lg overflow-hidden cursor-pointer z-[1] ">
                <span id="icon" className="absolute top-0 left-0 flex items-center justify-center w-8 h-full text-placeholder-1 ml-0 z-0 ">
                    <FaMagnifyingGlass />
                </span>

                <input onFocus={() => setSearchList(true)} onBlur={() => setSearchList(false)} ref={ref} id="search" type="text" placeholder="Search..." className="w-full py-2 pr-2 pl-8 text-sm text-placeholder-2 font-normal outline-none border-none bg-transparent" />

                <div id="border" className="absolute bottom-0 left-0 w-full h-[1.5px] bg-red-1 transition-transform duration-100 origin-bottom scale-y-0" />
            </label>
            {searchList && <SearchList />}
        </div>
    )
}
