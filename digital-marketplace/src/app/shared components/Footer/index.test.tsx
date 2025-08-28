import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from ".";

(Footer as React.FC).displayName = "Footer";

jest.mock("next/image", () => {
  const MockImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => <img {...props} alt={props.alt || ""} />;
  MockImage.displayName = "MockImage";
  return MockImage;
});

describe("Footer", () => {
  it("renders the brand name", () => {
    render(<Footer />);
    expect(screen.getByRole("heading", { name: /Exclusive/i })).toBeInTheDocument();
  });

  it("renders the subscription section", () => {
    render(<Footer />);
    expect(screen.getByText(/Subscribe/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument();
  });

  it("renders the support section with address, email, and phone", () => {
    render(<Footer />);
    expect(screen.getByText(/Bijoy sarani/)).toBeInTheDocument();
    expect(screen.getByText(/exclusive@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/\+88015-88888-9999/)).toBeInTheDocument();
  });

  it("renders account links", () => {
    render(<Footer />);
    expect(screen.getByText(/My Account/i)).toBeInTheDocument();
    expect(screen.getByText(/Login \/ Register/i)).toBeInTheDocument();
    expect(screen.getByText(/Cart/i)).toBeInTheDocument();
    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
  });

  it("renders quick links", () => {
    render(<Footer />);
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
    expect(screen.getByText(/Terms Of Use/i)).toBeInTheDocument();
    expect(screen.getByText(/FAQ/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it("renders download app section", () => {
    render(<Footer />);
    expect(screen.getByText(/Download App/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Download on Google Play Store/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Get it on the App Store/i)).toBeInTheDocument();
  });

  it("renders social icons", () => {
    render(<Footer />);
    expect(document.querySelector(".hover\\:text-blue-400")).toBeInTheDocument();
    expect(document.querySelector(".hover\\:text-pink-400")).toBeInTheDocument();
    expect(document.querySelector(".hover\\:text-blue-600")).toBeInTheDocument();
  });

  it("renders copyright notice", () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright Rimel 2022/i)).toBeInTheDocument();
  });
});