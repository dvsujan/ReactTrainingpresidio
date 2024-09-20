interface Item {
  name: string;
  description: string;
}
export interface State {
  items: Item[];
}
export const initialState: State = {
  items: [],
};

type Action =
  | { type: 'ADD_ITEM'; payload: Item }
  | { type: 'DELETE_ITEM'; index: number };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],  
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter((_, i) => i !== action.index),  
      };
    default:
      return state;
  }
};
