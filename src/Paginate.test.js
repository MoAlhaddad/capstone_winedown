import * as React from "react";
import { Table } from "antd";
import { format } from "date-fns";
import winelist from "./wineList.json";
// import testing utilities
import Paginate from "./components/Paginate";
import { render, fireEvent } from "@testing-library/react";
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

const TestPaginate = () => (
  <Paginate wineList={winelist.data} displayFavoriteWineColumn={true} />
);
/*
 * Do snapshot testing
 * Snapshot testing is like taking a picture of a react component.
 * Then compare it against another snapshot later on.
 */

describe("Paginate Testing", () => {
  it("Paginate", async () => {
    const component = render(<TestPaginate />);
    const expectedActiveColumnClassName = "ant-table-column-sort";
    // const expectedFirstRow = `<td class="ant-table-cell">Domaine De La Romanee Conti,Romanee Conti Grand Cru</td><td class="ant-table-cell">2005</td><td class="ant-table-cell">100.00</td><td class="ant-table-cell">A+</td><td class="ant-table-cell">4</td><td class="ant-table-cell ant-table-column-sort">France</td><td class="ant-table-cell">No</td><td class="ant-table-cell">2021/10/04 12:18 a.m.</td>`;
    const countrySorter = component.getByText("COUNTRY");

    fireEvent(
      countrySorter,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    const countriesOnPage1 = component.container.querySelectorAll(
      ".ant-table-row.ant-table-row-level-0"
    );
    expect(
      countrySorter.parentNode.parentNode.className.includes(
        expectedActiveColumnClassName
      )
    ).toEqual(true);
    // expect(countriesOnPage1[0].innerHTML).toEqual(expectedFirstRow);
  });
});
