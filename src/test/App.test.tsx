import App from "../App";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe('App', ()=>{
  it('renders hello world', ()=>{
    render(<App/>)
    const text = screen.getByText(/Hello World/i);
    expect(text).toBeInTheDocument();
  })
})