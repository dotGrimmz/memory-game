import { render } from "@testing-library/react";
import { PokeCard } from "./PokeCard";
import userEvent from "@testing-library/user-event";

describe("PokeCard", () => {
  it("should render poke card", () => {
    const { getByTestId } = render(<PokeCard />);

    const pokeCard = getByTestId("poke-card");
    expect(pokeCard).toBeDefined();
  });

  it.only("should show back image when user hovers over poke card", () => {
    const { getByTestId, debug } = render(<PokeCard />);
    const pokeCard = getByTestId("poke-card");
    const backImg = getByTestId("back-image");
    userEvent.hover(pokeCard);
    expect(backImg).toBeDefined();
  });
});
