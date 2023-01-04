import { render, screen } from "@testing-library/react"
import CatEdit from "./CatEdit"
import { BrowserRouter } from "react-router-dom"
import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import mockCats from '../mockCats'

describe("<CatEdit />", () => {
  beforeEach(() => {
    const div = document.createElement("div")
    render(<MemoryRouter initialEntries={["/catedit/1"]}>
    <Routes>
      <Route path="/catedit/:id" element={<CatEdit cats={mockCats} />}></Route>
    </Routes>
    </MemoryRouter>, div
    )
  })

  it("has a form with entries for name, age, enjoys, and image", () => {
    const formName = screen.getByText("Name")
    expect(formName.getAttribute("For")).toEqual("name")
    const formAge = screen.getByText("Age")
    expect(formAge.getAttribute("For")).toEqual("age")
    const formEnjoys = screen.getByText("Enjoys")
    expect(formEnjoys.getAttribute("For")).toEqual("enjoys")
    const formImage = screen.getByText("Image")
    expect(formImage.getAttribute("For")).toEqual("image")
  })
})