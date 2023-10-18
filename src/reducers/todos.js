import {removeItemOnce, updateItemOnce }from '../helper'

const initialState = {
 
  inputValue: '',
  allValues: [],
};

export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INPUT_VALUE':

      return {
        ...state,
        inputValue: action.payload,
      };

    case "remove-input-val":
      return {
        ...state,
        inputValue: action.payload,
      };

    case "add": 
    const {id , addValue} = action.payload ;
      return {
          ...state,
          allValues: [...state.allValues,
          { 
            id: id,
            addValue:addValue,  
          }
        ]
      };

    case "SET_delete_VALUE":
      const array = removeItemOnce(state.allValues, action.payload);

      return {
        ...state,
        allValues: array,
      };


    case "UPDATE_ITEM":
      const uarray = updateItemOnce(state.allValues, action.payload);

      return {
        ...state,
        allValues: uarray,
      };


    default:
      return state;
  }
};
