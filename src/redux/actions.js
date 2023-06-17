  
export const addContact = contact => {
  return {
    type: "contact/add",
    payload: contact,
  };
};

export const deleteContact = id => {
  return {
    type: "contact/delete",
    payload: id,
  };
};

export const addFilter = name => {
  return {
    type: "filter/add",
    payload: name,
  };
};