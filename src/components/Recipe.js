const Recipe = ({recipe}) => {

    const ingWithSpaces = recipe.ingredients.join(' ')

    return(
        <div className="recipe-card">
            <h2>{recipe.cakeName}</h2>
            <p>{ingWithSpaces}</p>
            <p>{recipe.rating}</p>
            <hr/>
        </div>

    )
}

export default Recipe;