export const BTN_ADD = "BTN_ADD";
export const addByButton = (id) => {
  return { type: BTN_ADD, payload: id };
};

export const FEATURE_DEL = "FEATURE_DEL";
export const delByButton = (id) => {
  return { type: FEATURE_DEL, payload: id };
};
