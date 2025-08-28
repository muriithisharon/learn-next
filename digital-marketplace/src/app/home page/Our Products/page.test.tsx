import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import OurProducts from "./page";

describe("OurProducts component", () => {
  it("renders the 'Our Products' label", () => {
    render(<OurProducts />);
    expect(screen.getByText("Our Products")).toBeInTheDocument();
  });

  it("renders the heading 'Explore Our Products'", () => {
    render(<OurProducts />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Explore Our Products" })
    ).toBeInTheDocument();
  });

  it("renders all product names", () => {
    render(<OurProducts />);
    [
      "Breed Dry Dog Food",
      "CANON EOS DSLR Camera",
      "ASUS FHD Gaming Laptop",
      "Curology Product Set",
      "Kids Electric Car",
      "Jr. Zoom Soccer Cleats",
      "GP11 Shooter USB Gamepad",
      "Quilted Satin Jacket",
    ].forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it("renders 8 product cards", () => {
    render(<OurProducts />);
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(8);
  });

  it("shows 'NEW' badge for new products only", () => {
    render(<OurProducts />);
    expect(screen.getAllByText("NEW")).toHaveLength(2);
  });

  it("shows the correct price for each product", () => {
    render(<OurProducts />);
    ["$100", "$360", "$700", "$500", "$960", "$1160", "$660", "$660"].forEach((price) => {
      expect(screen.getAllByText(price)[0]).toBeInTheDocument();
    });
  });

  it("shows the 'Add To Cart' button for each product card", () => {
    render(<OurProducts />);
    expect(screen.getAllByText("Add To Cart")).toHaveLength(8);
  });

  it("renders the 'View All Products' button at the bottom", () => {
    render(<OurProducts />);
    expect(
      screen.getByRole("button", { name: /view all products/i })
    ).toBeInTheDocument();
  });

  it("shows reviews count for each product", () => {
    render(<OurProducts />);
    ["(35)", "(95)", "(325)", "(145)", "(65)", "(35)", "(55)", "(55)"].forEach((review) => {
      expect(screen.getAllByText(review)[0]).toBeInTheDocument();
    });
  });

  it("renders color dots for products with colors", () => {
    const { container } = render(<OurProducts />);
    const colorDotDivs = container.querySelectorAll(
      "div.w-5.h-5.rounded-full.border-2.border-gray-300"
    );
    expect(colorDotDivs.length).toBe(10);
  });
});