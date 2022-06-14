import { useState, useRef } from "react";
import RecipeList from "../components/RecipeList";
import NewRecipe from "../components/NewRecipe";

const RecipeContainer = () => {

    const [recipes, setRecipe] = useState ([
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
])
    const inputName = useRef();
    const inputIngredients = useRef();
    const inputRating = useRef();

    const addNewRecipe = () => {
        const name = inputName.current.value;
        const ingredients= inputIngredients.current.value;
        const rating = inputRating.current.value;
        console.log(ingredients.length)
        console.log(name.length)
        if(rating >= 1 && rating <= 5 && ingredients != "" && name != ""){
        const NewRecipe = {
            cakeName: name,
            ingredients: [ingredients],
            rating: rating
        }
        const updatedRecipes = [...recipes,NewRecipe]
        setRecipe(updatedRecipes)
    } else {
        window.alert("invalid rating")
    }
    }

    return(
        <>

        <RecipeList recipes={recipes}/>
        <input ref={inputName} type="text"></input>
        <input ref={inputIngredients} type="text"></input>
        <input ref={inputRating} type="text"></input>
        <NewRecipe handleButtonClick={addNewRecipe}/>
        </>
    )
}

export default RecipeContainer;