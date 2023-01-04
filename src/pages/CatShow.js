import React from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "../App.css"
import { Button } from "reactstrap"

const CatShow = ({ cats, deleteCat }) => {
    const { id } = useParams()
    let currentCat = cats?.find((cat) => cat.id === +id)

    const deleteMe = () => {
        deleteCat(id)
    }

    return (
        <main className="cat-show-cards">
            {currentCat && (
                <>
                    <img
                        alt={`profile of a cat named ${currentCat.name}`}
                        src={currentCat.image}
                        className="cat-show-img"
                    />
                    <p>{currentCat.name}</p>
                    <p>{currentCat.age}</p>
                    <p>{currentCat.enjoys}</p>
                </>
            )}
            <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
                Edit Cat Profile
            </NavLink>
            <NavLink to="/catindex">
                <Button onClick={deleteMe}>Delete Cat Profile</Button>
            </NavLink>
        </main>
    )
}

export default CatShow