import Image from 'next/image'
import Link from 'next/link'
import { FaCaretUp, FaPowerOff } from 'react-icons/fa6'

export default function Dropdown() {
    return (
        <div id='dropdown' className='absolute top-16 -right-2 w-80 max-h-40 -z-1'>
            <span className='text-[30px] absolute -top-4 right-3 text-white '><FaCaretUp /> </span>
            <div className='w-full h-full rounded-md shadow-md bg-white'>
                <div className='flex flex-col items-center justify-center w-full h-full'>
                    <div className='flex items-center justify-between w-full p-4 '>
                        <div className='h-20 w-20 bg-slate-200 rounded-full overflow-hidden border border-gray-400'>
                            <Image height={80} width={80} alt='user' src={"/images/AvatarBlue.jpg"} className='w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col justify-center max-w-48'>
                            <h2 className='text-lg font-bold text-black '>Tabish WebDev</h2>
                            <p className='text-placeholder-1 text-xs text-wrap'>tabishalishamsi787@gmail.com</p>
                            <Link href={"/"} className='text-blue-500 text-xs hover:underline'>My Profile</Link>
                        </div>


                    </div>

                    <div className='w-full h-fit'>
                        <div className='w-full h-full px-4 rounded-b-md border-t '>
                            <div className='w-full h-full flex items-center'>
                                <button className='text-placeholder-1 py-3 w-full flex gap-2 hover:text-red-500 transition-colors duration-100'>
                                    <span className='text-lg text-inherit '>
                                        <FaPowerOff />
                                    </span>
                                    <span className='text-xs text-inherit font-semibold'>
                                        Sign Out
                                    </span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
