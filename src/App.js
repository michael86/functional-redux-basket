import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Interface from "./components/Interface";
import { UPDATE_PRODUCTS } from "./redux/types";
import "./App.css";

const App = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const getApiData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products"); //Realistically would do the same as the simpons task here and add a back up incase api is down. Unfortunately this month is a super busy one for me so having to squeeze this in.
      dispatch({ type: UPDATE_PRODUCTS, payload: res.data });
    } catch (error) {
      console.log("API Error!", error);
    }
  };

  useEffect(() => {
    getApiData(); //This throws a warning pertaining to getApiData being a dependency. Russel did show us how to fix it, but I can't find it in the video, and as above. Time is not on my side this month.
  }, []);

  if (products) {
    return <Interface />;
  }

  return <p>Loading...</p>;
};

export default App;
