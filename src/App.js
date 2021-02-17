import React,{useEffect,useState} from 'react';
import Recipe from "./Recipe";
import './App.css';
import "./bootstrap.min.css";
function App() {
  const[recipes,setRecipe]=useState([]);
  const[search,setSearch]=useState("");
  const[query,setQuery]=useState("chicken");
  const appId="f624e791";
  const appKey="f3926a3fdaae007893237371f3030295";
  useEffect(() =>{ 
    getRecipe();
  },[query])
  const getRecipe = async () => {
    const res=await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`);
    const data= await res.json();
    setRecipe(data.hits);
    //console.log(data.hits);
  }
  const getSearch =(e) =>{
    setSearch(e.target.value);
   // console.log(search);
  }
  const updateRecipes= (e) =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return (
    <div className="App">
      <form onSubmit={updateRecipes} className='search-form'>
       <input className="form-control" 
       style={{padding:"2px",margin:"5px",width:"25%"}}
       type="text" 
        value={search}
        placeholder="Search"
        onChange={getSearch}
        />
        <br />
        <button className="btn btn-primary">Search</button>
        </form>   
        <div className="recipes">
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.url} recipe={recipe.recipe}/>
          ))}
          </div>
    </div>
  );
}

export default App;
