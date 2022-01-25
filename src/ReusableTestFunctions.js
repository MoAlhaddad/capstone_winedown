import { render, fireEvent, waitFor } from "@testing-library/react";

export const defaultMouseEvent = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
});

export const inputEventOptions = (value) => ({ target: { value: value } });

export async function fireMouseEvent(element) {
  await waitFor(() => {
    fireEvent(
      element,
      new MouseEvent(
        "click" <
          {
            bubbles: true,
            cancelable: true,
          }
      )
    );
  });
}

export function typeTextIntoInput(element, value) {
  fireEvent.change(element, { target: { value: value } });
}

/* Function doesn't get the element for some reason */
/* NOT USING FUNCTION */
export async function assignElementsFromDomUsingQuerySelector(
  component,
  querySelectors
) {
  const result = [];
  await waitFor(() => {
    for (let i = 0; i < querySelectors.length; i++) {
      const currentQuerySelector = querySelectors[i];
      const currentElement =
        component.baseElement.querySelector(currentQuerySelector);
      result.push(currentElement);
    }
  });
  return result;
}
/* NOT USING FUNCTION */

export async function assignElementsFromDomUsingText(component, texts) {
  const result = [];
  await waitFor(() => {
    for (let i = 0; i < texts.length; i++) {
      const currentText = texts[i];
      const currentElement = component.getByText(currentText);
      result.push(currentElement);
    }
  });
  return result;
}
