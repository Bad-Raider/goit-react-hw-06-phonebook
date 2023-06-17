const initialFilterState = '';

export const filterReducer = (state = initialFilterState, action) => {
  if (action.type === 'filter/add') {
    return action.payload;
  }

  return state;
};