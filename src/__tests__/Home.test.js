import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home'
import HomeImage from "../assets/HomeImage.png"

describe("<Home />", () => {
    it("renders an image", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        const kurrinImage = screen.getByRole("img")
          expect(kurrinImage).toHaveAttribute("src", HomeImage)
        })
    })