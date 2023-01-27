import './App.css';
import Axios from 'axios'
import {useEffect, useState} from 'react';
import Card from './card';
import 'bootstrap/dist/css/bootstrap.css';



const YOUR_APP_ID = '21ac7f8c'
const YOUR_APP_KEY = '4023120eed2b8724cc070f9dad31e452'



function App() {

  const [apiData, setApiData] =useState([]);  
  const [searchValue, setSearchValue] =useState(" ");  
  const [dietType, setDietType] = useState('balanced')
  // const [dishType, setDishType]= useState('')


  useEffect(()=>{

    getReceipeInfo()
  },[])

  const url = `https://api.edamam.com/search?q=${searchValue}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=100&calories=591-722&health=alcohol-free&diet=${dietType}`

   const getReceipeInfo = async() =>{
     var res = await Axios.get(url);
     console.log(res.data)
     setApiData(res.data.hits)
     
 }

 return (
  <div className= "App">
    <center><h1 onClick={getReceipeInfo}>Food recipe</h1></center>
   
<center>
  <form>
  <input type="text"className='input' placeholder='search the food' onChange={(e)=> setSearchValue(e.target.value)} />    
  <select onChange={(e) => setDietType(e.target.value)}>
      <option>Select DietType</option>
      <option>balanced</option>
      <option>high-protein</option>
      <option>low-fat</option>
    </select> <br></br>
    
    <br></br>
  <input type="button" className="btn btn-primary" value="search" onClick={getReceipeInfo }/> 
  </form>

   

    {/* <select onChange={(e) => setDishType(e.target.value)}>
      <option>dessert</option>
      <option>soup</option>
    
    </select> */}


    </center>
    
    
    <div className= "app_recipes">
    <div className='row'>
    {apiData.map((val)=>{
      return <Card  
      image={val.recipe.image} 
      label={val.recipe.label}
      calories={val.recipe.calories}
      ingredientLines={val.recipe.ingredientLines}

      />
    })}</div>

      
    </div>
  </div>
);

}
    


 
export default App