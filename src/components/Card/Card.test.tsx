import { screen } from "@testing-library/react";
import { imageMock } from "../../mocks/imageMock";
import { renderRouterWithProviders } from "../../testUtils/testUtils";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it renders", () => {
    test("Then it should show an image of the prompt", () => {
      renderRouterWithProviders(<Card image={imageMock} />);
      // renderRouterWithProviders(<Card image={imageMock} />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a heading with the text 'Abstract Chameleon'", () => {
      renderRouterWithProviders(<Card image={imageMock} />);

      // renderRouterWithProviders(<Card image={imageMock} />);

      const headingText = "Abstract Chameleon";

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
