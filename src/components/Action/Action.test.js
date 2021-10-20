import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Action from "./Action";

describe("Given an Action component", () => {
  describe("When it receives a 'call' text", () => {
    test("Then it should execute a function displaying an anchor", () => {
      const action = jest.fn();
      const expectedText = "call";

      render(
        <Action
          href={"call"}
          text={"call"}
          className={"call"}
          actionOnClick={action}
        />
      );
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});
