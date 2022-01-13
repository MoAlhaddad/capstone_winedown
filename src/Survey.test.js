import React from "react";
import Survey from "./components/Survey";
import renderer from "react-test-renderer";

describe("Survey", () => {
  it("rendered Survey", () => {
    const component = renderer.create(<Survey />);
    expect(component).toMatchSnapshot();
  });
});
