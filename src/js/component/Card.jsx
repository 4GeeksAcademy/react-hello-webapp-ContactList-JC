import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

const Card = () => {
  const { store, actions } = useContext(Context);
  const handleEditContact = ""

  return (
    <>
      {store.contacts.map((contact) => {
        return (
          <div
            key={contact.id}
            className=" container d-flex justify-content-between border "
          >
            <div className="d-flex">
              <div className="mx-3">image</div>
              <div>
                <div>{contact.full_name}</div>
                <div>{contact.email}</div>
                <div>{contact.address}</div>
                <div>{contact.phone}</div>
              </div>
            </div>
            <div>
              <button onClick={()=> actions.updateContact} className="mx-1">editar</button>
              <button onClick={() => {}} className="mx-1">
                {" "}
                eliminar
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
