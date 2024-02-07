import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Header from "../Components/Header"

describe("<Header />", () => {
    it("renders an index link", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const indexLink = screen.getByText('Meet All the Cats', {
        })
        expect(indexLink).toBeInTheDocument()
    })

    it("renders a profile creator", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const createLink = screen.getByText('Add Your Cat', {
        })
        expect(createLink).toBeInTheDocument()
    })

    it("renders an external link", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const externalLink = screen.getByText('Find your Purrfect match!', {
        })
        expect(externalLink).toBeInTheDocument()
    })
})