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
        if(rating >= 1 && rating <= 5 && ingredients !== "" && name !== ""){
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

    const inputSearch = useRef()

    const searchCake = () => {
        const search = inputSearch.current.value
        let searchInput = search.toString().toLowerCase();
        console.log(searchInput)
        for(let i = 0; i < recipes.length; i++){
            let c = recipes[i].cakeName.toLowerCase()
            if(c !== searchInput){
                recipes.splice(i,1)
            }
        }
        const updatedRecipes = [recipes]
        setRecipe(updatedRecipes);
    }

    return(
        <>
        
        <nav>
            <h1>Recipe List</h1>
            <a href="#form">Form</a>
            <input type="text" ref={inputSearch}></input>
        
        </nav>
        
        <header>
        <button onClick={searchCake}>Search</button>
        </header>



        <RecipeList recipes={recipes}/>
        <input id="form" ref={inputName} type="text"></input>
        <input id="form" ref={inputIngredients} type="text"></input>
        <input id="form" ref={inputRating} type="text"></input>
        <NewRecipe handleButtonClick={addNewRecipe}/>
        </>
    )
}

export default RecipeContainer;