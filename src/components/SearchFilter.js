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
    propertiesToFilter: {
      vintage: {
        value: "",
        active: false,
      },
      gws: {
        value: "",
        active: false,
      },
      ci: {
        value: "",
        active: false,
      },
      nbj: {
        value: "",
        active: false,
      },
      country: {
        value: "",
        active: false,
      },
    },
    typeOfComparison: "or",
  });

  const [selectedFilters, setSelectedFilters] = useState([]);
  const selectedFiltersSet = React.useRef(new Set());

  const handleChange = (evt) => {
    const target = evt.target;
    const targetId = target.id;
    const value = target.value;
    const copyOfFilters = Object.assign({}, filter);
    copyOfFilters.propertiesToFilter[targetId].value = value;
    setFilterForm(copyOfFilters);
  };

  const handleCheckboxChange = (evt) => {
    const target = evt.target;
    const value = target.checked;
    const copyOfFilters = Object.assign({}, filter);
    copyOfFilters.typeOfComparison = value ? "and" : "or";
    setFilterForm(copyOfFilters);
  };

  const onFilter = async (evt) => {
    evt.preventDefault();
    const wineResponse = await WineApi.filterWines({
      filters: filter.propertiesToFilter,
      typeOfComparison: filter.typeOfComparison,
    });
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
    <form
      style={{ display: "flex", justifyContent: "space-between" }}
      onSubmit={onFilter}
    >
      <div id={"search-filter"} style={{ display: "flex" }}>
        {filterItems.map((filterItem) => (
          <div
            key={filterItem.key}
            style={{ marginRight: "10px", display: "flex" }}
          >
            {selectedFilters.some((sf) => parseInt(sf) === filterItem.key) ? (
              <input
                id={filterItem.label}
                onChange={handleChange}
                placeholder={`By ${filterItem.label}`}
                value={filter.propertiesToFilter[filterItem.key]}
                style={{ padding: "5px", width: "100px" }}
              />
            ) : null}
            <button
              type="button"
              id={filterItem.key}
              onClick={(event) => {
                const copyOfFilters = Object.assign({}, filter);
                const hasSelectedFilter = selectedFiltersSet.current.has(
                  event.target.id
                );
                if (hasSelectedFilter) {
                  selectedFiltersSet.current.delete(event.target.id);
                  copyOfFilters.propertiesToFilter[
                    filterItem.label
                  ].active = false;
                } else {
                  selectedFiltersSet.current.add(event.target.id);
                  copyOfFilters.propertiesToFilter[
                    filterItem.label
                  ].active = true;
                }
                setSelectedFilters(Array.from(selectedFiltersSet.current));
                setFilterForm(copyOfFilters);
              }}
              className={`btn ${
                selectedFilters.some((sf) => parseInt(sf) === filterItem.key)
                  ? "active"
                  : "not-active"
              }`}
            >
              {filterItem.label}
            </button>
          </div>
        ))}
        <div>
          And
          <br /> Comparison
          <input
            type="Checkbox"
            checked={filter.typeOfComparison === "and"}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
      <div>
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
      </div>
    </form>
  );
}
