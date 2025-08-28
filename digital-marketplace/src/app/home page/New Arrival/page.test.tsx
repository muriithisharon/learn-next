import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NewArrival from "./page";

describe("NewArrival component", () => {
  it("renders the 'Featured' label", () => {
    render(<NewArrival />);
    expect(screen.getByText("Featured")).toBeInTheDocument();
  });

  it("renders the main heading 'New Arrival'", () => {
    render(<NewArrival />);
    expect(screen.getByRole("heading", { level: 2, name: "New Arrival" })).toBeInTheDocument();
  });

  it("renders the PlayStation 5 product box", () => {
    render(<NewArrival />);
    expect(screen.getByRole("heading", { level: 3, name: "PlayStation 5" })).toBeInTheDocument();
    expect(screen.getByText(/Black and White version of the PS5/i)).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /shop now/i })[0]).toBeInTheDocument();
    expect(screen.getByAltText(/PlayStation 5/i)).toBeInTheDocument();
  });

  it("renders the Women's Collections product box", () => {
    render(<NewArrival />);
    expect(screen.getByRole("heading", { level: 3, name: "Women's Collections" })).toBeInTheDocument();
    expect(screen.getByText(/Featured woman collections/i)).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /shop now/i })[1]).toBeInTheDocument();
    expect(screen.getByAltText(/Women's Collection/i)).toBeInTheDocument();
  });

  it("renders the Speakers product box", () => {
    render(<NewArrival />);
    expect(screen.getByRole("heading", { level: 3, name: "Speakers" })).toBeInTheDocument();
    expect(screen.getByText(/Amazon wireless speakers/i)).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /shop now/i })[2]).toBeInTheDocument();
    expect(screen.getByAltText(/Speakers/i)).toBeInTheDocument();
  });

  it("renders the Perfume product box", () => {
    render(<NewArrival />);
    expect(screen.getByRole("heading", { level: 3, name: "Perfume" })).toBeInTheDocument();
    expect(screen.getByText(/GUCCI INTENSE OUD EDP/i)).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /shop now/i })[3]).toBeInTheDocument();
    expect(screen.getByAltText(/Perfume/i)).toBeInTheDocument();
  });

  it("renders four 'Shop Now' buttons", () => {
    render(<NewArrival />);
    expect(screen.getAllByRole("button", { name: /shop now/i })).toHaveLength(4);
  });
});