import Info from "./Info";

describe("Given a Info component", () => {
  describe("When isCalling is true", () => {
    test("Then it should display 'Calling...'", () => {
      const isCalling = true;
      const expectedText = "Calling...";

      render(<Info isCallling={isCalling} />);
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});
