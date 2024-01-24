import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = () => {
  const { store, actions } = useContext(Context);
  // const handleEditContact = async (event) => {
  //   event.preventDefault();
  //   const response = await actions.updateContact;
  // };

  return (
    <>
      {store.contacts.map((contact) => {
        return (
          <div
            key={contact.id}
            id="contacts"
            className="d-flex justify-content-between align-items-center rounded border border-2 "
          >
            <div className="d-flex">
              <img src="https://picsum.photos/200" className="redonda" />
              <div className="mt-4">
                <div>{contact.full_name}</div>
                <div>{contact.email}</div>
                <div>{contact.address}</div>
                <div>{contact.phone}</div>
              </div>
            </div>
            <div>
              <Link to={`/edit-contact/${contact.id}`} className="m-2">
                <button className="rounded">editar</button>
              </Link>
              <button
                onClick={() => {
                  actions.deleteContact(contact.id);
                }}
                className="m-1 rounded"
              >
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
