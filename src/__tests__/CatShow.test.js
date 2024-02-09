import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from "react-router-dom";
import CatShow from '../Pages/CatShow'
import mockCats from '../mockCats'


describe("<CatShow />", () => {

    it("renders single cat", () => {
      const cat = "1";
      render(
        <MemoryRouter initialEntries={[`/catshow/${cat}`]}>
          <Routes>
            <Route path="catshow/:id" element={<CatShow cats={mockCats} />} />
          </Routes>
        </MemoryRouter>
      )
      const catName = screen.getByText(mockCats[0].name)
      expect(catName).toBeInTheDocument()
    })
  })


