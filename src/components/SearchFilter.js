import { findByLabelText } from "@testing-library/dom";
import React, { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function SearchFilter({ wineList, setWinelist }) {
  const [sorter, setSorter ] = useState(" ") 
  const [filterOpts, setFilterOpts ] = useState({ filterValue: "", propertyToFilter: "" })

function handleChange(evt){
  const target = evt.target
  const value = target.value
  const copyFilterOpts = Object.assign({}, filterOpts)
}


  
  const filterItems = [
    { key: 1, label: "vintage", value: "" },

    { key: 2, label: "gws", value: "" },

    {
      key: 3,
      label: "ci",
      value: "",
    },

    {
      key: 4,
      label: "nbj",
      value: "",
    },
    {
      key: 5,
      label: "country",
      value: "",
    },
  ]
  return (
    <div style={{ display: "flex" }}>
      <label>Sort Wines</label>
      <select onSelect = { evt => {
        console.log(evt.target.value)
        setSorter(evt.target.value)
        const sortWines = wineList.sort( (wineA, wineB ) => wineA[evt.target.value] < wineB[evt.target.value] )
         setWinelist(sortWines);
      } }>
        {filterItems.map(filterItem => {
          return <option key={filterItem.key} value = {filterItem.label}>{filterItem.label}</option>
        })}
      </select>
      <div id={"search-filter"}
           style={{display: "flex" }}>
        <input id="searchValue"
           name="searchValue"
           onChange={handleChange}
           style={{width: '70%'}}
           
        />
         
         <select id="propertyToSearchFor"
          style={{width: '30%'}}
          onSelect={handleFilterSelectChange}
          value={filterOpts.propertyToFilter}>{filterItems.map(filterItem =>{
             return <option key={filterItem.key} value = {filterOpts.label}>{filterOpts.label}</option>
          })}
          </select>
        

      </div>
    </div>
  );
}

export default SearchFilter;
