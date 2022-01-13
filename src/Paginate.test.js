import * as React from "react";
// import testing utilities
import Paginate from "./components/Paginate";
import wineList from "./wineList.json";
import renderer from "react-test-renderer";

describe("Paginate", () => {
  it("rendered Pagination", () => {
    const component = renderer.create(
      <Paginate wineList={wineList.data} displayFavoriteWineColumn={true} />
    );
    expect(component).toMatchSnapshot();
  });
});
