import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Button, Form, FormControl, Card} from 'react-bootstrap';

const App = () => {

  const APP_ID = "e17f70a8";
  const APP_KEY = "1d1a46992cc148e50d75a168e670c9fa";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);


  const getRecipes = async () =>{
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }



  return(
    <div className="App">

    <Navbar bg="light" expand="lg" className="py-3">
      <Navbar.Brand href="#home" className="text-uppercase font-weight-bold">Food Recipe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline onSubmit={getSearch} className="search-form mt-2 ml-auto">
            <FormControl type="text" placeholder="Search" className="mr-sm-2 mt-4 mt-sm-0 mb-2 search-bar" value={search} onChange={updateSearch} required/>
            <Button variant="outline-success" type="submit" className="search-button mt-2 mb-2 mt-sm-0">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className="recipes mt-5 container">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        image={recipe.recipe.image}
        calories={recipe.recipe.calories} 
        ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  );

}

export default App;
