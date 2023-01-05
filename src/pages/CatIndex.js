import React, { useState, useEffect } from 'react'
import "../App.css"
import {NavLink} from 'react-router-dom'
import { motion } from "framer-motion"
import { Button } from "reactstrap"


const variants = {
  initial: direction => {
   return { 
    x: direction > 0 ? 200 : -200,
    opacity: 0,
   }
  },
  animate: {
    x: 0,
    opacity: 1,
  
    transition: {
      x: {type: 'spring', stiffness: 300, damping: 20},
      opacity: {duration: 0.3},
      
    },
  }, 
  exit: direction => {
    return { 
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    
      transition: {
        x: {type: 'spring', stiffness: 300, damping: 20},
        opacity: {duration: 0.3}
      },
    }
  }
}




const CatIndex = ({cats, readCat}) => {
  
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState(0)

    const goLeft = () => {
        setDirection(-1)
        current === 0 ? setCurrent(cats?.length - 1) : setCurrent((prev) => prev -= 1)
      }
    
      const goRight = () => {
        setDirection(1)
        current === cats?.length -1  ? setCurrent(0) : setCurrent((prev) => prev += 1)
      }

if (!cats) {
  return <div>loading...</div>
}
  return (
    <main className='main'>
      <div className='banner'>
        <h1>Meet The Cats</h1>
      </div>
      <div className="cat-index-cards">
         <button onClick={goLeft} className='left-button'>{"<"}</button>
        
           <div 
           className="flip-card main-card" >
           <div className="flip-card-inner">
             <div className="flip-card-front">
             
               <motion.img 
                variants={variants}
                animate='animate'
                initial='initial'
                exit='exit'
                src={cats[current]?.image} 
                alt={cats[current]?.name}
                key={current}
                custom={direction}
                
                />
               
             </div>
             <div className="flip-card-back">
               <h1>{cats[current]?.name}</h1>
               <p>Age: {cats[current]?.age}</p>
               <NavLink to={`/catshow/${cats[current]?.id}`} className="nav-link">
                <Button color="success">See More Details</Button>
                </NavLink>
             </div>
           </div>
            </div>
         <button onClick={goRight} className='right-button'>{">"}</button>
         </div>
    </main>
  )
}

export default CatIndex