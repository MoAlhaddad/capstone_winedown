import * as React from "react";
// import testing utilities
import SearchFilter from "./components/SearchFilter";
import wineList from "./wineList.json";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// test('renders the search filter', () => {
//   const {container, getByText} = render(<Greeting />)
//   const component = render(
//     <SearchFilter wineList={wineList.data} setWinelist={setWineList} />
//    );
//    expect(component).toMatchSnapshot();
// })

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

describe("SearchFilter", () => {
  let currentWineList = wineList.data;

  it("Check if the inputs and buttons are acting correctly", async () => {
    const setWineList = (wines) => {
      currentWineList = wines;
    };
    const component = render(
      <SearchFilter wineList={currentWineList} setWinelist={setWineList} />
    );
    const countryFilter = await component.getByText("country");
    const vintageFilter = await component.getByText("vintage");
    fireEvent(
      countryFilter,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    fireEvent(
      vintageFilter,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    const countryInput = await component.baseElement.querySelector("input#country");
    const vintageInput = await component.baseElement.querySelector("input#vintage");
    fireEvent.change(countryInput, { target: { value: "France" } });
    fireEvent.change(vintageInput, { target: { value: "2015" } });
    const expectedUnactiveFilterClassName = `btn not-active`;
      //Close the vintage filter ,therefore making it inactive
    fireEvent(
      vintageFilter,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(vintageFilter.className).toEqual(expectedUnactiveFilterClassName);    
  });
});