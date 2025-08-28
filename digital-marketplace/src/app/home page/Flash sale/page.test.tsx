import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FlashSales } from "./page";

describe("FlashSales Component", () => {
  it("renders timer labels and values", () => {
    render(<FlashSales />);
    expect(screen.getByText("Days")).toBeInTheDocument();
    expect(screen.getByText("Hours")).toBeInTheDocument();
    expect(screen.getByText("Minutes")).toBeInTheDocument();
    expect(screen.getByText("Seconds")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
    expect(screen.getByText("23")).toBeInTheDocument();
    expect(screen.getByText("19")).toBeInTheDocument();
    expect(screen.getByText("56")).toBeInTheDocument();
  });

  it("renders section headings", () => {
    render(<FlashSales />);
    expect(screen.getByText("Today's")).toBeInTheDocument();
    expect(screen.getByText("Flash Sales")).toBeInTheDocument();
  });

  it("renders 4 products per slide", () => {
    render(<FlashSales />);
    expect(screen.getByText("HAVIT HV-G92 Gamepad")).toBeInTheDocument();
    expect(screen.getByText("AK-900 Wired Keyboard")).toBeInTheDocument();
    expect(screen.getByText("IPS LCD Gaming Monitor")).toBeInTheDocument();
    expect(screen.getByText("S-Series Comfort Chair")).toBeInTheDocument();
  });

  it("renders navigation arrow buttons", () => {
    render(<FlashSales />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThanOrEqual(7);
    expect(buttons[0]).toBeDisabled();
    expect(buttons[1]).not.toBeDisabled();
  });

  it("navigates to next and previous slides", () => {
    render(<FlashSales />);
    const nextButton = screen.getAllByRole("button")[1];
    fireEvent.click(nextButton);
    expect(screen.getByText("RGB Mechanical Keyboard")).toBeInTheDocument();
    expect(screen.getByText("Wireless Gaming Mouse")).toBeInTheDocument();
    expect(screen.getByText("USB-C Charging Cable")).toBeInTheDocument();
    expect(screen.getByText("Bluetooth Headphones")).toBeInTheDocument();
    const prevButton = screen.getAllByRole("button")[0];
    fireEvent.click(prevButton);
    expect(screen.getByText("HAVIT HV-G92 Gamepad")).toBeInTheDocument();
  });

  it("renders View All Products button", () => {
    render(<FlashSales />);
    expect(screen.getByText("View All Products")).toBeInTheDocument();
  });

  it("renders dots for slides and highlights current slide", () => {
    render(<FlashSales />);
    const dotButtons = screen.getAllByRole("button").filter(btn =>
      btn.className.includes("w-3") && btn.className.includes("h-3")
    );
    expect(dotButtons.length).toBe(2);
    expect(dotButtons[0]).toHaveClass("bg-red-800");
    expect(dotButtons[1]).toHaveClass("bg-gray-300");
    fireEvent.click(dotButtons[1]);
    expect(dotButtons[1]).toHaveClass("bg-red-800");
  });
});