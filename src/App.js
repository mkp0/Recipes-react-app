import React,{useEffect,useState} from 'react';
import './App.css';
import Recipes from './Recipes'

export default function App() {

  const APP_ID = '1c3b26ce'
  const APP_KEY = '9fcbfca587fab8d018df2cffeaea7997'

  

  const [recipes, setRecipes] = useState([])
  const [search , setSearch] = useState('')
  const [query , setQuery] = useState('chicken')

  const exampleReq  = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() =>{
    getReacipes()
  },[query])

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }


  const getReacipes = async () => {
    const res = await fetch(exampleReq)
    const data = await res.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }

  const updataSearch = e => {
      setSearch(e.target.value)
  }

  return (
    <div className='App'>
      <form onSubmit={getSearch}>
        <input type='text' value={search}  onChange={updataSearch} />
        <button type='submit'>Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipes className='content' key = {recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} 
          image = {recipe.recipe.image} ingred = {recipe.recipe.ingredients}
         />
      ) )}
    </div>
  )
}
