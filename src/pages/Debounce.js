import React, { useMemo } from "react";
import _ from "lodash";
import { useSearchParam } from "react-use";

const SearchBox = ({ data }) => {
  const searchKey = useSearchParam("key") || "";
  const filtered = useMemo(() => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(searchKey.toLocaleLowerCase())
    );
  }, [searchKey, data]);

  const handleSearch = _.debounce((evt) => {
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?key=${evt.target.value}`
    );
  }, 300);

  return (
    <div className="08-filter-list">
      <h2>Movies (Debounced Search)</h2>
      <input
        defaultValue={searchKey}
        placeholder="Search..."
        onChange={handleSearch}
      />
      <ul style={{ marginTop: 20 }}>
        {filtered.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default () => {
  const data = [
    { id: 1, title: "Mein Kampf" },
    { id: 2, title: "Tumannost Andromedy" },
    { id: 3, title: "Thermae romae (Thermae Romae" },
    { id: 4, title: "White Banners" },
    { id: 5, title: "Train, The" },
    { id: 6, title: "Julia and Julia (Giulia e Giulia)" },
    { id: 7, title: "Can go Through Skin (Kan door huid heen)" },
    { id: 8, title: "Two Moon Junction" },
    { id: 9, title: "Bill & Ted's Bogus Journey" },
    { id: 10, title: "iSteve" },
  ];
  return <SearchBox data={data} />;
};
