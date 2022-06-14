import Recipe from './Recipe'

const RecipeList = ({recipes}) => {
    
    const recipeComponents = recipes.map((recipe,index) => {
        return <Recipe key={index} recipe={recipe}/>
    })
    
    return (
        <>
        {recipeComponents}
        </>
    )
}

export default RecipeList;