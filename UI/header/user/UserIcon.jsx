"use client"

import Image from "next/image";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function UserIcon() {
    const [showDropdown, setShowDropdown] = useState(false)

    const handleClick = () => {
        setShowDropdown((prev) => !prev)
    }

    return (

        <div id="user-icon" className="relative z-1" onClick={handleClick}>
            <div className="w-10 h-10 rounded-md overflow-hidden border border-gray-400 ml-4 cursor-pointer transition-transform">
                <Image height={40} width={40} src={"/images/AvatarBlue.jpg"} alt="Logged in user" className="w-full h-full object-cover block m-auto" />
            </div>

            {
                showDropdown && <Dropdown />
            }
        </div>
    )
}
