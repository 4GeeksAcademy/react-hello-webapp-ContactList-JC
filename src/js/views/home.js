import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const context = useContext(Context);
  console.log(context.store.data);
  return (
    <>
      <div className="text-center mt-5">
        <p>Creando contact list...</p>
        <div>esta es nuestra API:{context.store.API}</div>
        <button onClick={() => context.actions.getAllContact()}>
          nuestros contactos: {context.store.data}.
        </button>
      </div>
    </>
  );
};
