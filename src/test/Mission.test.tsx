import { describe, expect, it, vi } from "vitest";
import Mission from "../components/Mission";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";

describe('Mission Component', () => {

  afterEach(()=>{
    cleanup();
  })
  
  it('Renders correctly', ()=>{
    const mockHandleClick = vi.fn()
    render(<Mission handleClick={mockHandleClick}/>)
    const heading = screen.getByText(/Mission here/i);
    expect(heading).toBeInTheDocument();
  })

  it('Finds button and calls callback', () => {
    const mockHandleClick = vi.fn();
    render(<Mission handleClick={mockHandleClick}/>)

    const btn = screen.getByRole("button", {
      name: /Hot/i
    })

    expect(btn).toBeInTheDocument();
    fireEvent.click(btn)
    expect(mockHandleClick).toHaveBeenCalledTimes(1)
  })
})