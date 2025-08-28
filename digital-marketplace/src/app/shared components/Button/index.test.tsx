import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button, buttonVariants } from "../Button";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click me");
    expect(button).toHaveClass(buttonVariants({ variant: "default", size: "default" }));
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Hello</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("renders different variants", () => {
    render(<Button variant="destructive">Danger</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-destructive");
  });

  it("renders different sizes", () => {
    render(<Button size="lg">Large</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("h-11");
  });

  it("renders as child (Slot)", () => {
    render(
      <Button asChild>
        <a href="/test">Go</a>
      </Button>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("Go");
  });

  it("forwards refs", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref test</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("handles disabled state", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});