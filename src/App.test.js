import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders the app component", () => {
    const { getByTestId, debug } = render(<App />);
    debug();
    // const component = getByTestId("app-component");
    // expect(component).toBeDefined();
  });
});
