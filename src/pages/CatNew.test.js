import { render, screen } from "@testing-library/react"
import CatNew from "./CatNew"
import { BrowserRouter } from "react-router-dom"

describe("<CatIndex />", () => {
  beforeEach(() => {
    render(
        <BrowserRouter>
            <CatNew />
        </BrowserRouter>
    )
  })
  it("renders a create a cat form", () => {
    const element = screen.getByText(/Create a new cat/i)
    expect(element).toBeInTheDocument()
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