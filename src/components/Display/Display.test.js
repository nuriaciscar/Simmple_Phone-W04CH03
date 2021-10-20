import Display from "./Display";
import { render } from "@testing-library/react";

import { screen } from "@testing-library/react";

describe("Given a Display component", () => {
  describe("When it receives a '6789'", () => {
    test("Then it should display '6789'", () => {
      const number = 6789;
      const expectedNumber = 6789;

      render(<Display text={number} />);
      const textElement = screen.getByText(expectedNumber);

      expect(textElement).toBeInTheDocument();
    });
  });
});
