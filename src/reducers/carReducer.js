import { BTN_ADD, FEATURE_DEL } from "../actions/carAction";

export const carReducer = (state, action) => {
  switch (action.type) {
    case BTN_ADD:
      return {
        ...state,
        additionalPrice: state.additionalFeatures.id
          ? state.additionalPrice + state.additionalFeatures.price
          : additionalPrice,
        additionalFeatures: additionalFeatures.map((feature, id) => {
          if (id === action.payload.id) {
            return {
              ...feature,
            };
          }
        }),
      };
    case FEATURE_DEL:
      return {
        ...state,
        // need to add code
      };
    default:
      return state;
  }
};
