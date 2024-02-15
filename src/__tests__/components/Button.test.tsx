import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/ui/button";

describe("Button Component", () => {
  it("renders children correctly", () => {
    const buttonText = "Click me";
    render(<Button>{buttonText}</Button>);

    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it("applies given className", () => {
    const testClassName = "test-class-name";
    render(<Button className={testClassName}>Button</Button>);

    expect(screen.getByRole("button")).toHaveClass(testClassName);
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Button</Button>);

    fireEvent.click(screen.getByText("Button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
