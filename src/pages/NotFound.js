import React from 'react'
import funnyCats from '../assets/funny-cats.jpeg'

const NotFound = () => {
    return (
        <div className="not-found">
            NotFound - Oopsie, try again
            <img src={funnyCats} alt="Funny Cats" />
        </div>
    )
}

export default NotFound