import { useReducer } from "react";

import Button from "./Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "newUserInput":
      return { ...state, userInput: action.payload };
    case "tgColor":
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
};

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  NEW_USER_INPUT: "newUserInput",
  TG_COLOR: "tgColor",
};

// the above 2 functions can go outside of the component function

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: false,
  });

  return (
    <>
      <main
        className="App"
        style={{ color: state.color ? "yellow" : "dodgerblue" }}
      >
        <input
          type="text"
          value={state.userInput}
          onChange={(e) =>
            dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
          }
        />
        <p className="count">{state.count}</p>
        <Button
          onClick={() => dispatch({ type: ACTION.DECREMENT })}
          value="-"
        ></Button>
        <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: ACTION.TG_COLOR })}>
          Color
        </button>
        <h2>{state.userInput}</h2>
      </main>
    </>
  );
}

export default App;
