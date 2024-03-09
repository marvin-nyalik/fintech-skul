import { describe, expect, it } from "vitest";
import Mission from "../components/Mission";
import { render, screen } from "@testing-library/react";

describe('Mission Component', () => {
  it('Renders correctly', ()=>{
    render(<Mission/>)
    const heading = screen.getByText(/Mission here/i);
    expect(heading).toBeInTheDocument();
  })
})