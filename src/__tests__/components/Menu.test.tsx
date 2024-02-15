import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Menu from "../../components/Header/menu";

jest.mock("../../lib/constans", () => ({
  MENU: [
    {
      title: "Transfers",
      path: "/transfer",
    },
    {
      title: "Wallet Dashboard",
      path: "/wallet",
    },
  ],
}));

describe("Menu Component", () => {
  it("renders all menu items", () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    );

    const menuItems = screen.getAllByRole("link");
    expect(menuItems).toHaveLength(2);

    menuItems.forEach((item) => {
      const textContent = item.textContent;
      expect(item).toHaveTextContent(textContent as string);
      expect(item).toHaveAttribute("href", expect.any(String));
    });

    expect(screen.getByText("Transfers")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Transfers" })).toHaveAttribute(
      "href",
      "/transfer"
    );

    expect(screen.getByText("Wallet Dashboard")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Wallet Dashboard" })
    ).toHaveAttribute("href", "/wallet");
  });
});
