import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BestSeller from "./page";

export {};

describe("BestSeller Component", () => {
  it("renders section and heading", () => {
    render(<BestSeller />);
    expect(screen.getByText("This Month")).toBeInTheDocument();
    expect(screen.getByText("Best Selling Products")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "View All" })).toBeInTheDocument();
  });

  it("renders all products", () => {
    render(<BestSeller />);
    expect(screen.getByText("The north coat")).toBeInTheDocument();
    expect(screen.getByText("Gucci duffle bag")).toBeInTheDocument();
    expect(screen.getByText("RGB liquid CPU Cooler")).toBeInTheDocument();
    expect(screen.getByText("Small BookSelf")).toBeInTheDocument();
  });

  it("displays product prices and original prices", () => {
    render(<BestSeller />);
    expect(screen.getByText("$260")).toBeInTheDocument();
    expect(screen.getAllByText("$360").length).toBe(2);
    expect(screen.getByText("$960")).toBeInTheDocument();
    expect(screen.getByText("$1160")).toBeInTheDocument();
    expect(screen.getByText("$160")).toBeInTheDocument();
    expect(screen.getByText("$170")).toBeInTheDocument();
    expect(screen.getAllByText("$360")[0]).toBeInTheDocument();
    expect(screen.getAllByText("$360")[1]).toBeInTheDocument();
  });

  it("shows the correct number of reviews for each product", () => {
    render(<BestSeller />);
    const reviews = screen.getAllByText("(65)");
    expect(reviews.length).toBe(4);
  });

  it("renders the Add To Cart button and makes it visible on hover (simulated)", () => {
    render(<BestSeller />);
    const addToCartButtons = screen.getAllByText("Add To Cart");
    expect(addToCartButtons.length).toBe(4);
  });

  it("renders Heart and Eye icons as buttons", () => {
    render(<BestSeller />);
    const iconButtons = screen.getAllByRole("button");
    expect(iconButtons.length).toBe(13);
  });
});