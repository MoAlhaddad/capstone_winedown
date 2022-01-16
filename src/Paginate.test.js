import * as React from "react";
// import testing utilities
import Paginate from "./Paginate";
import wineList from "./wineList.json";
import renderer from "react-test-renderer";
import { render } from "@testing-libary/jest-dom/extend-expect";
import { getByTestId } from "@testing-library/react";

/*
 * Do snapshot testing
 * Snapshot testing is like taking a picture of a react component.
 * Then compare it against another snapshot later on.
 */
test("Paginate", () => {
  const component = render(<Paginate />);
  const headerEl = componenet.getByTestId("header");

  //Check the list items length are equal to 51
  expect(headerEl.textContent).toBe("My Paginate");
  // expect(component.root.f)
  expect(component).toMatchSnapshot();
});
