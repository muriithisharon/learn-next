import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Categories from "./page";

describe("Categories Component", () => {
  it("renders section and heading", () => {
    render(<Categories />);
    expect(screen.getByText("Categories")).toBeInTheDocument();
    expect(screen.getByText("Browse By Category")).toBeInTheDocument();
  });

  it("renders all category cards", () => {
    render(<Categories />);
    expect(screen.getByText("Phones")).toBeInTheDocument();
    expect(screen.getByText("Computers")).toBeInTheDocument();
    expect(screen.getByText("SmartWatch")).toBeInTheDocument();
    expect(screen.getByText("Camera")).toBeInTheDocument();
    expect(screen.getByText("HeadPhones")).toBeInTheDocument();
    expect(screen.getByText("Gaming")).toBeInTheDocument();
  });

  it("renders left and right arrow buttons", () => {
    render(<Categories />);
    const leftArrow = screen.getAllByRole("button")[0];
    const rightArrow = screen.getAllByRole("button")[1];
    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
  });

  it("highlights the active category", () => {
    render(<Categories />);
    const cards = screen.getAllByText(/^(Phones|Computers|SmartWatch|Camera|HeadPhones|Gaming)$/);
    const cardParent = cards[3].parentElement as HTMLElement;
    expect(cardParent).toHaveClass("border-red-800");
    expect(cardParent).toHaveClass("bg-red-800");
    expect(cardParent).toHaveClass("text-white");
  });

  it("changes active category on click", () => {
    render(<Categories />);
    const computerCard = screen.getByText("Computers");
    const cardParent = computerCard.parentElement as HTMLElement;
    fireEvent.click(cardParent);
    expect(cardParent).toHaveClass("border-red-800");
    expect(cardParent).toHaveClass("bg-red-800");
    expect(cardParent).toHaveClass("text-white");
  });
});