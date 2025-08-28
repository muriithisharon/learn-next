import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignIn from "./page";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, ...props }: React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) => (
    <a {...props}>{children}</a>
  ),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} alt={props.alt || ""} />,
}));

jest.mock("../shared components/SignUpHeader/page", () => ({
  __esModule: true,
  default: () => <header data-testid="signup-header" />,
}));

jest.mock("../sharedc omponents/Footer/page", () => ({
  __esModule: true,
  Footer: () => <footer data-testid="footer" />,
}));

jest.mock("../shared components/Button/page", () => ({
  __esModule: true,
  Button: (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => <button {...props} />,
}));

jest.mock("../shared components/Input/page", () => ({
  __esModule: true,
  Input: (props: React.InputHTMLAttributes<HTMLInputElement>) => <input {...props} />,
}));

describe("SignIn Component", () => {
  beforeEach(() => {
    render(<SignIn />);
  });

  it("renders Header and Footer components", () => {
    expect(screen.getByTestId("signup-header")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders the form inputs and buttons", () => {
    expect(screen.getByPlaceholderText(/Email or Phone Number/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Log In/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Forget Password\?/i })).toBeInTheDocument();
  });

  it("renders the create account link", () => {
    expect(screen.getByRole("link", { name: /Create account/i })).toBeInTheDocument();
  });

  it("allows input values to be changed", () => {
    const emailInput = screen.getByPlaceholderText(/Email or Phone Number/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "mypassword" } });

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("mypassword");
  });

  it("calls handleSubmit and logs form data on submit", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    const emailInput = screen.getByPlaceholderText(/Email or Phone Number/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const submitButton = screen.getByRole("button", { name: /Log In/i });

    fireEvent.change(emailInput, { target: { value: "user@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "pass123" } });
    fireEvent.click(submitButton);

    expect(logSpy).toHaveBeenCalledWith("Form submitted:", {
      name: "",
      email: "user@email.com",
      password: "pass123",
    });

    logSpy.mockRestore();
  });
});