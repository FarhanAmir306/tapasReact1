import CheckBox from "./CheckBox";
import { PropTypes } from "prop-types";


function SearchBar({ search, setSearch }) {
  return (
    <input
      className="w-80 h-12 rounded-lg ps-5 p-2 shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out placeholder-gray-400 text-gray-700"
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

SearchBar.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
  
};

export default SearchBar;
