import * as React from "react";
// import testing utilities
import Survey from "./components/Survey";
import { defaultMouseEvent } from "./ReusableTestFunctions";
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
  //Render components before tests
  let component;
  let countryAnswer;
  
  beforeAll(() => {
    component = render(<Survey />);
    countryAnswer = component.getByText("France");
  })

  it("Check if it goes to the next question.", () => {
    const expectedNextQuestion = "What wine type do you prefer?";
    fireEvent(countryAnswer, defaultMouseEvent);
    //It would go the next question, if it doesn't will fail the test since it can't find the component
    const nextQuestion = component.getByText(expectedNextQuestion);
    expect(nextQuestion.innerHTML.trim() !== "").toBeTruthy();
  });
});