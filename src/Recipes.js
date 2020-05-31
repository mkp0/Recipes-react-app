import React from 'react'
import './recipes.css'

export default function Recipes({image ,title , calories , ingred }) {
    return (
        <div className='wrapper'>
            
            <div className='Two'>
            <h1>{title}</h1>
            <p>Calories : {calories}</p>
            <img src={image} alt = 'imgge' />
            </div>
            <div className='one'>
            <h1>Ingredients</h1>
            <ol>
                {ingred.map((ingredients,b) => (
                 <li key={b}>
                     {ingredients.text}
                 </li>   
                )
                )}
            </ol>
            </div>
        </div>
    )
}
