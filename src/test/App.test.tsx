import { App } from "../App";
import { describe, expect, it } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe('App', () => {

  afterEach(()=>{
    cleanup();
  })

  it('renders hello world', () => {
    render(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
    )
    
    const text = screen.getByText(/Home/i);
    expect(text).toBeInTheDocument();
  })

  it('Integration -> Renders text from Mission Input', () => {
    render(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
    )
    
    const textInput = screen.getByPlaceholderText(/Enter Text/i);
    const hotBtn = screen.getByRole("button", { name: /Hot/i});

    fireEvent.change(textInput, { target: { value: 'Marvin'}});
    fireEvent.click(hotBtn)

    const textInHome = screen.getByText(/Marvin/i);
    expect(textInHome).toBeInTheDocument();
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