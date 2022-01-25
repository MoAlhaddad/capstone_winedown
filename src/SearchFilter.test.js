import * as React from "react";
// import testing utilities
import SearchFilter from "./components/SearchFilter";
import WinelistPage from "./containers/WineList";
import Paginate from "./components/Paginate";
import wineList from "./wineList.json";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { defaultMouseEvent, inputEventOptions } from "./ReusableTestFunctions";
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
  //Assign the component that would be rendered.
  let component;
  // let winelistPage;
  //Props to pass into component to be rendered
  const setWineList = (wines) => {
    currentWineList = wines;
  };
  let currentWineList = wineList.data;
  //Assign the button that would be tested before the tests.
  let countryFilter;
  let vintageFilter;
  let filterButton;

  beforeAll(async () => {
    // winelistPage = render(<WinelistPage />);
    component = render(
      <SearchFilter wineList={currentWineList} setWinelist={setWineList} />
    );
    // component = winelistPage.baseElement.querySelector('form#search-filter-form');

    await waitFor(() => {
      countryFilter = component.getByText("country");
      vintageFilter = component.getByText("vintage");
      filterButton = component.getByText("Filter");
    });
  });
  //Html element to be retrieved.
  let countryInput;
  let vintageInput;

  it("Check if a input hides when a filter is clicked twice.", async () => {
    fireEvent(countryFilter, defaultMouseEvent);

    fireEvent(vintageFilter, defaultMouseEvent);

    await waitFor(() => {
      countryInput = component.baseElement.querySelector("input#country");
      vintageInput = component.baseElement.querySelector("input#vintage");
    });

    fireEvent.change(countryInput, inputEventOptions("France"));
    fireEvent.change(vintageInput, inputEventOptions("2015"));

    //Close the vintage filter ,therefore making it inactive
    fireEvent(vintageFilter, defaultMouseEvent);

    await waitFor(() => {
      vintageInput = component.baseElement.querySelector("input#vintage");
    });
    
    fireEvent(filterButton, defaultMouseEvent);

    expect(vintageInput).toBeNull();
  });
});