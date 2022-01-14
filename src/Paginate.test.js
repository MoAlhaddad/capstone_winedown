import * as React from 'react';
// import testing utilities
import Paginate from "./Paginate";
import wineList from "./wineList.json";
import renderer from 'react-test-renderer';

describe("Paginate", () => {
  it("rendered Pagination", () => {
    const assumedWineListLength = 51;
    const component = renderer.create(
     <Paginate wineList={wineList.data}  displayFavoriteWineColumn={true} />
    );
    //Check the list items length are equal to 51
    expect(component.root.props.wineList.length).toEqual(assumedWineListLength);
    // expect(component.root.f)
    expect(component).toMatchSnapshot();
  });
});
