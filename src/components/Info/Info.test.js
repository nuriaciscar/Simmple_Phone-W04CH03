import Info from "./Info.js";
import { render } from "@testing-library/react";

import { screen } from "@testing-library/react";

describe("Given a Info component", () => {
  describe("When isCalling is true", () => {
    test("Then it should display 'Calling...'", () => {
      const isCalling = true;
      const expectedText = "Calling...";

      render(<Info isCalling={isCalling} />);
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});
