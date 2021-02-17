import React from 'react';
import "./RecipeStyle.css";
function Recipe({recipe})
{
    return(
        <div>
            <h1 className="recipes">{recipe.label}</h1>
            <p>Calories: {recipe.calories}</p>
            <ol className="list">
                {recipe.ingredients.map(ingredient => <li>{ingredient.text}</li>)}
            </ol>
            <img src={recipe.image} alt={recipe.label}
            className="image"/>
        </div>
    )
}
export default Recipe;