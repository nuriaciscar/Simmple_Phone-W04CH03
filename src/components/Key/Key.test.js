import Key from "./Key";
import { render } from "@testing-library/react";

import { screen } from "@testing-library/react";

describe("Given a Keyboard component", () => {
  describe("When it executes the function actionOnclick", () => {
    test("Then it should display '1'", () => {
      const expectedNumber = 1;

      render(<Key actionOnClick={() => {}} />);
      const textElement = screen.getByText(expectedNumber);

      expect(textElement).toBeInTheDocument();
    });
  });
});
