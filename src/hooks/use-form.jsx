import { useReducer } from "react";

const SET_VALUE = "SET_VALUE";
const CLEAR = "CLEAR";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_VALUE:
      return {
        ...state,
        [payload.name]: payload.value,
      };

    case CLEAR:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export const useForm = (initialState = {}) => {
  const [values, dispatch] = useReducer(reducer, initialState);

  const setValue = (name, value) =>
    dispatch({ type: SET_VALUE, payload: { name, value } });

  const onChange = (name) => (ev) => setValue(name, ev.target?.value || ev);

  return {
    fields: Object.keys(values).reduce(
      (acc, name) => ({
        ...acc,
        [name]: { value: values[name], onChange: onChange(name) },
      }),
      {},
    ),
    clear: () => dispatch({ type: CLEAR, payload: initialState }),
    values,
  };
};
