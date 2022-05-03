
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Category from "./components/Category";
import Shop from "./components/Shop";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
// https://deliveroo-backend-reactv1.herokuapp.com/
// http://localhost:3100/
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3100/");
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const [counter, setCounter] = useState([]);

  const handleChoice = (meal) => {

    if (!counter.length){
      var obj = {amount: 1, title: meal.title, price: Number(meal.price)};
      setCounter([...counter, obj]);
    }
    else{
      for(let i = 0; i < counter.length; i++){
        if(counter[i].title === meal.title){
          let am = counter[i].amount + 1;
          let newTab = [...counter];   
          newTab[i].amount = am;
          setCounter(newTab);
        }
        else if (i === counter.length -1  && counter[i].title !== meal.title){
          // console.log("price ::::: ", Number(meal.price));
          obj = {amount: 1, title: meal.title, price: (Number(meal.price).toFixed(2))};
          setCounter([...counter, obj]);
        }
      }
    }
  }

//   const handleClick = (index) =>{
//     let am = counter[index].amount - 1;
//       let newTab = [...counter];   
//       newTab[index].amount = am;
//       setCounter(newTab);
// }
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="App">
      <Header rest={data.restaurant}/>
      <div className="body">
        <Category categories={data.categories} handleChoice={handleChoice}/>
        {/* {counter.length > 0 && <Shop add={counter} setCounter={setCounter}/>} */}
        <Shop add={counter} setCounter={setCounter}/>
      </div>
    </div>
  );
  
}

export default App;