import { BrowserRouter } from "react-router-dom"
import { screen, render } from "@testing-library/react"
import NotFound from "../Pages/NotFound"
import NotFoundError from "../assets/NotFoundError.png"

describe("<NotFound />", () => {
  it("renders an image", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const bookImage = screen.getByRole("img")
    expect(bookImage).toHaveAttribute("src", NotFoundError)
  })
})