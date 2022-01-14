import * as React from 'react';
// import testing utilities
import Survey from "./Survey";
import renderer from 'react-test-renderer';


describe("Survey", () => {
  it("rendered Survey", () => {
    const component = renderer.create(
     <Survey />
    );
    expect(component).toMatchSnapshot();
  });
});
