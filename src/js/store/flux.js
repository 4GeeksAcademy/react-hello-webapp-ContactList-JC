const getState = ({ getStore, getActions, setStore }) => {
  return {
    // almacenamiento de variables (key: valor)
    store: {
      api: "https://playground.4geeks.com/apis/fake/contact/",
      contacts: ["esto es una lista de contactos"],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getAllContact: async () => {
        console.log("me ejecuto");
        const store = getStore();
        const response = await fetch(store.api + "agenda/Juan_contact");
        const newContacts = await response.json();
        setStore({ contacts: newContacts });
      },

      updateContact: async (contact, id) => {
        const store = getStore();
        const response = await fetch(`${store.api}${id}`, {
          method: "PUT",
          body: JSON.stringify(contact),
          headers: {
            "Content-Type": "application/json",
          },
        });
      },

      deleteContact: async (id) => {
        const store = getStore();
        const response = await fetch(`${store.api}${id}`, {
          method: "DELETE",
        });
      },

      addContact: async (newContact) => {
        console.log(newContact);
        const store = getStore();
        const response = await fetch(store.api, {
          method: "POST",
          body: JSON.stringify(newContact),
          headers: {
            "Content-Type": "application/json",
          },
        });
        getActions().getAllContact();
      },
    },
  };
};

export default getState;
