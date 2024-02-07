import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Footer from "../Components/Footer"

describe("<Footer />", () => {
    it("renders a footer", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const copyright = screen.getByText('©2024 Cat Tinder. All purrs reserved', {
        })
        expect(copyright).toBeInTheDocument()
    })
})