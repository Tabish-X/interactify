import { FaPlus } from "react-icons/fa6"
import UserIcon from "./user/UserIcon";
import Branding from "./Branding";
import SearchInput from "./search/SearchInput";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full">

      <div className="bg-white shadow-sm px-6">
        <div className="h-header-height w-full min-w-0 max-w-screen flex items-center justify-between flex-grow">

          {/* Logo */}
          <Branding />

          <div className="flex items-center">
            {/* Search */}
            <SearchInput />

            <button className="btn-primary !px-3 flex items-center justify-center ml-4 ">
              <span className="p-[2px] border border-lite-2 text-lite-2 text-xs mr-2 rounded-sm">
                <FaPlus />
              </span>

              <span>
                Create
              </span>

            </button>

            <UserIcon />

          </div>


        </div>

      </div>

    </header>
  )
}
