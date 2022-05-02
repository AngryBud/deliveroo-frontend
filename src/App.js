
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Category from "./components/Category"

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

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="App">
      <Header rest={data.restaurant}/>
      <div className="body">
        <Category categories={data.categories}/>
      </div>
    </div>
  );
  
}

export default App;