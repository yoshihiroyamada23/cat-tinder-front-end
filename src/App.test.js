import { render, screen, image } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Kurrin from "./assets/HomeImage.png"

describe("<App />", () => {
  it("renders an image", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute("src", Kurrin)
  })
})





