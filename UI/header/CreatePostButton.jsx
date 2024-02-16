"use client"

import { useState } from "react"
import CreatePost from "../components/CreatePost"
import { FaPlus } from "react-icons/fa6"


export default function CreatePostButton() {
    const [postComponent, setComponent] = useState(false)
    return (
        <>
            <button onClick={() => setComponent(true)} className="btn-primary !px-3 flex items-center justify-center ml-4 ">
                <span className="p-[2px] border border-lite-2 text-lite-2 text-xs mr-2 rounded-sm">
                    <FaPlus />
                </span>
                <span>
                    Create
                </span>
            </button>

            {postComponent && <CreatePost close={setComponent} />}
        </>
    )
}
