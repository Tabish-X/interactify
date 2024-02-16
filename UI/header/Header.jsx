import UserIcon from "./user/UserIcon";
import Branding from "./Branding";
import SearchInput from "./search/SearchInput";
import CreatePostButton from "./CreatePostButton";

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

            <CreatePostButton />

            <UserIcon />

          </div>


        </div>

      </div>

    </header>
  )
}
