// Hook
import { useState, useRef, useEffect } from "react";

// Redux
import { useSelector } from "react-redux";
import { setSearch } from "../../../redux/slices/inputSlice";
import store from "../../../redux/store";

const SeachInput = ({ isSearch, setIsSearch }) => {
  const { search } = useSelector((state) => state.input);

  const searchInputRef = useRef();

  const setSearchValue = (value) => {
    store.dispatch(setSearch(value));
  };

  const emptySearchValue = (event) => {
    event.preventDefault();

    store.dispatch(setSearch(""));

    searchInputRef.current.focus();
  };

  const openSeachHandler = (event) => {
    event.preventDefault();

    setIsSearch(true);
  };

  useEffect(() => {
    if (isSearch) {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  }, [isSearch]);

  const closeSearchHandler = (event) => {
    if (event.code === "Escape") {
      setIsSearch(false);
    }
  };

  return (
    <div
      onKeyDown={closeSearchHandler}
      className="flex justify-center fixed inset-0 backdrop-blur-xl z-10 bg-[#1d1d1d4d]"
    >
      <div className="px-0 mt-20 h-fit w-1/3">
        <div className="bg-white rounded-lg overflow-hidden">
          <form action="#">
            <input
              ref={searchInputRef}
              value={search}
              onChange={(event) => setSearchValue(event.target.value)}
              className="w-full outline-none border-none p-4 text-xl rounded-lg"
              placeholder="Search..."
              type="text"
            />
          </form>
          <div className="flex flex-col gap-2 text-center py-4">
            <div className="text-[#1d1d1d]">
              <h6 className="text-lg font-bold">Nothing found</h6>
              <p className="text-[#404040] font-medium">
                Try to search for something else
              </p>
            </div>
            <button
              onClick={emptySearchValue}
              className="font-medium opacity-75"
            >
              Clear search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeachInput;
