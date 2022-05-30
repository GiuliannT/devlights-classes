import { useDispatch, useSelector } from "react-redux";
import { Child } from "./Child";

export const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrementClick = () => dispatch({ type: "INCREMENT" });

  const handleDecrementClick = () => dispatch({ type: "DECREMENT" });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrementClick}>+</button>
      <button onClick={handleDecrementClick}>-</button>
      <Child />
    </div>
  );
};
