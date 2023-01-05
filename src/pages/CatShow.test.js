import React from "react"
import { render, screen } from "@testing-library/react"
import CatShow from "./CatShow"
import {
    MemoryRouter,
    Routes,
    Route,
} from "react-router-dom";
import mockCats from '../mockCats'

describe("<CatShow />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(<MemoryRouter initialEntries={["/catshow/1"]}>
            <Routes>
                <Route path="/catshow/:id" element={<CatShow cats={mockCats} />}></Route>
            </Routes>
        </MemoryRouter>, div)
        const catName = screen.getByText("Mittens")
        expect(catName).toBeInTheDocument()
    });
});