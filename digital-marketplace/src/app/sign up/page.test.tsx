import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUp from "./page";

describe("SignUp Component", () => {
  it("renders all input fields and buttons", () => {
    render(<SignUp />);
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument(); 
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Create Account")).toBeInTheDocument();
    expect(screen.getByText("Sign up with Google")).toBeInTheDocument();
    expect(screen.getByText("Log in")).toBeInTheDocument();
  });

  it("allows user to fill and submit the form", () => {
    render(<SignUp />);
    fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Jacky Uwase" } });
    fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "jacky@example.com" } }); 
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "password123" } });

    const submitButton = screen.getByRole("button", { name: "Create Account" });
    fireEvent.click(submitButton);
  });

  it("triggers Google sign up when button is clicked", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    render(<SignUp />);
    fireEvent.click(screen.getByText("Sign up with Google"));
    expect(logSpy).toHaveBeenCalledWith("Google sign up clicked");
    logSpy.mockRestore();
  });
});