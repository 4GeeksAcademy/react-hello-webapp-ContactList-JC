import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
  const [inputValue, setInputValue] = useState({
    full_name: "",
    address: "",
    email: "",
    phone: "",
    agenda_slug: "Juan_contact",
  });
  const { store, actions } = useContext(Context);
  const handleChange = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await actions.addContact(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container text-center">
        <div>
          <div>Add full Name</div>
          <input
            name="full_name"
            className="form-control"
            onChange={handleChange}
            placeholder="full_name"
          />
        </div>
        <div>
          <div>Add an address</div>
          <input
            name="address"
            className="form-control"
            onChange={handleChange}
            placeholder="address"
          />
        </div>
        <div>
          <div>Add an email</div>
          <input
            name="email"
            className="form-control"
            onChange={handleChange}
            placeholder="email"
          />
        </div>
        <div>
          <div>Add a phone</div>
          <input
            name="phone"
            className="form-control"
            onChange={handleChange}
            placeholder="phone"
          />
        </div>
        <button className="btn btn-secondary border m-3" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
