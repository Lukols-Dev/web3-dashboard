import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Container } from "lucide-react";

describe("Container Component", () => {
  it("renders its children correctly", () => {
    const childContent = "Test content";

    render(
      <Container>
        <p>{childContent}</p>
      </Container>
    );

    expect(screen.getByText(childContent)).toBeInTheDocument();
  });
});
