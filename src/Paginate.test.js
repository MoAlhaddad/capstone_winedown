import * as React from "react";
import winelist from "./wineList.json";
// import testing utilities
import Paginate from "./components/Paginate";
import { defaultMouseEvent } from "./ReusableTestFunctions";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { screen } from 'rtl-simple-queries'
import "@testing-library/jest-dom";
// To prevent a TypeError: window.matchMedia is not a function
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

/*
 * Do snapshot testing
 * Snapshot testing is like taking a picture of a react component.
 * Then compare it against another snapshot later on.
*/
describe("Paginate Testing", () => {
  let component;
  let countrySorter;

  //Render component before all tests
  beforeAll(() => {
    component = render(<Paginate wineList={winelist.data} displayFavoriteWineColumn={true} />);
    countrySorter = component.getByText("COUNTRY");
  })

  it("Check if the sorter on the ant design table is active.", async () => {
    const expectedActiveColumnClassName = "ant-table-column-sort";
    
    fireEvent(countrySorter, defaultMouseEvent);
    
    expect(
      countrySorter.parentNode.parentNode.className.includes(
        expectedActiveColumnClassName
      )
    ).toBeTruthy();
  }); 

});