import { render, screen } from '@testing-library/react';
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

    const image = screen.getByRole('img', {
      name: /cat/i
    })
    // Assert
    expect(image).toHaveAttribute("src", Kurrin)
  })

  it("renders an nav list", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// import Header from "../components/Header"
