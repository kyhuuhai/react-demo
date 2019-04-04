const initItems = {
  items: []
};

function itemsReducer(state = initItems, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, item: action.params };
    case 'REMOVE_ITEM':
      const newItems = state.items.filter(item => {
        return item.id !== action.id;
      });
      return { ...state, items: newItems };
    case 'LOAD_ITEMS':
      return { ...state, items: action.items };
    case 'EDIT_ITEMS':
      let items = Object.values({ ...state.items });

      items.map(item => {
        if (item.id === action.item.id) {
          item.name = action.item.name;
          item.description = action.item.description;
        }
      });

      return { ...state, items: items };
    default:
      break;
  }

  return state;
}

export default itemsReducer;
