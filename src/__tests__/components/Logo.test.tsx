import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Logo from "../../components/Header/logo";

describe("Logo Component", () => {
  it("renders the logo and checks if it has a link to the home page", () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    expect(screen.getByRole("img", { name: "Logo" })).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });
});
