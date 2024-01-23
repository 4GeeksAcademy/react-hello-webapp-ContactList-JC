import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const context = useContext(Context);
  console.log(context.store.API);
  return (
    <>
      <div className="text-center mt-5">
        <p>Creando contact list...</p>
        <div>este es nuestra API:{context.store.API}</div>
		<p>nuestros contactos: {context.store.Contacts}.</p>
      </div>
    </>
  );
};
