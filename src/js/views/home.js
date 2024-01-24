import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/Card.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  // const flux = useContext(Context);
  console.log(store.contacts);
  return (
    <>
      <Card />
    
    </>
  );
};
