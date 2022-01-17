import * as React from "react";
// import testing utilities
import Survey from "./components/Survey";
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

describe("Survey", () => {
  it("rendered Survey", () => {
    const component = render(<Survey />);
    const expectedNextQuestion = "What wine type do you prefer?";
    const countryAnswer = component.getByText("France");
    fireEvent(
      countryAnswer,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    //It would go the next question, if it doesn't will fail the test since it can't find the component
    const nextQuestion = component.getByText(expectedNextQuestion);
    expect(nextQuestion.innerHTML.trim() !== "").toBeTruthy();
  });
});