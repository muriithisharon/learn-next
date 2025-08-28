import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "../Header";

(Header as React.FC).displayName = "Header";

jest.mock("next/link", () => {
  const MockLink: React.FC<React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>> = ({ children, ...props }) => (
    <a {...props}>{children}</a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

describe("Header", () => {
  it("renders the summer sale announcement", () => {
    render(<Header />);
    expect(
      screen.getByText(/Summer Sale For All Swim Suits And Free Express Delivery/i)
    ).toBeInTheDocument();
  });

  it("renders ShopNow button", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /ShopNow/i })).toBeInTheDocument();
  });

  it("renders language select", () => {
    render(<Header />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "English" })).toBeInTheDocument();
  });

  it("renders the Exclusive brand link", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /Exclusive/i })).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Contact/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Sign Up/i })).toBeInTheDocument();
  });

  it("renders search input", () => {
    render(<Header />);
    expect(
      screen.getByPlaceholderText(/What are you looking for\?/i)
    ).toBeInTheDocument();
  });

  it("renders heart, cart, and user icons", () => {
    render(<Header />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThanOrEqual(4);

    expect(
      screen.getByText("0", { selector: "span" })
    ).toBeInTheDocument();
  });
});