import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../../components/ui/input";

describe("Input Component", () => {
  it("renders with correct placeholder and type", () => {
    const testPlaceholder = "Test Placeholder";
    const testName = "testName";
    const testValue = "";
    const testType = "text";

    render(
      <Input
        placeholder={testPlaceholder}
        name={testName}
        type={testType}
        value={testValue}
        handleChange={() => {}}
      />
    );

    const inputElement = screen.getByPlaceholderText(testPlaceholder);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", testType);
  });

  it("is disabled when disabled prop is true", () => {
    render(
      <Input
        placeholder="Disabled Input"
        name="disabledInput"
        type="text"
        value=""
        disabled={true}
        handleChange={() => {}}
      />
    );

    const inputElement = screen.getByPlaceholderText("Disabled Input");
    expect(inputElement).toBeDisabled();
  });

  it("calls handleChange on change with the correct arguments", () => {
    const handleChangeMock = jest.fn();
    const testName = "testInput";
    const testValue = "New Value";

    render(
      <Input
        placeholder="Test Input"
        name={testName}
        type="text"
        value=""
        handleChange={handleChangeMock}
      />
    );

    const inputElement = screen.getByPlaceholderText("Test Input");
    fireEvent.change(inputElement, { target: { value: testValue } });

    expect(handleChangeMock).toHaveBeenCalledWith(expect.anything(), testName);
    expect(handleChangeMock).toHaveBeenCalledWith(expect.any(Object), testName);
  });
});
