import React, { useState, useEffect } from "react";
import WineApi from "../api/wineapi";

import SearchFilter from "src\components\SearchFilter.js";
import { render, fireEvent, queryByTitle } from "@testing-library/react";


describe("Search Filter", () => {
  it("rendered search filter", () => {
    const { getByTestId } = render(<SearchFilter />);
    const SearchFilter = getByTestId("search-filter");
    expect(SearchFilter).toBeTruthy();
  });
});
