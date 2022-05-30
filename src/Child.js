import { useSelector } from "react-redux";

export const Child = () => {
  const text = useSelector((state) => state.text);

  return (
    <div>
      <h1>Hijo:</h1>
      <h3>State Text: {text}</h3>
    </div>
  )
}
