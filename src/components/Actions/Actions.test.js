import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Actions from "./Actions";

describe("Given an Actions component", () => {
  describe("When it receives a function action", () => {
    test("Then it should render a a 'call' element", () => {
      const expectedText = "Call";

      render(<Actions />);
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});
