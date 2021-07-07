import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom"


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get('/colors')
    .then(res => setColorList(res.data))
    .catch(err => console.log("ERROR", err))
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      <Link to="/logout">Logout</Link>
    </>
  );
};

export default BubblePage;
