import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const EditContact = () => {
  const [newInputvalue, setNewInputValue] = useState({
    full_name: "",
    address: "",
    email: "",
    phone: "",
    agenda_slug: "Juan_contact",
  });
  const params = useParams();
  console.log(useParams);
  const handleChange = (event) => {
    setNewInputValue({
      ...newInputvalue,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };
  const { store, actions } = useContext(Context);

  const handleEditContact = async (event) => {
    event.preventDefault();
    const response = await actions.updateContact(newInputvalue, params.id);
  };

  return (
    <>
      <form onSubmit={handleEditContact} className="container ">
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

export default EditContact;
