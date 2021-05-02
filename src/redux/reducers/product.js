const initialState = {
  result: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOPPING': {
      const oldData = state.result;
      const addData = [...oldData, ...action.payload];
      return {
        ...state,
        result: addData,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default productReducer;
