import { FaSearch } from "react-icons/fa"

const SearchBar = () => {
  return (
    <div>
        <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search ..."
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
          />
          <button className="absolute right-2 top-1 text-white bg-orange-500 p-2 rounded-full">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar