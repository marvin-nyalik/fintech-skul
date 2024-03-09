import { App } from "../App";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe('App', ()=>{
  it('renders hello world', ()=>{
    render(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
    )
    
    const text = screen.getByText(/Home/i);
    expect(text).toBeInTheDocument();
  })

  it('Shows 404 for invalid route', ()=>{
    render (
    <MemoryRouter initialEntries={['/this-route-is-no']}>
      <App/>
    </MemoryRouter>
    )

    const text = screen.getByText(/404, sorry man/i);
    expect(text).toBeInTheDocument();
  })
})