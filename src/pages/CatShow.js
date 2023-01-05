import React from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "../App.css"
import { Button, Row, Col } from "reactstrap"

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
                    <p>{`Hi, my name is ${currentCat.name} and I am ${currentCat.age} years old. I really like ${currentCat.enjoys.toLowerCase()}`}</p>
                </>
            )}
            <Row>
                <Col>
                    <NavLink to={`/catedit/${currentCat?.id}`} className="nav-link">
                        <Button outline color = "secondary">Edit</Button>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink to="/catindex">
                        <Button onClick={deleteMe} outline color = "danger">Delete</Button>
                    </NavLink>
                </Col>
            </Row>
        </main>
    )
}

export default CatShow