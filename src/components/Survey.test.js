import React from 'react';  
import Survey from "Survey.js";



describe("Survey", () => {
    it("rendered Survey", () => {
      const { getByTestId } = render(<Survey />);
      const Survey = getByTestId("Survey");
      expect(Survey).toBeTruthy();
    });
  });
  