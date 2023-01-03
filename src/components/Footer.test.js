import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Footer from "./Footer"

describe("<Footer />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>,
        div
    )
    })
    it("renders a logo with a src and alt", () => {
        const div = document.createElement("div")
        render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>,
        div
    )
    })
    it("has clickable links", () => {
        render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
        )
        userEvent.click(screen.getByText("Meet the Cats"))
        expect(screen.getByText("Meet the Cats")).toBeInTheDocument()
        userEvent.click(screen.getByText("Add a New Cat"))
        expect(screen.getByText("Add a New Cat")).toBeInTheDocument()
        userEvent.click(screen.getByText("Adopt a Cat!"))
        expect(screen.getByText("Adopt a Cat!")).toBeInTheDocument()
    })
})