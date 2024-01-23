const getState = ({ getStore, getActions, setStore }) => {
  return {
    // almacenamiento de variables (key: valor)
    store: {
      API: "https://playground.4geeks.com/apis/fake/contact/",
      data: "",
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
        setStore({ data: getContacts });
        console.log(data);
      },
    },
  };
};

export default getState;
