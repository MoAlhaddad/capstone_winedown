import * as React from 'react';
// import testing utilities
import SearchFilter from "./SearchFilter";
import wineList from "./wineList.json";
import renderer from 'react-test-renderer';

let stupidWineList = [];
describe("SearchFilter", () => {
  it("rendered SearchFilter", () => {
    const setWineList = (wines) => { stupidWineList = wines };
    const component = renderer.create(
     <SearchFilter wineList={wineList.data} setWinelist={setWineList} />
    );
    expect(component).toMatchSnapshot();
  });
});
