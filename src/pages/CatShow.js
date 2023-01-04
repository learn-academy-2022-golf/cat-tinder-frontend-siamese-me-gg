import React from "react"
import { useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  let currentCat = cats?.find((cat) => cat.id === +id)

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
    </main>
    )
}

export default CatShow