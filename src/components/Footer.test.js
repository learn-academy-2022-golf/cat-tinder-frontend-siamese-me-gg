import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
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
    it("renders text", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const element = screen.getByText(/Garrett & Manny/i)
        expect(element).toBeInTheDocument()
    })
})