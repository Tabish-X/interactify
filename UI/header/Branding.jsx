import Link from 'next/link'
import React from 'react'
import { BsGlobe2 } from 'react-icons/bs'

export default function Branding() {
    return (
        <Link href="/" className="h-14 w-auto flex items-center overflow-hidden">

            <div className="h-12 w-fit flex items-center justify-center gap-2 ">
                <span className="text-3xl items-center flex justify-center bg-red-50 p-2 rounded-md text-red-1">
                    <BsGlobe2 />
                </span>
                <span className="font-bold text-2xl text-black font-Ubuntu">
                    Interactify
                </span>

            </div>

        </Link>
    )
}
