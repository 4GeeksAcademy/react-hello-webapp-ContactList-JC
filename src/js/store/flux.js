const getState = ({ getStore, getActions, setStore }) => {
  return {
    // almacenamiento de variables (key: valor)
    store: {
      API: "https://playground.4geeks.com/apis/fake/contact/",
      Contacts: [],
      datos: ["juan", "marieth", "nicole"],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getAllContact: async () => {
        const store = getStore();
        const response = await fetch(store.API + "agenda/Juan_contact");
        const getContacts = await response.json();
        setStore({ Contacts: getContacts });
      },
    },
  };
};

export default getState;
