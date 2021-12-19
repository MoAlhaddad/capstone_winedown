import React, { useState, useEffect } from "react";
import WineApi from "../api/wineapi";

const filterItems = [
  { key: 1, label: "vintage" },
  { key: 2, label: "gws" },
  {
    key: 3,
    label: "ci",
  },
  {
    key: 4,
    label: "nbj",
  },
  {
    key: 5,
    label: "country",
  },
];

export default function SearchFilter({ wineList, setWinelist }) {
  const [filter, setFilterForm] = useState({
    propertyToFilter: filterItems[0].label,
    filterData: "",
  });
  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.type == "checkbox" ? target.checked : target.value;
    const copyOfFilter = Object.assign({}, filter);
    copyOfFilter.filterData = value;
    setFilterForm(copyOfFilter);
  };

  const handleSelectChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const copyOfFilter = Object.assign({}, filter);
    copyOfFilter.propertyToFilter = value;
    setFilterForm(copyOfFilter);
  };

  const onFilter = async (evt) => {
    evt.preventDefault();
    const wineResponse = await WineApi.filterWines(filter);
    setWinelist(wineResponse.filteredWines);
  };

  const resetToOriginalWineList = async (evt) => {
    evt.preventDefault();
    const wineResponse = await WineApi.getWines();
    setFilterForm({
      propertyToFilter: filterItems[0].label,
      filterData: "",
    });
    setWinelist(wineResponse.wines);
  };

  return (
    <form style={{ display: "flex" }} onSubmit={onFilter}>
      <div id={"search-filter"} style={{ display: "flex" }}>
        <input
          id="searchValue"
          name="searchValue"
          onChange={handleChange}
          placeholder="Filter winedown list"
          value={filter.filterData}
          style={{ width: "70%" }}
        />
        <select
          id={"propertyToSearchFor"}
          style={{ width: "30%" }}
          onChange={handleSelectChange}
          defaultValue={filter.propertyToFilter}
          value={filter.propertyToFilter}
        >
          {filterItems.map((filterItem) => {
            return (
              <option key={filterItem.key} value={filterItem.label}>
                {filterItem.label}
              </option>
            );
          })}
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "120px" }}
      >
        Filter
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        style={{ width: "120px" }}
        onClick={resetToOriginalWineList}
      >
        Reset
      </button>
    </form>
  );
}
